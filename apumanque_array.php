<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Firebase 2</title>
        </head>
        <body>
             <?php
            $datoss=json_decode($_POST['valor1']);
            foreach($datoss as $datos)
            {
                foreach($datos as $dato)
                {
                    print_r($dato);
                    echo '<hr />';    
                }
                echo '<hr /><hr />';
            }
            ?>
        </body>
    </html>