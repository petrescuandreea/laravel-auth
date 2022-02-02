@extends('layouts.main-layout')
@section('content')

    <section id="registration">
        <h2>Registration</h2>

        <form action="{{ route('register') }}" method="POST">

            @method("POST")
            @csrf

            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Your Name"> <br>
            <br>
            <label for="email">E-mail</label>
            <input type="email" name="email" placeholder="Your Email"> <br>
            <br>
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Password"> <br>
            <br>
            <label for="password-confirm">Confirm password</label>
            <input type="password" name="password_confirmation" placeholder="Repeat your password"> <br>
            <br>
            <br>
            <input type="submit" value="REGISTER">
        </form>
        
    </section>

    <hr>
    
    <section id="log-in">
        <h2>Login</h2>

        <form action="{{ route('login') }}" method="POST">

            @method("POST")
            @csrf

            <label for="email"> Email</label>
            <input type="email" name="email" placeholder="Your Email"> <br>
            <br>
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Your Password"> <br>
            <br>
            <br>
            <input type="submit" value="LOGIN">
        </form>
    </section>
    
@endsection