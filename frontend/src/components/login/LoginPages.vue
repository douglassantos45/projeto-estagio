<template>
  
    <form class="form-signin text-center">
      <img class="mb-2" src="http://ifbaiano.edu.br/portal/wp-content/uploads/2018/12/marca-if-baiano-site.png" alt="" width="130" height="130">
      <h1 class="h2 mb-3 font-weight-normal">Login</h1>
      <label for="inputEmail" class="sr-only">Endereço de Email</label>
      <input type="email" id="inputEmail" class="form-control mb-1" placeholder="Informe seu Email" required autofocus>
      <label for="inputPassword" class="sr-only">Senha</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Informe sua Senha" required>

      <a href="#"><button class="btn btn-lg btn-success btn-block mt-3" type="submit">Iniciar sessão</button></a>
      <p class="mt-4 mb-3 text-muted">&copy; 2019</p>
    </form>

</template>

<script>
export default {

}
</script>

<style>
    html, body {
        height: 100%;
    }

    body {
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -ms-flex-align: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }

    .form-signin {
        width: 500px;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    a:hover {
        text-decoration: none;
    }
</style>