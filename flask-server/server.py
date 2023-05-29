from flask import Flask,redirect, render_template,render_template_string,render_template_string , session
import warnings
import numpy as np
import pandas as pd
from sklearn.metrics import accuracy_score, precision_recall_fscore_support
from sklearn.model_selection import train_test_split, cross_val_score
from statistics import mean
import requests
from bs4 import BeautifulSoup
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import RegexpTokenizer
from time import time
from collections import Counter
import operator
import math
from sklearn.linear_model import LogisticRegression
import nltk
from nltk.corpus import wordnet
from sklearn.naive_bayes import MultinomialNB
from sklearn.naive_bayes import MultinomialNB
import re
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import TreebankWordTokenizer
from sklearn.naive_bayes import MultinomialNB
import smtplib
from flask import request 
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'hbatazeyda'


@app.route('/predict/<sym>/<sym1>/<sym2>/<sym3>/<sym4>/<sym5>/<sym6>/<sym7>')
def hello(sym,sym1,sym2,sym3,sym4,sym5,sym6,sym7):
    warnings.simplefilter("ignore")
    nltk.download('all')
    #une fonction synonymes qui prend un paramètre term qui est le mot pour lequel nous voulons trouver les synonymes
    def equivalent(term):
        equiv = []
        #utilise la méthode synsets de la classe wordnet pour trouver toutes les ensembles de synonymes pour le terme donné
        for syn in wordnet.synsets(term):
            for lemma in syn.lemmas():
                equiv.append(lemma.name())
        return set(equiv)
    stop_words = stopwords.words('english')
    lemmatizer = WordNetLemmatizer()
    splitter = RegexpTokenizer(r'\w+')

    df_comb = pd.read_csv("dis_sym_dataset_comb.csv") # Disease combination
    df_norm = pd.read_csv("dis_sym_dataset_comb.csv") # Individual Disease
    X = df_comb.iloc[:, 1:]
    Y = df_comb.iloc[:, 0:1]
    mnb = MultinomialNB(alpha=0.4,fit_prior=False)
    mnb = mnb.fit(X, Y)
    scores = cross_val_score(mnb, X, Y, cv=5)
    X = df_norm.iloc[:, 1:]
    Y = df_norm.iloc[:, 0:1]
    dataset_symptoms = list(X.columns)
    lemmatizer = WordNetLemmatizer()
    tokenizer = TreebankWordTokenizer()
    doct_input = sym+','+sym1+','+sym2+','+sym3+','+sym4+','+sym5+','+sym6+','+sym7
    input_divise = tokenizer.tokenize(doct_input)
    input_divise = [re.sub(r'[^a-zA-Z\s]', '', sym) for sym in input_divise]
    input_mini = [sym.lower() for sym in input_divise]
    final_input = [lemmatizer.lemmatize(sym) for sym in input_mini]
    expanded_symptoms = list(final_input)
    for symptom in final_input:
        # Ajouter le symptôme original à la liste des symptômes possibles
        possible_symptoms = set([symptom])

        # Trouver toutes les combinaisons possibles des mots dans le symptôme
        symptom_terms = symptom.split()
        for i in range(len(symptom_terms)):
            for j in range(i, len(symptom_terms)):
                # Combinez les mots en une phrase
                phrase = ' '.join(symptom_terms[i:j+1])
                # Trouvez tous les synonymes pour la phrase
                phrase_synonyms = equivalent(phrase)
                # Ajoutez la phrase et ses synonymes à la liste des symptômes possibles
                possible_symptoms.update(phrase_synonyms)

        # Joindre la liste des symptômes possibles et remplacer les tirets bas par des espaces
        expanded_symptom = ' '.join(possible_symptoms).replace('_', ' ')

        # Ajouter le symptôme final à la liste des symptômes étendus
        expanded_symptoms.append(expanded_symptom)
    l = []
    for i in range(len(expanded_symptoms)):
        if expanded_symptoms[i] in dataset_symptoms and expanded_symptoms[i] not in l:
            l.append(expanded_symptoms[i])
        sample_x = [0 for x in range(0,len(dataset_symptoms))]
    for val in l:
        sample_x[dataset_symptoms.index(val)]=1
    mnb = MultinomialNB(alpha=0.4,fit_prior=False)
    mnb = mnb.fit(X, Y)
    prediction = mnb.predict_proba([sample_x])
    k = 5
    diseases = list(set(Y['label_dis']))
    diseases.sort()
    topk = prediction[0].argsort()[-k:][::-1]
    topk_dict = {}
    # Show top 10 highly probable disease to the user.
    for idx,t in  enumerate(topk):
        match_sym=set()
        row = df_norm.loc[df_norm['label_dis'] == diseases[t]].values.tolist()
        row[0].pop(0)

        for idx,val in enumerate(row[0]):
            if val!=0:
                match_sym.add(dataset_symptoms[idx])
        prob = (len(match_sym.intersection(set(l)))+1)/(len(set(l))+1)
        #prob = (nombre de symptômes en commun entre la maladie et les symptômes sélectionnés + 1) / (nombre total de symptômes sélectionnés + 1)
        prob *= mean(scores)
        topk_dict[t] = prob
    j = 0
    topk_index_mapping = {}
    rows = []
    topk_sorted = dict(sorted(topk_dict.items(), key=lambda kv: kv[1], reverse=True))
    for key in topk_sorted:
        prob = topk_sorted[key]*100
        topk_index_mapping[j] = key
        j += 1
        rows.append({'disease': diseases[key], 'probability': prob})
    session['my_rows'] = rows 
    return render_template('template.html',rows=rows)

@app.route("/predict")
def predict():

    print(f"\nTop {k} diseases predicted based on symptoms")
    topk_dict = {}
    # Show top 10 highly probable disease to the user.
    for idx,t in  enumerate(topk):
        match_sym=set()
        row = df_norm.loc[df_norm['label_dis'] == diseases[t]].values.tolist()
        row[0].pop(0)

        for idx,val in enumerate(row[0]):
            if val!=0:
                match_sym.add(dataset_symptoms[idx])
        prob = (len(match_sym.intersection(set(l)))+1)/(len(set(l))+1)
        #prob = (nombre de symptômes en commun entre la maladie et les symptômes sélectionnés + 1) / (nombre total de symptômes sélectionnés + 1)
        prob *= mean(scores)
        topk_dict[t] = prob
    j = 0
    topk_index_mapping = {}
    topk_sorted = dict(sorted(topk_dict.items(), key=lambda kv: kv[1], reverse=True))
    for key in topk_sorted:
        prob = topk_sorted[key]*100
        print(str(j) + " Disease name:",diseases[key], "\tProbability:",str(round(prob, 2))+"%")
        topk_index_mapping[j] = key
        j += 1


app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'doctsmarttn@gmail.com'
app.config['MAIL_PASSWORD'] = 'yrwiuylkahvdofhd'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/sendemail')
def send_email():
    rows = session.get('my_rows')
    body = render_template_string('''
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Prediction</title>
            <style>
              /* Add your CSS code here */
             @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
              *{
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  font-family: 'Poppins', sans-serif;
                  color:black;
              }
              body {
                  justify-content: center;
                  text-align: center;
                  position: relative;
                  align-items: center;
              }
              td {
                  text-align: center;
              }
              
              .disease1{
                  position: relative;
                  width: 200px;
                  border: 2px solid rgb(0, 0, 0);
              }
              .index1{
                  position: relative;
                  border: 2px solid rgb(0, 0, 0);
              }
              .graph1{
                  position: relative;
                  width: 60%;
                  border: 2px solid rgb(0, 0, 0);
              }
              tbody {
                  position: relative;
                  width: 500px;
                  height: 400px;
              }
              table {
                  position: relative;
                  left: 26%;
                  top: 50px;
              }
              h1 {
                position: relative;
                text-align:center;
                padding: 0;
                margin: 0;
                font-family: "Raleway", sans-serif;
                font-weight: bold;
                font-size: 40px;
                color: #000000;
                -webkit-transition: all 0.4s ease 0s;
                -o-transition: all 0.4s ease 0s;
                transition: all 0.4s ease 0s;
              }
              p {
                position:relative;
                text-align:start ;
                font-size:18px;
                color:black;
              }
              .doctorname {
              text-align:end;
              }
              .date {
              text-align:end;
              }
              .three {
                position:relative;
                margin-top:20px;
              }

              /*poucentage bars*/
              .skill-box{
                  width: 100%;
                  margin: 25px 0;
              }
              .skill-box .title{
                  display: block;
                  font-size: 14px;
                  font-weight: 600;
                  color: #333;
              }
              .skill-box .skill-bar{
                  height: 8px;
                  width: 80%;
                  margin-left: 10%;
                  border-radius: 6px;
                  margin-top: 6px;
                  background: rgba(0,0,0,0.1);
              }
              .skill-bar .skill-per{
                  position: relative;
                  display: block;
                  height: 100%;
                  border-radius: 6px;
                  background: #4070f4;
                  opacity: 1;
              }

              .skill-per .tooltip{
                  position: absolute;
                  right: -14px;
                  top: -28px;
                  font-size: 9px;
                  font-weight: 500;
                  color: #fff;
                  padding: 2px 6px;
                  border-radius: 3px;
                  background: #4070f4;
                  z-index: 1;
              }
              .mailbtn {
                  position: relative;
                  top: 100px;
                  text-decoration: none;
              }
            </style>
        </head>
          <body>
          <h2>WELCOME TO DOCTSMART </h2>
          <p class="doctorname"> <b> Doctor </b> : <sup>Dr</sup> Doctor20 </p>
          <p class="date"> <b> Date </b> : /04/2023</p>
          <p> <b> FirstName </b> : Raslen </p>
          <p> <b> LastName </b>: Ouarghi </p>
          <p> <b> Phone Num </b>: +216 58 039 513 </p>
          <div class="three">
            <h1>Consultation Result</h1>
          </div>
            <p>
              Cher patient, <br><br/>

              Nous souhaitons vous informer des résultats de votre récente évaluation médicale. Après une analyse approfondie de vos symptômes, de vos examens et de votre historique médical, notre équipe médicale a établi un diagnostic concernant votre condition de santé.

              Nous avons identifié que vous souffrez de <b> {{ rows[0].disease }} </b>.Notre équipe médicale est disponible pour répondre à toutes vos questions, vous fournir des informations supplémentaires sur la maladie, et vous proposer un plan de traitement personnalisé pour gérer et traiter votre condition.

              <br><br/>Nous tenons à souligner qu'il est important de suivre les recommandations médicales, de prendre les médicaments prescrits et de respecter les rendez-vous de suivi. En travaillant ensemble, nous pouvons améliorer votre qualité de vie et favoriser votre rétablissement.

              <br><br/>N'hésitez pas à nous contacter si vous avez des préoccupations supplémentaires ou si vous avez besoin de plus d'informations. Votre bien-être est notre priorité, et nous sommes là pour vous accompagner à chaque étape de votre parcours de guérison.

              <br><br/>
              Cordialement,
              <br><br/>
              L'équipe médicale
            </p>
          </body>
        </html>
    ''', rows=rows)
    message = Message("DISEASE PREDICTION RESULT", sender='doctsmarttn@gmail.com', recipients=['raslen.ouarghi@ensi-uma.tn','mohamed.mezzi@ensi-uma.tn'])
    message.html = body
    mail.send(message)
    return redirect(request.referrer)


if __name__=="__main__":
    app.run(debug=False)