<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'wordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'EV7WvWqz' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          ';!p,m$/bpi|1y1=qWSN7|Dm0Lj1&b-^ckJJ (haab6GXvp_p^u?z@=y1%Y/s0)AG' );
define( 'SECURE_AUTH_KEY',   '8nII*S*cYo_l=_;el^~rpuL0)S}KvypZX~|q |f9Z%uxHNZ2FDsx>wx2[=[6a)ZY' );
define( 'LOGGED_IN_KEY',     '{*HQqE@!=~/-Y2QE[S KRgFM%D)X8y$R7P/;_!45f[s~GV#kT-}+#k~g;*nG{.Y1' );
define( 'NONCE_KEY',         '17~/IyNX`XQu:z;ZJ]pT<=U,z|8hk:Qm0q&`Oiz,^ms;SJvA,iV[k/,PaA@<XVno' );
define( 'AUTH_SALT',         's6r}|.Nj@/1B>dJk>X9b8q6@t=%1/_E]>As(A+kU6lCXW$l~xFKs6H4^xBG<QkVm' );
define( 'SECURE_AUTH_SALT',  'xV;.{30h~f2ttJcLV}W:SkD;O1+sDN$yM=/oSi&y!bh;2$.vLC<lyFY,IT?s+4Ug' );
define( 'LOGGED_IN_SALT',    'JSwDo@_c1 iI&m:}CCdE?HI]Pljdl%?4<-ENS<Bdd<5*I4{GeJW&Jt%-xSpb*D-/' );
define( 'NONCE_SALT',        'Xh3EdrSN+%s+Ia]9I-DvPxJqakHc j$zMe;S{MHeoP#}>m4@e1+,RzQtc.c2?E8]' );
define( 'WP_CACHE_KEY_SALT', 'Y_e;*6I_/|exBE!hRdic>T:rVetz(~9[ Ro cbLC/wRrC1{je5s+l&_vPC0Aa+}o' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


define('WP_ALLOW_MULTISITE', true);


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
