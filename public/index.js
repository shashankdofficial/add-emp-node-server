var email = 'allyouget14@gmail.com';
        var password = '123456';

        function myfunc() {
            event.preventDefault();
            let user = document.getElementById('exampleInputEmail1').value;
            let pass = document.getElementById('exampleInputPassword1').value;

            if (user === email && pass === password) {
                sessionStorage.setItem('flag', 'true');
                window.location.assign('/form');
            }
            else {
                alert("Please enter correct credentials")
                window.location.assign("index");
            }
        }