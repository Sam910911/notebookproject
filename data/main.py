from flask import Flask, request, render_template, redirect, url_for
import firebase_admin,os
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('./notebook-3fb2f-firebase-adminsdk-8l8xh-7e3daac305.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
ID = 1
noteID = 1
user = ''
notelist = []
app = Flask(__name__)
@app.route("/register",methods=["GET", "POST"])
def register():
    global ID   
    userlist = []
    docs = db.collection('register').stream()
    for doc in docs:
        userlist.append(doc.id)
    ID = len(userlist) + 1
    print(ID)
    try:
        if request.method == 'POST':
            if request.form.get('username') == '' or request.form.get('password') == '' or request.form.get('email') == '' :
                return render_template('register.html',error="fill in")
            usname = request.form.get('username')
            pas = request.form.get('password')
            Email = request.form.get('email')
            doc_ref = db.collection('register').document(usname)
            doc = doc_ref.get()
            if doc.exists:
                return render_template('register.html',error="user exsists")
            else:
                data = {
                    u'ID': ID,
                    u'password': pas,
                    u'email': Email
                }
                db.collection('register').document(usname).set(data)
                ID+=1
                return redirect(url_for('login'))
    except:
        return render_template('register.html',error='invalid character')
    return render_template('register.html',error='')
@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        try:
            global user, noteID
            noteID = 1
            usname = request.form.get('username')
            pas = request.form.get('password')
            doc_ref = db.collection('register').document(usname)
            doc = doc_ref.get()
            if doc.exists:
                getpass = doc.to_dict()['password']
                if pas == getpass:
                    user = usname
                    return redirect(url_for('main', user = usname))
                else:
                    return render_template('login.html', user = usname, error = 'wrong pass')
            else:
                return render_template('login.html', user = usname, error = 'no such user')
        except:
            return render_template('login.html', error = 'invalid')
    return render_template('login.html', error = '')
@app.route('/main/<user>')
def main(user):
    global notelist, noteID
    doc_ref = db.collection('register').document(user)
    docs = doc_ref.collection('note').stream()
    for doc in docs:
        notelist.append(doc.id)
    noteID = len(notelist) + 1
    returnlist = notelist
    notelist = []
    return render_template('project.html', title = returnlist, user = user)
@app.route('/note/<user>', methods = ["GET", "POST"])
def codemirror(user):
    global noteID
    doc_ref = db.collection('register').document(user)
    if request.method == 'POST':
        if request.form['save_note'] == 'Submit':    
            content = request.form.get('codemirror')
            data = {
                'note' : content
            }
            doc_ref.collection('note').document('note' + str(noteID)).set(data)
            return redirect(url_for('main', user = user))
    return render_template('codemirror.html', edit = False)
@app.route('/edit/<user>/<notetag>', methods = ["GET", "POST"])
def codemirroredit(user,notetag):
    doc_ref = db.collection('register').document(user)
    get_note = doc_ref.collection('note').document(notetag).get()
    contain = get_note.to_dict()['note']
    if request.method == 'POST':
        if request.form['save_note'] == 'Submit':
            content = request.form.get('codemirror')
            data = {
                'note' : content
            }
            doc_ref.collection('note').document(notetag).set(data)
            return redirect(url_for('main', user = user))
    return render_template('codemirror.html', edit = True, text = contain)
@app.route('/delete/<user>/<notetag>')
def delete(user, notetag):
    doc_ref = db.collection('register').document(user)
    doc_ref.collection('note').document(notetag).delete()
    return redirect(url_for('main', user = user))
if __name__ == "__main__":
    app.run(debug=True)
