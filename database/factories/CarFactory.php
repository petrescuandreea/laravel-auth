<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Car;
use Faker\Generator as Faker;

$factory->define(Car::class, function (Faker $faker) {
    return [
        
        'name' => $faker -> unique() -> words(3, true),
        'manufacture' => $faker -> optional() -> words(3, true),
        'displacement' => $faker -> numberBetween(500, 150000),
    ];
});
