<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc19948259b0a6c48d48c9e92afde77bb
{
    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WilcityPaidClaim\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WilcityPaidClaim\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc19948259b0a6c48d48c9e92afde77bb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc19948259b0a6c48d48c9e92afde77bb::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}