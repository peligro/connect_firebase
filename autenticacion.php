<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Firebase 1</title>
            <link rel="stylesheet" href="public/css/bootstrap.min.css" />
        </head>
        <body>
            <div class="container">
                <div class="panel panel-primary">
                    <div class="panel-heading">Autenticación</div>
                    <div class="panel-body">
                            
                            <p>
                                <label for="correo">E-Mail</label>
                                <input type="text" name="correo" id="correo" class="form-control" autofocus="true" />
                            </p>
                            <p>
                                <label for="pass">Contraseña</label>
                                <input type="password" name="pass" id="pass" class="form-control" />
                            </p>
                            <hr />
                            <button  id="login" class="btn btn-info">Login</button>
                            <button  id="registro" class="btn btn-success">Registro</button>
                            <button  id="salir" class="btn btn-danger hide">Salir</button>
                            
                    </div>
                </div>
            </div>
            
            <script src="https://www.gstatic.com/firebasejs/3.6.4/firebase.js"></script>
            <script src="public/js/apumanque1.js"></script>
        </body>
    </html>