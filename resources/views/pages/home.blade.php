@extends('layouts.main-layout')
@section('content')

    <section class="content">
        @auth
            <h1>{{ Auth::user() -> name }}</h1>
            <a href="{{ route('logout') }}">LOGOUT</a>
        @else
            <h1>If you wanna see my site you have to login/register</h1>
        @endauth

        <div class="container">

            <div id="registration">
                <h2>Registration</h2>
        
                <form action="{{ route('register') }}" method="POST">
        
                    @method("POST")
                    @csrf
        
                    <label for="name">Name</label><br>
                    <input type="text" name="name" placeholder="Your Name"> <br>
                    <br>
                    <label for="email">E-mail</label><br>
                    <input type="email" name="email" placeholder="Your Email"> <br>
                    <br>
                    <label for="password">Password</label><br>
                    <input type="password" name="password" placeholder="Password"> <br>
                    <br>
                    <label for="password-confirm">Confirm password</label><br>
                    <input type="password" name="password_confirmation" placeholder="Repeat your password"> <br>
                    <br>
                    <br>
                    <input type="submit" value="REGISTER">
                </form>
            </div>
    
            <div id="log-in">
                <h2>Login</h2>
        
                <form action="{{ route('login') }}" method="POST">
        
                    @method("POST")
                    @csrf
        
                    <label for="email"> Email</label><br>
                    <input type="email" name="email" placeholder="Your Email"> <br>
                    <br>
                    <label for="password">Password</label><br>
                    <input type="password" name="password" placeholder="Your Password"> <br>
                    <br>
                    <br>
                    <input type="submit" value="LOGIN">
                </form>
            </div>
        </div>
    
    </section>
    
@endsection