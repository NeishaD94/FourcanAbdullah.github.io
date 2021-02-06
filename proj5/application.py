from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Q18598765@localhost/Class_schedule'
db = SQLAlchemy(app)


class Data(db.Model):
    def __init__(self, classNames, professor, weekDay, startTime, endTime):
        self.className = classNames
        self.Professor = professor
        self.weekdays = weekDay
        self.Start_time = startTime
        self.End_time = endTime

    __tablename__ = "userinfo"
    id = db.Column(db.Integer, primary_key=True)
    className = db.Column(db.String)
    Professor = db.Column(db.String)
    weekdays = db.Column(db.String)
    Start_time = db.Column(db.Time)
    End_time = db.Column(db.Time)


@app.route("/")
def index():
    return render_template("front.html")


@app.route("/thankyou", methods=['POST', 'GET'])
def thankyou():
    if request.method == 'POST':
        classofuser = request.form["class"]
        professorName = request.form["prof"]
        week_day = request.form.getlist("weekd")
        start_time = request.form["stime"]
        end_time = request.form["etime"]
        print(request.form)

        data = Data(classofuser, professorName, week_day, start_time, end_time)
        db.session.add(data)
        db.session.commit()

    return render_template("thankyou.html", methods=['POST'])


if __name__ == '__main__':
    app.debug = True
    app.run()
