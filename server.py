from flask import Flask
from flask_cors import CORS
import pandas as pd
import matplotlib.pyplot as plt
import json

app = Flask(__name__)
CORS(app)

def plot_data(df, item):
    selected_columns = df.iloc[:, 1:6]

    selected_columns = selected_columns.apply(pd.to_numeric, errors='coerce')

    fcf_row = df.loc[df.index == item]
    selected_columns.T.plot(kind='bar', legend=False)
    plt.title(f'{item} Past 5 Years')
    plt.xlabel('Years')
    plt.ylabel(item)
    plt.show()

@app.route('/', methods=['GET'])
def results():
    with open('stock_info.json', 'r') as file:
        stock_data = json.load(file)
    return stock_data

@app.route("/SBC_ADJ_FCF", methods=['GET'])
def SBC_adj_FCF():
    with open('stock_info.json', 'r') as file:
        financial_data = json.load(file)
    return [{"year": int(year), "SBC_ADJ_FCF": data["SBC_adj_FCF"]} for year, data in financial_data.items() if year.isdigit()]
    
if __name__ == "__main__":
    app.run(debug=True)