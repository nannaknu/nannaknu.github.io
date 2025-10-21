function copyEmail() {
      const email = "jokataknuuttila@gmail.com";
      navigator.clipboard.writeText(email).then(function() {
        alert("Sähköpostiosoite kopioitu: " + email);
      }, function(err) {
        alert("Kopiointi epäonnistui");
      });
      document.getElementById("mail").value= email;
    }
