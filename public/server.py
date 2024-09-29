from flask import Flask, jsonify
from flask_cors import CORS



data = """{
  type: "problem",
  title: "my first problem",
  description: "so it begins",
  is_optimal: true,
  children: [
    {
      type: "decision",
      title: "decision 1.1",
      description: "so it begins",
      is_optimal: false,
      values: {
        "Time": 100,
        "Money": 9,
        "Reputation": -8
      },
      children: [
        {
          type: "outcome",
          title: "outcome 1.1.1",
          description: "so it begins",
          is_optimal: true,
          probability: 0.7,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: []
        },
        {
          type: "outcome",
          title: "outcome 1.1.2",
          description: "so it begins",
          probability: 0.2,
          is_optimal: true,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: []
        },
        {
          type: "outcome",
          title: "outcome 1.1.3",
          description: "so it begins",
          probability: 0.1,
          is_optimal: true,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: []
        }
      ]
    },
    {
      type: "decision",
      title: "decision 1.2",
      description: "so it begins",
      is_optimal: false,
      values: {
        "Time": 100,
        "Money": 9,
        "Reputation": -8
      },
      children: [
        {
          type: "outcome",
          title: "outcome 1.2.1",
          description: "so it begins",
          is_optimal: true,
          probability: 0.7,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: []
        },
        {
          type: "outcome",
          title: "outcome 1.2.2",
          description: "so it begins",
          probability: 0.2,
          is_optimal: true,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: []
        },
        {
          type: "outcome",
          title: "outcome 1.2.3",
          description: "so it begins",
          probability: 0.1,
          is_optimal: true,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: []
        }
      ]
    },
    {
      type: "decision",
      title: "decision 1.3",
      description: "so it begins",
      is_optimal: true,
      values: {
        "Time": 100,
        "Money": 9,
        "Reputation": -8
      },
      children: [
        {
          type: "outcome",
          title: "outcome 1.3.1",
          description: "so it begins",
          is_optimal: true,
          probability: 0.7,
          values: {
            "Time": 100,
            "Money": 900,
            "Reputation": -8
          },
          children: []
        },
        {
          type: "outcome",
          title: "outcome 1.3.2",
          description: "so it begins",
          probability: 0.2,
          is_optimal: true,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: []
        },
        {
          type: "outcome",
          title: "outcome 1.3.3",
          description: "so it begins",
          probability: 0.1,
          is_optimal: true,
          values: {
            "Time": 100,
            "Money": 9,
            "Reputation": -8
          },
          children: [
            {
              type: "problem",
              title: "my first problem",
              description: "so it begins",
              is_optimal: true,
              children: [
                {
                  type: "decision",
                  title: "decision 1.1",
                  description: "so it begins",
                  is_optimal: false,
                  values: {
                    "Time": 100,
                    "Money": 9,
                    "Reputation": -8
                  },
                  children: [
                    {
                      type: "outcome",
                      title: "outcome 1.1.1",
                      description: "so it begins",
                      is_optimal: true,
                      probability: 0.7,
                      values: {
                        "Time": 100,
                        "Money": 9,
                        "Reputation": -8
                      },
                      children: []
                    }
                  ],
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}"""

app = Flask('__name__')

CORS(app)

@app.route('/data', methods=['GET'])
def sendMessage():
    return jsonify(data)

if __name__ == '__main':
    app.run(host='127.0.0.1', port=5000, debug=True)