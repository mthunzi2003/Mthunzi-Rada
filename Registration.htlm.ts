<!DOCTYPE html>
<html>
    <header>REGISTRATION</header><br><br><br>
    <style>
        .form.group {
            margin-bottom: 25px;
        }
  
 
    </style>
<body>
    <form>
        <div class = "form-group">
            <label for ="textInput">First name *: </label>
            <input type="text" id="textInput" name="name" placeholder="Name"><br><br>
        </div>

        <div class = "form-group">
            <label for = "textInput"> Last Name *: </label>
            <input type="text" id="textInput" name="name" placeholder="Last Name"><br><br>
        </div>

        <div class = "form-group">
            <label for = "textInput"> Email Address *: </label>
            <input type="text" id="textInput" name="name" placeholder="Email Address"><br><br>
        </div>

        <div class = "form-group">
            <label for = "textInput"> Password *: </label>
            <input type="text" id="textInput" name="name" placeholder="Password"><br><br>
        </div>

        <div class = "form-group">
            <label for = "textInput"> Confirm Password *: </label>
            <input type="text" id="textInput" name="name" placeholder="Confirm Password"><br><br>
        </div>

        <div class = "form-group">
            <label for = "textInput"> Birthday: </label>
            <input type="text" id="date" name="name" placeholder="Birthday"> <br><br>
        </div>
     
        <div class = "form-group">
            <lable for = "textInput"> Gender Identity</lable><br>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
            <input type="radio" id="nonBinary" name="gender" value="non_binary">
            <label for="nonBinary">Non Binary</label>
            <input type="radio" id="notSpecified" name="gender" value="prefer_not_to_answer">
            <label for="notSpecified">I Prefer Not to Answer</label><br><br>

        </div>

        <div class = "form-group">
            <lable for = "textInput"> A short discription about your self </lable><br>
            <textarea id="INTRO" name="discription" rows="7" cols="65" placeholder="Brief Intro"></textarea><br><br>
        </div>

    <div class = "form-group">
        <lable for = "textInput"> Favourate Language:</lable>
        <select name="Languages" id="Languages">
            <option value="English">English</option>
            <option value="Afrikaans">Afrikaans</option>
            <option value="Mandarian">Mandarian</option>
            <option value="Isixhosa">Isixhosa</option>
        </select><br><br>
    </div>
    
    <div class="form-group">
         <input type="checkbox" id="check" name="Email" value="Email">
        <label for="Email"> Yes, I would like to recieve periodic email updates</label><br><br>
    </div>

    <input type="submit" value="Create Account"><br><br>

    <p1>* Indicates a required field</p1>
   


    </form>
</body>
   </html>