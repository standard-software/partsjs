( t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   =   t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   | |   [ ] ) . p u s h ( [ [ 1 ] , { 
 
 / * * * /   2 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ c o m m o n   =   v o i d   0 ; 
 
 f u n c t i o n   _ s l i c e d T o A r r a y ( a r r ,   i )   {   r e t u r n   _ a r r a y W i t h H o l e s ( a r r )   | |   _ i t e r a b l e T o A r r a y L i m i t ( a r r ,   i )   | |   _ u n s u p p o r t e d I t e r a b l e T o A r r a y ( a r r ,   i )   | |   _ n o n I t e r a b l e R e s t ( ) ;   } 
 
 f u n c t i o n   _ n o n I t e r a b l e R e s t ( )   {   t h r o w   n e w   T y p e E r r o r ( " I n v a l i d   a t t e m p t   t o   d e s t r u c t u r e   n o n - i t e r a b l e   i n s t a n c e . \ n I n   o r d e r   t o   b e   i t e r a b l e ,   n o n - a r r a y   o b j e c t s   m u s t   h a v e   a   [ S y m b o l . i t e r a t o r ] ( )   m e t h o d . " ) ;   } 
 
 f u n c t i o n   _ i t e r a b l e T o A r r a y L i m i t ( a r r ,   i )   {   i f   ( t y p e o f   S y m b o l   = = =   " u n d e f i n e d "   | |   ! ( S y m b o l . i t e r a t o r   i n   O b j e c t ( a r r ) ) )   r e t u r n ;   v a r   _ a r r   =   [ ] ;   v a r   _ n   =   t r u e ;   v a r   _ d   =   f a l s e ;   v a r   _ e   =   u n d e f i n e d ;   t r y   {   f o r   ( v a r   _ i   =   a r r [ S y m b o l . i t e r a t o r ] ( ) ,   _ s ;   ! ( _ n   =   ( _ s   =   _ i . n e x t ( ) ) . d o n e ) ;   _ n   =   t r u e )   {   _ a r r . p u s h ( _ s . v a l u e ) ;   i f   ( i   & &   _ a r r . l e n g t h   = = =   i )   b r e a k ;   }   }   c a t c h   ( e r r )   {   _ d   =   t r u e ;   _ e   =   e r r ;   }   f i n a l l y   {   t r y   {   i f   ( ! _ n   & &   _ i [ " r e t u r n " ]   ! =   n u l l )   _ i [ " r e t u r n " ] ( ) ;   }   f i n a l l y   {   i f   ( _ d )   t h r o w   _ e ;   }   }   r e t u r n   _ a r r ;   } 
 
 f u n c t i o n   _ a r r a y W i t h H o l e s ( a r r )   {   i f   ( A r r a y . i s A r r a y ( a r r ) )   r e t u r n   a r r ;   } 
 
 f u n c t i o n   _ t o C o n s u m a b l e A r r a y ( a r r )   {   r e t u r n   _ a r r a y W i t h o u t H o l e s ( a r r )   | |   _ i t e r a b l e T o A r r a y ( a r r )   | |   _ u n s u p p o r t e d I t e r a b l e T o A r r a y ( a r r )   | |   _ n o n I t e r a b l e S p r e a d ( ) ;   } 
 
 f u n c t i o n   _ n o n I t e r a b l e S p r e a d ( )   {   t h r o w   n e w   T y p e E r r o r ( " I n v a l i d   a t t e m p t   t o   s p r e a d   n o n - i t e r a b l e   i n s t a n c e . \ n I n   o r d e r   t o   b e   i t e r a b l e ,   n o n - a r r a y   o b j e c t s   m u s t   h a v e   a   [ S y m b o l . i t e r a t o r ] ( )   m e t h o d . " ) ;   } 
 
 f u n c t i o n   _ u n s u p p o r t e d I t e r a b l e T o A r r a y ( o ,   m i n L e n )   {   i f   ( ! o )   r e t u r n ;   i f   ( t y p e o f   o   = = =   " s t r i n g " )   r e t u r n   _ a r r a y L i k e T o A r r a y ( o ,   m i n L e n ) ;   v a r   n   =   O b j e c t . p r o t o t y p e . t o S t r i n g . c a l l ( o ) . s l i c e ( 8 ,   - 1 ) ;   i f   ( n   = = =   " O b j e c t "   & &   o . c o n s t r u c t o r )   n   =   o . c o n s t r u c t o r . n a m e ;   i f   ( n   = = =   " M a p "   | |   n   = = =   " S e t " )   r e t u r n   A r r a y . f r o m ( o ) ;   i f   ( n   = = =   " A r g u m e n t s "   | |   / ^ ( ? : U i | I ) n t ( ? : 8 | 1 6 | 3 2 ) ( ? : C l a m p e d ) ? A r r a y $ / . t e s t ( n ) )   r e t u r n   _ a r r a y L i k e T o A r r a y ( o ,   m i n L e n ) ;   } 
 
 f u n c t i o n   _ i t e r a b l e T o A r r a y ( i t e r )   {   i f   ( t y p e o f   S y m b o l   ! = =   " u n d e f i n e d "   & &   S y m b o l . i t e r a t o r   i n   O b j e c t ( i t e r ) )   r e t u r n   A r r a y . f r o m ( i t e r ) ;   } 
 
 f u n c t i o n   _ a r r a y W i t h o u t H o l e s ( a r r )   {   i f   ( A r r a y . i s A r r a y ( a r r ) )   r e t u r n   _ a r r a y L i k e T o A r r a y ( a r r ) ;   } 
 
 f u n c t i o n   _ a r r a y L i k e T o A r r a y ( a r r ,   l e n )   {   i f   ( l e n   = =   n u l l   | |   l e n   >   a r r . l e n g t h )   l e n   =   a r r . l e n g t h ;   f o r   ( v a r   i   =   0 ,   a r r 2   =   n e w   A r r a y ( l e n ) ;   i   <   l e n ;   i + + )   {   a r r 2 [ i ]   =   a r r [ i ] ;   }   r e t u r n   a r r 2 ;   } 
 
 / *   e s l i n t - d i s a b l e   m a x - l e n   * / 
 
 / *   e s l i n t - d i s a b l e   n o - v a r   * / 
 / /   i m p o r t   m o m e n t   f r o m   ' m o m e n t ' ; 
 v a r   t e s t _ e x e c u t e _ c o m m o n   =   f u n c t i o n   t e s t _ e x e c u t e _ c o m m o n ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             c h e c k E q u a l   =   _ p a r t s $ t e s t . c h e c k E q u a l , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t , 
             t e s t   =   _ p a r t s $ t e s t . t e s t , 
             t e s t C o u n t e r   =   _ p a r t s $ t e s t . t e s t C o u n t e r ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ c o m m o n ' ,   f u n c t i o n   ( )   { 
         v a r   c l o n e   =   p a r t s . c l o n e , 
                 m e r g e   =   p a r t s . m e r g e , 
                 i s U n d e f i n e d   =   p a r t s . i s U n d e f i n e d , 
                 i s O b j e c t   =   p a r t s . i s O b j e c t , 
                 i s A r r a y   =   p a r t s . i s A r r a y ; 
         v a r   _ p a r t s $ t e s t 2   =   p a r t s . t e s t , 
                 c h e c k E q u a l   =   _ p a r t s $ t e s t 2 . c h e c k E q u a l , 
                 c h e c k C o m p a r e   =   _ p a r t s $ t e s t 2 . c h e c k C o m p a r e , 
                 i s T h r o w n   =   _ p a r t s $ t e s t 2 . i s T h r o w n , 
                 i s T h r o w n E x c e p t i o n   =   _ p a r t s $ t e s t 2 . i s T h r o w n E x c e p t i o n , 
                 t e s t C o u n t e r   =   _ p a r t s $ t e s t 2 . t e s t C o u n t e r ; 
         v a r   _ p a r t s $ o b j e c t   =   p a r t s . o b j e c t , 
                 o b j e c t E n t r i e s   =   _ p a r t s $ o b j e c t . o b j e c t E n t r i e s , 
                 o b j e c t F r o m E n t r i e s   =   _ p a r t s $ o b j e c t . o b j e c t F r o m E n t r i e s ; 
         v a r   m a p   =   p a r t s . a r r a y . m a p ; 
 
         v a r   t e s t _ c l o n e _ o b j e c t   =   f u n c t i o n   t e s t _ c l o n e _ o b j e c t ( )   { 
             i t ( ' t e s t _ c l o n e _ o b j e c t ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t O b j e c t 1   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 
                 } ;   / /   n o   c l o n e 
 
                 v a r   o b j e c t 1   =   t e s t O b j e c t 1 ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 0 ,   t e s t O b j e c t 1 . a ) ; 
                 t e s t O b j e c t 1 . a   =   1 ;   / /   c l o n e 
 
                 v a r   o b j e c t 1   =   c l o n e ( t e s t O b j e c t 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 2 ,   o b j e c t 1 . b ) ; 
                 c h e c k E q u a l ( 3 ,   o b j e c t 1 . c ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t O b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 2 ,   t e s t O b j e c t 1 . b ) ; 
                 c h e c k E q u a l ( 3 ,   t e s t O b j e c t 1 . c ) ;   / /   n o   c l o n e   d e e p 
 
                 v a r   t e s t O b j e c t 2   =   { 
                     a :   4 , 
                     b :   5 , 
                     c :   6 
                 } ; 
                 v a r   t e s t O b j e c t 3   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   t e s t O b j e c t 2 
                 } ; 
                 v a r   o b j e c t 1   =   c l o n e ( t e s t O b j e c t 3 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t O b j e c t 3 . a ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . d   = = =   t e s t O b j e c t 3 . d ) ; 
                 c h e c k E q u a l ( 6 ,   o b j e c t 1 . d . c ) ; 
                 c h e c k E q u a l ( 6 ,   t e s t O b j e c t 3 . d . c ) ; 
                 o b j e c t 1 . d . a   =   7 ; 
                 c h e c k E q u a l ( 7 ,   o b j e c t 1 . d . a ) ; 
                 c h e c k E q u a l ( 7 ,   t e s t O b j e c t 3 . d . a ) ;   / /   o b j e c t   f r o m   n u l l 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     v a r   o b j e c t 1   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a   =   1 ; 
                     v a r   o b j e c t 2   =   c l o n e ( o b j e c t 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                     o b j e c t 2 . a   =   0 ; 
                     c h e c k E q u a l ( 1 ,   o b j e c t 1 . a ) ; 
                     c h e c k E q u a l ( 0 ,   o b j e c t 2 . a ) ; 
                     v a r   o b j e c t 1   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a . b   =   ' t e s t ' ; 
                     v a r   o b j e c t 2   =   c l o n e ( o b j e c t 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 1 . a ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 1 ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 2 . a ) ) ; 
                     t e s t C o u n t e r ( ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 2 ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   o b j e c t 1   = = =   o b j e c t 2 ) ; 
                     c h e c k E q u a l ( t r u e ,   o b j e c t 1 . a   = = =   o b j e c t 2 . a ) ; 
                     c h e c k E q u a l ( t r u e ,   o b j e c t 1 . a . b   = = =   o b j e c t 2 . a . b ) ; 
                 }   / /   m o d u l e   o b j e c t   c l o n e   n o   s u p p o r t 
 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     v a r   c l o n e P a r t s   =   p a r t s . c l o n e ( p a r t s ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                     c h e c k E q u a l ( t r u e ,   c l o n e P a r t s   = = =   p a r t s ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s M o d u l e ( c l o n e P a r t s ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   p a r t s . i s O b j e c t N o r m a l ( c l o n e P a r t s ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   p a r t s . i s O b j e c t F r o m N u l l ( c l o n e P a r t s ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ a r r a y   =   f u n c t i o n   t e s t _ c l o n e _ a r r a y ( )   { 
             i t ( ' t e s t _ c l o n e _ a r r a y ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t A r r a y 1   =   [ 1 ,   2 ,   3 ] ;   / /   n o   c l o n e 
 
                 v a r   a r r a y 1   =   t e s t A r r a y 1 ; 
                 a r r a y 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   a r r a y 1 [ 0 ] ,   ' t e s t ' ) ; 
                 c h e c k E q u a l ( 0 ,   t e s t A r r a y 1 [ 0 ] ) ; 
                 t e s t A r r a y 1 [ 0 ]   =   1 ;   / /   c l o n e 
 
                 v a r   a r r a y 1   =   c l o n e ( t e s t A r r a y 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 a r r a y 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   a r r a y 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t A r r a y 1 [ 0 ] ) ;   / /   n o   c l o n e   d e e p 
 
                 v a r   t e s t A r r a y 2   =   [ ' a ' ,   ' b ' ,   ' c ' ] ; 
                 v a r   t e s t A r r a y 3   =   [ 1 ,   2 ,   3 ,   t e s t A r r a y 2 ] ; 
                 v a r   a r r a y 1   =   c l o n e ( t e s t A r r a y 3 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 a r r a y 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   a r r a y 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t A r r a y 3 [ 0 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   a r r a y 1 [ 3 ]   = = =   t e s t A r r a y 3 [ 3 ] ) ; 
                 a r r a y 1 [ 3 ] [ 0 ]   =   ' d ' ; 
                 c h e c k E q u a l ( ' d , b , c ' ,   a r r a y 1 [ 3 ] . j o i n ( ' , ' ) ) ; 
                 c h e c k E q u a l ( ' d , b , c ' ,   t e s t A r r a y 3 [ 3 ] . j o i n ( ' , ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ d a t e   =   f u n c t i o n   t e s t _ c l o n e _ d a t e ( )   { 
             i t ( ' t e s t _ c l o n e _ d a t e ' ,   f u n c t i o n   ( )   { 
                 / /   n o   c l o n e 
                 v a r   t e s t D a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   d a t e 1   =   t e s t D a t e 1 ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   d a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   d a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 1 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   d a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   d a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   t e s t D a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   t e s t D a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 2 ,   t e s t D a t e 1 . g e t D a t e ( ) ) ;   / /   d a t e   t y p e   c l o n e 
 
                 v a r   t e s t D a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   d a t e 1   =   c l o n e ( t e s t D a t e 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   t e s t D a t e 1 . g e t D a t e ( ) ) ;   / /   o b j e c t   a r r a y   o n l y   c l o n e 
 
                 v a r   t e s t D a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   d a t e 1   =   c l o n e ( t e s t D a t e 1 ,   [ c l o n e . f u n c . a r r a y S e r i e s ,   c l o n e . f u n c . o b j e c t ] ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 2 ,   t e s t D a t e 1 . g e t D a t e ( ) ) ;   / /   o b j e c t   a r r a y   d a t e   c l o n e 
 
                 v a r   t e s t D a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   d a t e 1   =   c l o n e ( t e s t D a t e 1 ,   [ c l o n e . f u n c . d a t e ,   c l o n e . f u n c . a r r a y S e r i e s ,   c l o n e . f u n c . o b j e c t ] ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   t e s t D a t e 1 . g e t D a t e ( ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ f u n c t i o n   =   f u n c t i o n   t e s t _ c l o n e _ f u n c t i o n ( )   { 
             i t ( ' t e s t _ c l o n e _ f u n c t i o n ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t F u n c 1   =   f u n c t i o n   t e s t F u n c 1 ( )   { 
                     r e t u r n   ' A B C ' ; 
                 } ;   / /   n o   c l o n e 
 
 
                 v a r   f u n c 1   =   t e s t F u n c 1 ; 
                 c h e c k E q u a l ( t r u e ,   f u n c 1   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   f u n c 1 ( ) ) ;   / /   c l o n e 
 
                 v a r   f u n c 1   =   c l o n e ( t e s t F u n c 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f u n c 1   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   f u n c 1 ( ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ r e g e x p   =   f u n c t i o n   t e s t _ c l o n e _ r e g e x p ( )   { 
             i t ( ' t e s t _ c l o n e _ r e g e x p ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t R e g E x p 1   =   n e w   R e g E x p ( ' ^ a ' ) ;   / /   n o   c l o n e 
 
                 v a r   r e g e x p 1   =   t e s t R e g E x p 1 ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 1   = = =   t e s t R e g E x p 1 ,   ' t e s t _ c l o n e _ r e g e x p   1 ' ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   t e s t R e g E x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ;   / /   c l o n e 
 
                 v a r   r e g e x p 1   =   c l o n e ( t e s t R e g E x p 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 1   = = =   t e s t R e g E x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   t e s t R e g E x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ;   / /   c l o n e   n o   R e g E x p F u n c t i o n 
 
                 v a r   r e g e x p 1   =   c l o n e ( t e s t R e g E x p 1 ,   [ c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 1   = = =   t e s t R e g E x p 1 ,   ' t e s t _ c l o n e _ r e g e x p   c l o n e ' ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   t e s t R e g E x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ;   / /   c l o n e 
 
                 v a r   t e s t R e g E x p 2   =   / ^ a / ; 
                 v a r   r e g e x p 1   =   c l o n e ( t e s t R e g E x p 2 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 1   = = =   t e s t R e g E x p 2 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   t e s t R e g E x p 2 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ;   / /   c l o n e   n o   R e g E x p F u n c t i o n 
 
                 v a r   r e g e x p 1   =   c l o n e ( t e s t R e g E x p 2 ,   [ c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 1   = = =   t e s t R e g E x p 2 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   t e s t R e g E x p 2 . s o u r c e ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ F a s t _ o b j e c t   =   f u n c t i o n   t e s t _ c l o n e _ F a s t _ o b j e c t ( )   { 
             i t ( ' t e s t _ c l o n e _ F a s t _ o b j e c t ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t O b j e c t 1   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 
                 } ;   / /   n o   c l o n e 
 
                 v a r   o b j e c t 1   =   t e s t O b j e c t 1 ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 0 ,   t e s t O b j e c t 1 . a ) ; 
                 t e s t O b j e c t 1 . a   =   1 ;   / /   c l o n e 
 
                 v a r   o b j e c t 1   =   c l o n e ( t e s t O b j e c t 1 ) ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 2 ,   o b j e c t 1 . b ) ; 
                 c h e c k E q u a l ( 3 ,   o b j e c t 1 . c ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t O b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 2 ,   t e s t O b j e c t 1 . b ) ; 
                 c h e c k E q u a l ( 3 ,   t e s t O b j e c t 1 . c ) ;   / /   n o   c l o n e   d e e p 
 
                 v a r   t e s t O b j e c t 2   =   { 
                     a :   4 , 
                     b :   5 , 
                     c :   6 
                 } ; 
                 v a r   t e s t O b j e c t 3   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   t e s t O b j e c t 2 
                 } ; 
                 v a r   o b j e c t 1   =   c l o n e ( t e s t O b j e c t 3 ) ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t O b j e c t 3 . a ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . d   = = =   t e s t O b j e c t 3 . d ) ; 
                 c h e c k E q u a l ( 6 ,   o b j e c t 1 . d . c ) ; 
                 c h e c k E q u a l ( 6 ,   t e s t O b j e c t 3 . d . c ) ; 
                 o b j e c t 1 . d . a   =   7 ; 
                 c h e c k E q u a l ( 7 ,   o b j e c t 1 . d . a ) ; 
                 c h e c k E q u a l ( 7 ,   t e s t O b j e c t 3 . d . a ) ;   / /   o b j e c t   f r o m   n u l l 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     v a r   o b j e c t 1   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a   =   1 ; 
                     v a r   o b j e c t 2   =   c l o n e ( o b j e c t 1 ) ; 
                     o b j e c t 2 . a   =   0 ; 
                     c h e c k E q u a l ( 1 ,   o b j e c t 1 . a ) ; 
                     c h e c k E q u a l ( 0 ,   o b j e c t 2 . a ) ; 
                     v a r   o b j e c t 1   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a . b   =   ' t e s t ' ; 
                     v a r   o b j e c t 2   =   c l o n e ( o b j e c t 1 ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 1 . a ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 1 ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 2 . a ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t N o r m a l ( o b j e c t 2 ) ) ;   / /   c l o n e   F a s t   i s   n o   s u p p o r t   O b j e c t . c r e a t e ( n u l l ) 
 
                     c h e c k E q u a l ( f a l s e ,   o b j e c t 1   = = =   o b j e c t 2 ) ; 
                     c h e c k E q u a l ( t r u e ,   o b j e c t 1 . a   = = =   o b j e c t 2 . a ) ; 
                     c h e c k E q u a l ( t r u e ,   o b j e c t 1 . a . b   = = =   o b j e c t 2 . a . b ) ; 
                 }   / /   m o d u l e   o b j e c t   c l o n e   n o   s u p p o r t 
 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     v a r   c l o n e P a r t s   =   p a r t s . c l o n e ( p a r t s ) ; 
                     c h e c k E q u a l ( t r u e ,   c l o n e P a r t s   = = =   p a r t s ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s M o d u l e ( c l o n e P a r t s ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   p a r t s . i s O b j e c t N o r m a l ( c l o n e P a r t s ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   p a r t s . i s O b j e c t F r o m N u l l ( c l o n e P a r t s ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ F a s t _ a r r a y   =   f u n c t i o n   t e s t _ c l o n e _ F a s t _ a r r a y ( )   { 
             i t ( ' t e s t _ c l o n e _ F a s t _ a r r a y ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t A r r a y 1   =   [ 1 ,   2 ,   3 ] ;   / /   n o   c l o n e 
 
                 v a r   a r r a y 1   =   t e s t A r r a y 1 ; 
                 a r r a y 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   a r r a y 1 [ 0 ] ,   ' t e s t ' ) ; 
                 c h e c k E q u a l ( 0 ,   t e s t A r r a y 1 [ 0 ] ) ; 
                 t e s t A r r a y 1 [ 0 ]   =   1 ;   / /   c l o n e 
 
                 v a r   a r r a y 1   =   c l o n e ( t e s t A r r a y 1 ) ; 
                 a r r a y 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   a r r a y 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t A r r a y 1 [ 0 ] ) ;   / /   n o   c l o n e   d e e p 
 
                 v a r   t e s t A r r a y 2   =   [ ' a ' ,   ' b ' ,   ' c ' ] ; 
                 v a r   t e s t A r r a y 3   =   [ 1 ,   2 ,   3 ,   t e s t A r r a y 2 ] ; 
                 v a r   a r r a y 1   =   c l o n e ( t e s t A r r a y 3 ) ; 
                 a r r a y 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   a r r a y 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t A r r a y 3 [ 0 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   a r r a y 1 [ 3 ]   = = =   t e s t A r r a y 3 [ 3 ] ) ; 
                 a r r a y 1 [ 3 ] [ 0 ]   =   ' d ' ; 
                 c h e c k E q u a l ( ' d , b , c ' ,   a r r a y 1 [ 3 ] . j o i n ( ' , ' ) ) ; 
                 c h e c k E q u a l ( ' d , b , c ' ,   t e s t A r r a y 3 [ 3 ] . j o i n ( ' , ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ F a s t _ d a t e   =   f u n c t i o n   t e s t _ c l o n e _ F a s t _ d a t e ( )   { 
             i t ( ' t e s t _ c l o n e _ F a s t _ d a t e ' ,   f u n c t i o n   ( )   { 
                 / /   n o   c l o n e 
                 v a r   t e s t D a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   d a t e 1   =   t e s t D a t e 1 ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   d a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   d a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 1 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   d a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   d a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   t e s t D a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   t e s t D a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 2 ,   t e s t D a t e 1 . g e t D a t e ( ) ) ;   / /   d a t e   t y p e   c l o n e 
 
                 v a r   t e s t D a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   d a t e 1   =   c l o n e ( t e s t D a t e 1 ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 2 ,   t e s t D a t e 1 . g e t D a t e ( ) ) ;   / /   c l o n e   F a s t   i s   n o t   s u p p o r t   d a t e   c l o n e 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ F a s t _ f u n c t i o n   =   f u n c t i o n   t e s t _ c l o n e _ F a s t _ f u n c t i o n ( )   { 
             i t ( ' t e s t _ c l o n e _ F a s t _ f u n c t i o n ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t F u n c 1   =   f u n c t i o n   t e s t F u n c 1 ( )   { 
                     r e t u r n   ' A B C ' ; 
                 } ;   / /   n o   c l o n e 
 
 
                 v a r   f u n c 1   =   t e s t F u n c 1 ; 
                 c h e c k E q u a l ( t r u e ,   f u n c 1   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   f u n c 1 ( ) ) ;   / /   c l o n e 
 
                 v a r   f u n c 1   =   c l o n e ( t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   f u n c 1   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   f u n c 1 ( ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ F a s t _ r e g e x p   =   f u n c t i o n   t e s t _ c l o n e _ F a s t _ r e g e x p ( )   { 
             i t ( ' t e s t _ c l o n e _ F a s t _ r e g e x p ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t R e g E x p 1   =   n e w   R e g E x p ( ' ^ a ' ) ;   / /   n o   c l o n e 
 
                 v a r   r e g e x p 1   =   t e s t R e g E x p 1 ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 1   = = =   t e s t R e g E x p 1 ,   ' t e s t _ c l o n e _ r e g e x p   1 ' ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   t e s t R e g E x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ;   / /   c l o n e 
 
                 v a r   r e g e x p 1   =   c l o n e ( t e s t R e g E x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 1   = = =   t e s t R e g E x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   t e s t R e g E x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ;   / /   c l o n e   F a s t   i s   n o t   s u p p o r t   R e g E x p   c l o n e 
                 / /   c l o n e 
 
                 v a r   t e s t R e g E x p 2   =   / ^ a / ; 
                 v a r   r e g e x p 1   =   c l o n e ( t e s t R e g E x p 2 ) ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 1   = = =   t e s t R e g E x p 2 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   t e s t R e g E x p 2 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ;   / /   c l o n e   F a s t   i s   n o t   s u p p o r t   R e g E x p   c l o n e 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e _ o b j e c t P a r a m e t e r   =   f u n c t i o n   t e s t _ c l o n e _ o b j e c t P a r a m e t e r ( )   { 
             i t ( ' t e s t _ c l o n e _ o b j e c t P a r a m e t e r ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t O b j e c t 1   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 
                 } ;   / /   c l o n e 
 
                 v a r   o b j e c t 1   =   c l o n e ( { 
                     s o u r c e :   t e s t O b j e c t 1 
                 } ) ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 2 ,   o b j e c t 1 . b ) ; 
                 c h e c k E q u a l ( 3 ,   o b j e c t 1 . c ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t O b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 2 ,   t e s t O b j e c t 1 . b ) ; 
                 c h e c k E q u a l ( 3 ,   t e s t O b j e c t 1 . c ) ;   / /   d a t e   t y p e   c l o n e 
 
                 v a r   t e s t D a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   d a t e 1   =   c l o n e ( { 
                     s o u r c e :   t e s t D a t e 1 , 
                     c l o n e F u n c A r r a y :   c l o n e . f u n c . D e f a u l t A r r a y ( ) 
                 } ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   t e s t D a t e 1 . g e t D a t e ( ) ) ;   / /   o b j e c t   a r r a y   o n l y   c l o n e 
 
                 v a r   t e s t D a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   d a t e 1   =   c l o n e ( { 
                     s o u r c e :   t e s t D a t e 1 , 
                     c l o n e F u n c A r r a y :   [ c l o n e . f u n c . a r r a y S e r i e s ,   c l o n e . f u n c . o b j e c t ] 
                 } ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 2 ,   t e s t D a t e 1 . g e t D a t e ( ) ) ;   / /   o b j e c t   a r r a y   d a t e   c l o n e 
 
                 v a r   t e s t D a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   d a t e 1   =   c l o n e ( { 
                     s o u r c e :   t e s t D a t e 1 , 
                     c l o n e F u n c A r r a y :   [ c l o n e . f u n c . d a t e ,   c l o n e . f u n c . a r r a y S e r i e s ,   c l o n e . f u n c . o b j e c t ] 
                 } ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   t e s t D a t e 1 . g e t D a t e ( ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ o b j e c t   =   f u n c t i o n   t e s t _ c l o n e D e e p _ o b j e c t ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ o b j e c t ' ,   f u n c t i o n   ( )   { 
                 / /   c l o n e   d e e p 
                 v a r   t e s t O b j e c t 2   =   { 
                     a :   4 , 
                     b :   5 , 
                     c :   6 
                 } ; 
                 v a r   t e s t O b j e c t 3   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   t e s t O b j e c t 2 
                 } ; 
                 v a r   o b j e c t 1   =   c l o n e D e e p ( t e s t O b j e c t 3 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t O b j e c t 3 . a ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . d   ! = =   t e s t O b j e c t 3 . d ) ; 
                 c h e c k E q u a l ( 6 ,   o b j e c t 1 . d . c ) ; 
                 c h e c k E q u a l ( 6 ,   t e s t O b j e c t 3 . d . c ) ; 
                 o b j e c t 1 . d . a   =   7 ; 
                 c h e c k E q u a l ( 7 ,   o b j e c t 1 . d . a ) ; 
                 c h e c k E q u a l ( 4 ,   t e s t O b j e c t 3 . d . a ) ;   / /   o b j e c t   f r o m   n u l l 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     v a r   o b j e c t 1   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a . b   =   ' t e s t ' ; 
                     v a r   o b j e c t 2   =   c l o n e D e e p ( o b j e c t 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 1 . a ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 1 ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 2 . a ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 2 ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   o b j e c t 1   = = =   o b j e c t 2 ) ; 
                     c h e c k E q u a l ( f a l s e ,   o b j e c t 1 . a   = = =   o b j e c t 2 . a ) ; 
                     c h e c k E q u a l ( t r u e ,   o b j e c t 1 . a . b   = = =   o b j e c t 2 . a . b ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ a r r a y   =   f u n c t i o n   t e s t _ c l o n e D e e p _ a r r a y ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ a r r a y ' ,   f u n c t i o n   ( )   { 
                 / /   c l o n e   d e e p 
                 v a r   t e s t A r r a y 2   =   [ ' a ' ,   ' b ' ,   ' c ' ] ; 
                 v a r   t e s t A r r a y 3   =   [ 1 ,   2 ,   3 ,   t e s t A r r a y 2 ] ; 
                 v a r   a r r a y 1   =   c l o n e D e e p ( t e s t A r r a y 3 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 a r r a y 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   a r r a y 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t A r r a y 3 [ 0 ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   a r r a y 1 [ 3 ]   = = =   t e s t A r r a y 3 [ 3 ] ) ; 
                 a r r a y 1 [ 3 ] [ 0 ]   =   ' d ' ; 
                 c h e c k E q u a l ( ' d , b , c ' ,   a r r a y 1 [ 3 ] . j o i n ( ' , ' ) ) ; 
                 c h e c k E q u a l ( ' a , b , c ' ,   t e s t A r r a y 3 [ 3 ] . j o i n ( ' , ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ o b j e c t _ a r r a y _ m i x   =   f u n c t i o n   t e s t _ c l o n e D e e p _ o b j e c t _ a r r a y _ m i x ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ o b j e c t _ a r r a y _ m i x ' ,   f u n c t i o n   ( )   { 
                 / /   n o   c l o n e   d e e p   a r r a y   o b j e c t 
                 v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 
                 } ] ; 
                 v a r   v a l u e 1   =   c l o n e ( t e s t V a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   v a l u e 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 1 [ 0 ] ) ; 
                 v a l u e 1 [ 3 ] . a   =   4 ; 
                 c h e c k E q u a l ( 4 ,   v a l u e 1 [ 3 ] . a ) ; 
                 c h e c k E q u a l ( 4 ,   t e s t V a l u e 1 [ 3 ] . a ) ;   / /   c l o n e   d e e p   a r r a y   o b j e c t 
 
                 v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 
                 } ] ; 
                 v a r   v a l u e 1   =   c l o n e D e e p ( t e s t V a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   v a l u e 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 1 [ 0 ] ) ; 
                 v a l u e 1 [ 3 ] . a   =   4 ; 
                 c h e c k E q u a l ( 4 ,   v a l u e 1 [ 3 ] . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 1 [ 3 ] . a ) ;   / /   n o   c l o n e   d e e p   o b j e c t   a r r a y 
 
                 v a r   t e s t V a l u e 2   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   [ 1 ,   2 ,   3 ] 
                 } ; 
                 v a r   v a l u e 2   =   c l o n e ( t e s t V a l u e 2 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 2 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   v a l u e 2 . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 2 . a ) ; 
                 v a l u e 2 . d [ 0 ]   =   4 ; 
                 c h e c k E q u a l ( 4 ,   v a l u e 2 . d [ 0 ] ) ; 
                 c h e c k E q u a l ( 4 ,   t e s t V a l u e 2 . d [ 0 ] ) ;   / /   c l o n e   d e e p   o b j e c t   a r r a y 
 
                 v a r   t e s t V a l u e 2   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   [ 1 ,   2 ,   3 ] 
                 } ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( t e s t V a l u e 2 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 2 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   v a l u e 2 . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 2 . a ) ; 
                 v a l u e 2 . d [ 0 ]   =   4 ; 
                 c h e c k E q u a l ( 4 ,   v a l u e 2 . d [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 2 . d [ 0 ] ) ;   / /   n o   c l o n e   d e e p   a r r a y   o b j e c t   a r r a y 
 
                 v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   { 
                     a :   1 , 
                     b :   2 , 
                     c :   [ 3 ,   4 ,   5 ] 
                 } ] ; 
                 v a r   v a l u e 1   =   c l o n e ( t e s t V a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 1 [ 3 ] . c [ 0 ]   =   6 ; 
                 c h e c k E q u a l ( 6 ,   v a l u e 1 [ 3 ] . c [ 0 ] ) ; 
                 c h e c k E q u a l ( 6 ,   t e s t V a l u e 1 [ 3 ] . c [ 0 ] ) ;   / /   c l o n e   d e e p   a r r a y   o b j e c t   a r r a y 
 
                 v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   { 
                     a :   1 , 
                     b :   2 , 
                     c :   [ 3 ,   4 ,   5 ] 
                 } ] ; 
                 v a r   v a l u e 1   =   c l o n e D e e p ( t e s t V a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 1 [ 3 ] . c [ 0 ]   =   6 ; 
                 c h e c k E q u a l ( 6 ,   v a l u e 1 [ 3 ] . c [ 0 ] ) ; 
                 c h e c k E q u a l ( 3 ,   t e s t V a l u e 1 [ 3 ] . c [ 0 ] ) ;   / /   n o   c l o n e   d e e p   o b j e c t   a r r a y   o b j e c t 
 
                 v a r   t e s t V a l u e 2   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   [ { 
                         e :   4 , 
                         f :   5 , 
                         g :   6 
                     } ,   2 ,   3 ] 
                 } ; 
                 v a r   v a l u e 2   =   c l o n e ( t e s t V a l u e 2 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 2 . d [ 0 ] . e   =   7 ; 
                 c h e c k E q u a l ( 7 ,   v a l u e 2 . d [ 0 ] . e ) ; 
                 c h e c k E q u a l ( 7 ,   t e s t V a l u e 2 . d [ 0 ] . e ) ;   / /   c l o n e   d e e p   o b j e c t   a r r a y   o b j e c t 
 
                 v a r   t e s t V a l u e 2   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   [ { 
                         e :   4 , 
                         f :   5 , 
                         g :   6 
                     } ,   2 ,   3 ] 
                 } ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( t e s t V a l u e 2 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 2 . d [ 0 ] . e   =   7 ; 
                 c h e c k E q u a l ( 7 ,   v a l u e 2 . d [ 0 ] . e ) ; 
                 c h e c k E q u a l ( 4 ,   t e s t V a l u e 2 . d [ 0 ] . e ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ d a t e   =   f u n c t i o n   t e s t _ c l o n e D e e p _ d a t e ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ d a t e ' ,   f u n c t i o n   ( )   { 
                 / /   n o   c l o n e 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   d a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   d a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 1 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   d a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   d a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ;   / /   c l o n e   a r r a y   d a t e   n o   c l o n e 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e ( v a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 2 [ 3 ] . s e t D a t e ( 1 3 ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 2 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 1 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ;   / /   c l o n e D e e p   a r r a y   d a t e   c l o n e 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 v a l u e 2 [ 3 ] . s e t D a t e ( 1 3 ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 2 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   v a l u e 1 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ;   / /   c l o n e D e e p   i g n o r e   d a t e 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ,   [ c l o n e . f u n c . a r r a y S e r i e s ,   c l o n e . f u n c . o b j e c t ] ) ; 
                 v a l u e 2 [ 3 ] . s e t D a t e ( 1 3 ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 2 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 1 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ;   / /   c l o n e D e e p   a d d   c l o n e D a t e 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ,   [ c l o n e . f u n c . d a t e ,   c l o n e . f u n c . a r r a y S e r i e s ,   c l o n e . f u n c . o b j e c t ] ) ; 
                 v a l u e 2 [ 3 ] . s e t D a t e ( 1 3 ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 2 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   v a l u e 1 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ;   / /   d a t e 1   c l o n e   s a m e   o b j e c t 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 1 [ 4 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 2 [ 3 ]   = = =   v a l u e 2 [ 4 ] ,   ' d a t e 1   c l o n e   s a m e   o b j e c t ' ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ r e g E x p   =   f u n c t i o n   t e s t _ c l o n e D e e p _ r e g E x p ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ r e g E x p ' ,   f u n c t i o n   ( )   { 
                 v a r   r e g e x p 1   =   n e w   R e g E x p ( ' ^ a ' ) ;   / /   c l o n e   D e e p 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( r e g e x p 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 . s o u r c e ) ;   / /   c l o n e   D e e p   n o   R e g E x p F u n c t i o n 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( r e g e x p 1 ,   [ c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' ^ a '   = = =   r e g e x p 2 . s o u r c e ) ;   / /   c l o n e   D e e p   i n   O b j e c t 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( { 
                     v a l u e :   r e g e x p 1 
                 } ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2 . v a l u e   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 . v a l u e . s o u r c e ) ;   / /   c l o n e   D e e p   n o   R e g E x p F u n c t i o n   i n   O b j e c t 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( { 
                     v a l u e :   r e g e x p 1 
                 } ,   [ c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2 . v a l u e   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' ^ a '   = = =   r e g e x p 2 . v a l u e . s o u r c e ) ;   / /   c l o n e   D e e p   i n   A r r a y 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( [ r e g e x p 1 ] ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2 [ 0 ]   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 [ 0 ] . s o u r c e ) ;   / /   c l o n e   D e e p   n o   R e g E x p F u n c t i o n   i n   A r r a y 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( [ r e g e x p 1 ] ,   [ c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2 [ 0 ]   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' ^ a '   = = =   r e g e x p 2 [ 0 ] . s o u r c e ) ; 
                 v a r   r e g e x p 1   =   / ^ a / ;   / /   c l o n e   D e e p 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( r e g e x p 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 . s o u r c e ) ;   / /   c l o n e   D e e p   n o   R e g E x p F u n c t i o n 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( r e g e x p 1 ,   [ c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' ^ a '   = = =   r e g e x p 2 . s o u r c e ) ;   / /   c l o n e   D e e p   i n   O b j e c t 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( { 
                     v a l u e :   r e g e x p 1 
                 } ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2 . v a l u e   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 . v a l u e . s o u r c e ) ;   / /   c l o n e   D e e p   n o   R e g E x p F u n c t i o n   i n   O b j e c t 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( { 
                     v a l u e :   r e g e x p 1 
                 } ,   [ c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2 . v a l u e   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' ^ a '   = = =   r e g e x p 2 . v a l u e . s o u r c e ) ;   / /   c l o n e   D e e p   i n   A r r a y 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( [ r e g e x p 1 ] ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2 [ 0 ]   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 [ 0 ] . s o u r c e ) ;   / /   c l o n e   D e e p   n o   R e g E x p F u n c t i o n   i n   A r r a y 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( [ r e g e x p 1 ] ,   [ c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   r e g e x p 2 [ 0 ]   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' ^ a '   = = =   r e g e x p 2 [ 0 ] . s o u r c e ) ;   / /   r e g e x p 1   c l o n e   s a m e   o b j e c t 
 
                 v a r   r e g e x p 1   =   / ^ a / ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   r e g e x p 1 ,   r e g e x p 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 1 [ 4 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 2 [ 3 ]   = = =   v a l u e 2 [ 4 ] ,   ' r e g e x p 1   c l o n e   s a m e   o b j e c t ' ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ o b j e c t P a r a m e t e r   =   f u n c t i o n   t e s t _ c l o n e D e e p _ o b j e c t P a r a m e t e r ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ o b j e c t P a r a m e t e r ' ,   f u n c t i o n   ( )   { 
                 / /   c l o n e   d e e p 
                 v a r   t e s t O b j e c t 2   =   { 
                     a :   4 , 
                     b :   5 , 
                     c :   6 
                 } ; 
                 v a r   t e s t O b j e c t 3   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   t e s t O b j e c t 2 
                 } ; 
                 v a r   o b j e c t 1   =   c l o n e D e e p ( { 
                     s o u r c e :   t e s t O b j e c t 3 
                 } ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t O b j e c t 3 . a ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . d   ! = =   t e s t O b j e c t 3 . d ) ; 
                 c h e c k E q u a l ( 6 ,   o b j e c t 1 . d . c ) ; 
                 c h e c k E q u a l ( 6 ,   t e s t O b j e c t 3 . d . c ) ; 
                 o b j e c t 1 . d . a   =   7 ; 
                 c h e c k E q u a l ( 7 ,   o b j e c t 1 . d . a ) ; 
                 c h e c k E q u a l ( 4 ,   t e s t O b j e c t 3 . d . a ) ;   / /   c l o n e D e e p   a r r a y   d a t e   c l o n e 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( { 
                     s o u r c e :   v a l u e 1 , 
                     c l o n e F u n c A r r a y :   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) 
                 } ) ; 
                 v a l u e 2 [ 3 ] . s e t D a t e ( 1 3 ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 2 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   v a l u e 1 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ;   / /   c l o n e D e e p   i g n o r e   d a t e 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( { 
                     s o u r c e :   v a l u e 1 , 
                     c l o n e F u n c A r r a y :   [ c l o n e . f u n c . a r r a y S e r i e s ,   c l o n e . f u n c . o b j e c t ] 
                 } ) ; 
                 v a l u e 2 [ 3 ] . s e t D a t e ( 1 3 ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 2 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 1 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ;   / /   c l o n e D e e p   a d d   c l o n e D a t e 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( { 
                     s o u r c e :   v a l u e 1 , 
                     c l o n e F u n c A r r a y :   [ c l o n e . f u n c . d a t e ,   c l o n e . f u n c . a r r a y S e r i e s ,   c l o n e . f u n c . o b j e c t ] 
                 } ) ; 
                 v a l u e 2 [ 3 ] . s e t D a t e ( 1 3 ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 2 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   v a l u e 1 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ;   / /   d a t e 1   c l o n e   s a m e   o b j e c t 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( { 
                     s o u r c e :   v a l u e 1 , 
                     c l o n e F u n c A r r a y :   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) 
                 } ) ; 
                 c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 1 [ 4 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 2 [ 3 ]   = = =   v a l u e 2 [ 4 ] ,   ' d a t e 1   c l o n e   s a m e   o b j e c t ' ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ f u n c t i o n   =   f u n c t i o n   t e s t _ c l o n e D e e p _ f u n c t i o n ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ f u n c t i o n ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t F u n c 1   =   f u n c t i o n   t e s t F u n c 1 ( )   { 
                     r e t u r n   ' A B C ' ; 
                 } ;   / /   n o   c l o n e 
 
 
                 v a r   o b j e c t 1   =   { 
                     f u n c :   t e s t F u n c 1 
                 } ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . f u n c   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   o b j e c t 1 . f u n c ( ) ) ;   / /   c l o n e 
 
                 v a r   o b j e c t 1   =   c l o n e ( { 
                     f u n c :   t e s t F u n c 1 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . f u n c   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   o b j e c t 1 . f u n c ( ) ) ;   / /   c l o n e   D e e p 
 
                 v a r   o b j e c t 1   =   c l o n e D e e p ( { 
                     f u n c :   t e s t F u n c 1 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . f u n c   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   o b j e c t 1 . f u n c ( ) ) ;   / /   n o   c l o n e 
 
                 v a r   a r r a y 1   =   [ t e s t F u n c 1 ] ; 
                 c h e c k E q u a l ( t r u e ,   a r r a y 1 [ 0 ]   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   a r r a y 1 [ 0 ] ( ) ) ;   / /   c l o n e 
 
                 v a r   a r r a y 1   =   c l o n e ( [ t e s t F u n c 1 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   a r r a y 1 [ 0 ]   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   a r r a y 1 [ 0 ] ( ) ) ;   / /   c l o n e   D e e p 
 
                 v a r   a r r a y 1   =   c l o n e D e e p ( [ t e s t F u n c 1 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   a r r a y 1 [ 0 ]   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   a r r a y 1 [ 0 ] ( ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ m o m e n t   =   f u n c t i o n   t e s t _ c l o n e D e e p _ m o m e n t ( )   { / /   i t ( ' t e s t _ c l o n e D e e p _ m o m e n t ' ,   ( )   = >   { 
             / /       i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
             / /           r e t u r n ; 
             / /       } 
             / /       i f   ( p a r t s . p l a t f o r m . i s W e b B r o w s e r ( ) )   { 
             / /           r e t u r n ; 
             / /       } 
             / /       / /   m o m e n t   t y p e   c l o n e   n o 
             / /       v a r   m o m e n t 1   =   m o m e n t ( ' 2 0 1 9 / 1 0 / 1 1 ' ,   ' Y Y Y Y / M M / D D ' ) ; 
             / /       v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   m o m e n t 1 ] ; 
             / /       v a r   v a l u e 1   =   c l o n e ( t e s t V a l u e 1 ) ; 
             / /       v a l u e 1 [ 3 ] . s e t ( ' y e a r ' ,   2 0 1 8 ) ; 
             / /       c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   t e s t V a l u e 1 [ 3 ] ) ; 
             / /       c h e c k E q u a l ( ' 2 0 1 8 / 1 0 / 1 1 ' ,   v a l u e 1 [ 3 ] . f o r m a t ( ' Y Y Y Y / M M / D D ' ) ) ; 
             / /       c h e c k E q u a l ( ' 2 0 1 8 / 1 0 / 1 1 ' ,   t e s t V a l u e 1 [ 3 ] . f o r m a t ( ' Y Y Y Y / M M / D D ' ) ) ; 
             / /       / /   m o m e n t   t y p e   c l o n e D e e p 
             / /       v a r   m o m e n t 1   =   m o m e n t ( ' 2 0 1 9 / 1 0 / 1 1 ' ,   ' Y Y Y Y / M M / D D ' ) ; 
             / /       v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   m o m e n t 1 ] ; 
             / /       / /   m o m e n t   o b j e c t   f a i l 
             / /       / /   c o n s t   c l o n e V a l u e   =   n e w   s o u r c e . c o n s t r u c t o r ( ) ; 
             / /       c h e c k E q u a l ( t r u e ,     i s T h r o w n ( ( )   = >   {   c l o n e D e e p ( t e s t V a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ;   } ) ) ; 
             / /       c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( ( )   = >   {   c l o n e D e e p ( t e s t V a l u e 1 ) ;   } ) ) ; 
             / /       v a r   v a l u e 1   =   c l o n e D e e p ( t e s t V a l u e 1 ) ; 
             / /       v a l u e 1 [ 3 ] . s e t ( ' y e a r ' ,   2 0 1 8 ) ; 
             / /       c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 3 ]   = = =   t e s t V a l u e 1 [ 3 ] ) ;   / /   c l o n e 
             / /       c h e c k E q u a l ( t r u e ,     m o m e n t . i s M o m e n t ( v a l u e 1 [ 3 ] ) ) ;     / /   m o m e n t   i s   s i m p l e   c l o n e   O K 
             / /       c h e c k E q u a l ( t r u e ,     m o m e n t . i s M o m e n t ( t e s t V a l u e 1 [ 3 ] ) ) ; 
             / /       c h e c k E q u a l ( ' 2 0 1 8 / 1 0 / 1 1 ' ,   v a l u e 1 [ 3 ] . f o r m a t ( ' Y Y Y Y / M M / D D ' ) ) ; 
             / /       c h e c k E q u a l ( ' 2 0 1 8 / 1 0 / 1 1 ' ,   t e s t V a l u e 1 [ 3 ] . f o r m a t ( ' Y Y Y Y / M M / D D ' ) ) ; 
             / /       / /   b u t   n o t   c o r r e c t 
             / /       / /   m o m e n t   t y p e   c l o n e D e e p   m o m e n t   c l o n e   f u n c t i o n 
             / /       c l o n e . f u n c . m o m e n t   =   ( s o u r c e ,   b u f f e r W r i t e )   = >   { 
             / /           i f   ( ! m o m e n t . i s M o m e n t ( s o u r c e ) )   { 
             / /               r e t u r n   u n d e f i n e d ; 
             / /           } 
             / /           c o n s t   c l o n e V a l u e   =   m o m e n t ( s o u r c e ) ; 
             / /           b u f f e r W r i t e ( s o u r c e ,   c l o n e V a l u e ) ; 
             / /           r e t u r n   c l o n e V a l u e ; 
             / /       } ; 
             / /       v a r   m o m e n t 1   =   m o m e n t ( ' 2 0 1 9 / 1 0 / 1 1 ' ,   ' Y Y Y Y / M M / D D ' ) ; 
             / /       v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   m o m e n t 1 ] ; 
             / /       v a r   v a l u e 1   =   c l o n e D e e p ( t e s t V a l u e 1 ,   [ 
             / /           c l o n e D e e p . f u n c . m o m e n t , 
             / /           . . . c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) , 
             / /       ] ) ; 
             / /       v a l u e 1 [ 3 ] . s e t ( ' y e a r ' ,   2 0 1 8 ) ; 
             / /       c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 3 ]   = = =   t e s t V a l u e 1 [ 3 ] ) ;   / /   c l o n e 
             / /       c h e c k E q u a l ( t r u e ,     m o m e n t . i s M o m e n t ( v a l u e 1 [ 3 ] ) ) ; 
             / /       c h e c k E q u a l ( t r u e ,     m o m e n t . i s M o m e n t ( t e s t V a l u e 1 [ 3 ] ) ) ; 
             / /       c h e c k E q u a l ( ' 2 0 1 8 / 1 0 / 1 1 ' ,   v a l u e 1 [ 3 ] . f o r m a t ( ' Y Y Y Y / M M / D D ' ) ) ; 
             / /       c h e c k E q u a l ( ' 2 0 1 9 / 1 0 / 1 1 ' ,   t e s t V a l u e 1 [ 3 ] . f o r m a t ( ' Y Y Y Y / M M / D D ' ) ) ; 
             / /   } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ s y m b o l   =   f u n c t i o n   t e s t _ c l o n e D e e p _ s y m b o l ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ s y m b o l ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   s y m b o l 1   =   S y m b o l ( ) ; 
                 c h e c k E q u a l ( t r u e ,   p a r t s . i s S y m b o l ( s y m b o l 1 ) ) ; 
                 v a r   v a l u e 1   =   [ s y m b o l 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( t r u e ,   s y m b o l 1   = = =   v a l u e 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 0 ]   = = =   v a l u e 2 [ 0 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   s y m b o l 1   = = =   v a l u e 2 [ 0 ] ) ; 
 
                 c l o n e . f u n c . f o r c e S y m b o l   =   f u n c t i o n   ( s o u r c e )   { 
                     v a r   b u f f e r W r i t e   =   a r g u m e n t s . l e n g t h   >   1   & &   a r g u m e n t s [ 1 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 1 ]   :   f u n c t i o n   ( )   { } ; 
 
                     v a r   _ _ c l o n e D e e p   =   a r g u m e n t s . l e n g t h   >   2   & &   a r g u m e n t s [ 2 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 2 ]   :   f u n c t i o n   ( v a l u e )   { 
                         r e t u r n   v a l u e ; 
                     } ; 
 
                     i f   ( ! p a r t s . i s S y m b o l ( s o u r c e ) )   { 
                         r e t u r n   u n d e f i n e d ; 
                         ; 
                     } 
 
                     v a r   c l o n e V a l u e   =   S y m b o l ( ) ; 
                     b u f f e r W r i t e ( s o u r c e ,   c l o n e V a l u e ) ; 
                     r e t u r n   c l o n e V a l u e ; 
                 } ; 
 
                 v a r   v a l u e 1   =   [ s y m b o l 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ,   [ c l o n e D e e p . f u n c . f o r c e S y m b o l ] . c o n c a t ( _ t o C o n s u m a b l e A r r a y ( c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   s y m b o l 1   = = =   v a l u e 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   v a l u e 1 [ 0 ]   = = =   v a l u e 2 [ 0 ]   / /   c l o n e D e e p   a n d   n e w   s y m b o l 
                 ) ; 
                 c h e c k E q u a l ( f a l s e ,   s y m b o l 1   = = =   v a l u e 2 [ 0 ]   / /   c l o n e D e e p   a n d   n e w   s y m b o l 
                 ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ m a p   =   f u n c t i o n   t e s t _ c l o n e D e e p _ m a p ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ m a p ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   m a p 1   =   n e w   M a p ( ) ; 
                 m a p 1 . s e t ( ' k e y 1 ' ,   ' v a l u e 1 ' ) ; 
                 m a p 1 . s e t ( ' k e y 2 ' ,   ' v a l u e 2 ' ) ; 
                 c h e c k E q u a l ( ' v a l u e 1 ' ,   m a p 1 . g e t ( ' k e y 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   p a r t s . i s O b j e c t ( m a p 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t L i k e ( m a p 1 ) ) ; 
                 v a r   m a p 2   =   c l o n e ( m a p 1 ,   [ c l o n e . f u n c . d a t e ,   c l o n e . f u n c . r e g E x p ,   c l o n e . f u n c . i g n o r e F u n c t i o n ,   c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   m a p 2 . g e t ( ' k e y 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a p 1   = = =   m a p 2 ) ; 
                 v a r   m a p 2   =   c l o n e D e e p ( m a p 1 ,   [ c l o n e D e e p . f u n c . d a t e ,   c l o n e D e e p . f u n c . r e g E x p ,   c l o n e D e e p . f u n c . i g n o r e F u n c t i o n ,   c l o n e D e e p . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   m a p 2 . g e t ( ' k e y 1 ' ) ) ;   / /   c o p y   b u t   n o   c l o n e 
 
                 c h e c k E q u a l ( f a l s e ,   m a p 1   = = =   m a p 2 ) ; 
                 v a r   m a p 2   =   c l o n e ( m a p 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( ' v a l u e 1 ' ,   m a p 2 . g e t ( ' k e y 1 ' ) ) ;   / /   c l o n e 
 
                 c h e c k E q u a l ( f a l s e ,   m a p 1   = = =   m a p 2 ) ; 
                 v a r   m a p 2   =   c l o n e D e e p ( m a p 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( ' v a l u e 1 ' ,   m a p 2 . g e t ( ' k e y 1 ' ) ) ;   / /   c l o n e 
 
                 c h e c k E q u a l ( f a l s e ,   m a p 1   = = =   m a p 2 ) ;   / /   m a p   o b j e c t   a r r a y 
 
                 v a r   m a p 1   =   n e w   M a p ( ) ; 
                 m a p 1 . s e t ( ' a ' ,   { 
                     a :   ' 1 ' 
                 } ) ; 
                 m a p 1 . s e t ( ' b ' ,   [ ' b ' ] ) ; 
                 m a p 1 . s e t ( ' c ' ,   { 
                     a :   [ 1 ,   2 ,   3 ,   { 
                         b :   ' c ' 
                     } ] 
                 } ) ; 
                 m a p 1 . s e t ( ' d ' ,   [ 1 ,   2 ,   3 ,   { 
                     b :   ' c ' , 
                     d :   [ 4 ,   5 ,   6 ] 
                 } ] ) ; 
                 v a r   m a p 2   =   c l o n e D e e p ( m a p 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a p 1   = = =   m a p 2 ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   m a p 2 . g e t ( ' a ' ) . a ) ; 
                 c h e c k E q u a l ( ' b ' ,   m a p 2 . g e t ( ' b ' ) [ 0 ] ) ; 
                 c h e c k E q u a l ( ' c ' ,   m a p 2 . g e t ( ' c ' ) . a [ 3 ] . b ) ; 
                 c h e c k E q u a l ( 6 ,   m a p 2 . g e t ( ' d ' ) [ 3 ] . d [ 2 ] ) ;   / /   c l o n e   m a p 
 
                 v a r   o b j e c t 1   =   { 
                     a :   ' 1 ' 
                 } ; 
                 v a r   m a p 1   =   n e w   M a p ( ) ; 
                 m a p 1 . s e t ( ' a ' ,   o b j e c t 1 ) ; 
                 v a r   m a p 2   =   c l o n e ( m a p 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a p 1   = = =   m a p 2 ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   m a p 1 . g e t ( ' a ' ) . a ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   m a p 2 . g e t ( ' a ' ) . a ) ; 
                 c h e c k E q u a l ( t r u e ,   m a p 1 . g e t ( ' a ' )   = = =   m a p 2 . g e t ( ' a ' ) ) ;   / /   c l o n e D e e p   m a p 
 
                 v a r   o b j e c t 1   =   { 
                     a :   ' 1 ' 
                 } ; 
                 v a r   m a p 1   =   n e w   M a p ( ) ; 
                 m a p 1 . s e t ( ' a ' ,   o b j e c t 1 ) ; 
                 v a r   m a p 2   =   c l o n e D e e p ( m a p 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a p 1   = = =   m a p 2 ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   m a p 1 . g e t ( ' a ' ) . a ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   m a p 2 . g e t ( ' a ' ) . a ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a p 1 . g e t ( ' a ' )   = = =   m a p 2 . g e t ( ' a ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ s e t   =   f u n c t i o n   t e s t _ c l o n e D e e p _ s e t ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ s e t ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   s e t 1   =   n e w   S e t ( ) ; 
                 s e t 1 . a d d ( ' v a l u e 1 ' ) ; 
                 s e t 1 . a d d ( ' v a l u e 2 ' ) ; 
                 c h e c k E q u a l ( t r u e ,   s e t 1 . h a s ( ' v a l u e 1 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   s e t 1 . h a s ( ' v a l u e 2 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   s e t 1 . h a s ( ' v a l u e 3 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   p a r t s . i s O b j e c t ( s e t 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t L i k e ( s e t 1 ) ) ; 
                 v a r   s e t 2   =   c l o n e ( s e t 1 ,   [ c l o n e . f u n c . d a t e ,   c l o n e . f u n c . r e g E x p ,   c l o n e . f u n c . i g n o r e F u n c t i o n ,   c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   s e t 2 . h a s ( ' v a l u e 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   s e t 1   = = =   s e t 2 ) ; 
                 v a r   s e t 2   =   c l o n e D e e p ( s e t 1 ,   [ c l o n e . f u n c . d a t e ,   c l o n e . f u n c . r e g E x p ,   c l o n e . f u n c . i g n o r e F u n c t i o n ,   c l o n e . f u n c . o b j e c t L i k e ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   s e t 2 . h a s ( ' v a l u e 1 ' ) ) ;   / /   n o   c l o n e 
 
                 c h e c k E q u a l ( f a l s e ,   s e t 1   = = =   s e t 2 ) ; 
                 v a r   s e t 2   =   c l o n e ( s e t 1 ,   c l o n e . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( t r u e ,   s e t 2 . h a s ( ' v a l u e 1 ' ) ) ;   / /   c l o n e 
 
                 c h e c k E q u a l ( f a l s e ,   s e t 1   = = =   s e t 2 ) ; 
                 v a r   s e t 2   =   c l o n e D e e p ( s e t 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( t r u e ,   s e t 2 . h a s ( ' v a l u e 1 ' ) ) ;   / /   c l o n e 
 
                 c h e c k E q u a l ( f a l s e ,   s e t 1   = = =   s e t 2 ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ C i r c u l a r R e f e r e n c e   =   f u n c t i o n   t e s t _ c l o n e D e e p _ C i r c u l a r R e f e r e n c e ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ C i r c u l a r R e f e r e n c e ' ,   f u n c t i o n   ( )   { 
                 v a r   o b j e c t 1   =   { 
                     b :   ' t e s t ' 
                 } ; 
                 o b j e c t 1 . a   =   o b j e c t 1 ; 
                 c h e c k E q u a l ( ' t e s t ' ,   o b j e c t 1 . b ) ; 
                 c h e c k E q u a l ( ' t e s t ' ,   o b j e c t 1 . a . b ) ; 
                 c h e c k E q u a l ( ' t e s t ' ,   o b j e c t 1 . a . a . b ) ; 
                 v a r   o b j e c t 2   =   c l o n e D e e p ( o b j e c t 1 ,   c l o n e D e e p . f u n c . D e f a u l t A r r a y ( ) ) ; 
                 c h e c k E q u a l ( ' t e s t ' ,   o b j e c t 2 . b ) ; 
                 c h e c k E q u a l ( ' t e s t ' ,   o b j e c t 2 . a . b ) ; 
                 c h e c k E q u a l ( ' t e s t ' ,   o b j e c t 2 . a . a . b ) ; 
                 c h e c k E q u a l ( f a l s e ,   o b j e c t 1   = = =   o b j e c t 2 ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . a   = = =   o b j e c t 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 2 . a   = = =   o b j e c t 2 ) ; 
                 c h e c k E q u a l ( f a l s e ,   o b j e c t 2 . a   = = =   o b j e c t 1 . a ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ o b j e c t   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ o b j e c t ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ o b j e c t ' ,   f u n c t i o n   ( )   { 
                 / /   c l o n e   d e e p 
                 v a r   t e s t O b j e c t 2   =   { 
                     a :   4 , 
                     b :   5 , 
                     c :   6 
                 } ; 
                 v a r   t e s t O b j e c t 3   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   t e s t O b j e c t 2 
                 } ; 
                 v a r   o b j e c t 1   =   c l o n e D e e p ( t e s t O b j e c t 3 ) ; 
                 o b j e c t 1 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   o b j e c t 1 . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t O b j e c t 3 . a ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . d   ! = =   t e s t O b j e c t 3 . d ) ; 
                 c h e c k E q u a l ( 6 ,   o b j e c t 1 . d . c ) ; 
                 c h e c k E q u a l ( 6 ,   t e s t O b j e c t 3 . d . c ) ; 
                 o b j e c t 1 . d . a   =   7 ; 
                 c h e c k E q u a l ( 7 ,   o b j e c t 1 . d . a ) ; 
                 c h e c k E q u a l ( 4 ,   t e s t O b j e c t 3 . d . a ) ;   / /   o b j e c t   f r o m   n u l l   t o   o b j e c t   n o r m a l 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     v a r   o b j e c t 1   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a   =   O b j e c t . c r e a t e ( n u l l ) ; 
                     o b j e c t 1 . a . b   =   ' t e s t ' ; 
                     v a r   o b j e c t 2   =   c l o n e D e e p ( o b j e c t 1 ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 1 . a ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t F r o m N u l l ( o b j e c t 1 ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t N o r m a l ( o b j e c t 2 . a ) ) ; 
                     c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t N o r m a l ( o b j e c t 2 ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   o b j e c t 1   = = =   o b j e c t 2 ) ; 
                     c h e c k E q u a l ( f a l s e ,   o b j e c t 1 . a   = = =   o b j e c t 2 . a ) ; 
                     c h e c k E q u a l ( t r u e ,   o b j e c t 1 . a . b   = = =   o b j e c t 2 . a . b ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ a r r a y   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ a r r a y ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ a r r a y ' ,   f u n c t i o n   ( )   { 
                 / /   c l o n e   d e e p 
                 v a r   t e s t A r r a y 2   =   [ ' a ' ,   ' b ' ,   ' c ' ] ; 
                 v a r   t e s t A r r a y 3   =   [ 1 ,   2 ,   3 ,   t e s t A r r a y 2 ] ; 
                 v a r   a r r a y 1   =   c l o n e D e e p ( t e s t A r r a y 3 ) ; 
                 a r r a y 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   a r r a y 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t A r r a y 3 [ 0 ] ) ; 
                 c h e c k E q u a l ( f a l s e ,   a r r a y 1 [ 3 ]   = = =   t e s t A r r a y 3 [ 3 ] ) ; 
                 a r r a y 1 [ 3 ] [ 0 ]   =   ' d ' ; 
                 c h e c k E q u a l ( ' d , b , c ' ,   a r r a y 1 [ 3 ] . j o i n ( ' , ' ) ) ; 
                 c h e c k E q u a l ( ' a , b , c ' ,   t e s t A r r a y 3 [ 3 ] . j o i n ( ' , ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ o b j e c t _ a r r a y _ m i x   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ o b j e c t _ a r r a y _ m i x ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ o b j e c t _ a r r a y _ m i x ' ,   f u n c t i o n   ( )   { 
                 / /   n o   c l o n e   d e e p   a r r a y   o b j e c t 
                 v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 
                 } ] ; 
                 v a r   v a l u e 1   =   c l o n e ( t e s t V a l u e 1 ) ; 
                 v a l u e 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   v a l u e 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 1 [ 0 ] ) ; 
                 v a l u e 1 [ 3 ] . a   =   4 ; 
                 c h e c k E q u a l ( 4 ,   v a l u e 1 [ 3 ] . a ) ; 
                 c h e c k E q u a l ( 4 ,   t e s t V a l u e 1 [ 3 ] . a ) ;   / /   c l o n e   d e e p   a r r a y   o b j e c t 
 
                 v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 
                 } ] ; 
                 v a r   v a l u e 1   =   c l o n e D e e p ( t e s t V a l u e 1 ) ; 
                 v a l u e 1 [ 0 ]   =   0 ; 
                 c h e c k E q u a l ( 0 ,   v a l u e 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 1 [ 0 ] ) ; 
                 v a l u e 1 [ 3 ] . a   =   4 ; 
                 c h e c k E q u a l ( 4 ,   v a l u e 1 [ 3 ] . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 1 [ 3 ] . a ) ;   / /   n o   c l o n e   d e e p   o b j e c t   a r r a y 
 
                 v a r   t e s t V a l u e 2   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   [ 1 ,   2 ,   3 ] 
                 } ; 
                 v a r   v a l u e 2   =   c l o n e ( t e s t V a l u e 2 ) ; 
                 v a l u e 2 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   v a l u e 2 . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 2 . a ) ; 
                 v a l u e 2 . d [ 0 ]   =   4 ; 
                 c h e c k E q u a l ( 4 ,   v a l u e 2 . d [ 0 ] ) ; 
                 c h e c k E q u a l ( 4 ,   t e s t V a l u e 2 . d [ 0 ] ) ;   / /   c l o n e   d e e p   o b j e c t   a r r a y 
 
                 v a r   t e s t V a l u e 2   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   [ 1 ,   2 ,   3 ] 
                 } ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( t e s t V a l u e 2 ) ; 
                 v a l u e 2 . a   =   0 ; 
                 c h e c k E q u a l ( 0 ,   v a l u e 2 . a ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 2 . a ) ; 
                 v a l u e 2 . d [ 0 ]   =   4 ; 
                 c h e c k E q u a l ( 4 ,   v a l u e 2 . d [ 0 ] ) ; 
                 c h e c k E q u a l ( 1 ,   t e s t V a l u e 2 . d [ 0 ] ) ;   / /   n o   c l o n e   d e e p   a r r a y   o b j e c t   a r r a y 
 
                 v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   { 
                     a :   1 , 
                     b :   2 , 
                     c :   [ 3 ,   4 ,   5 ] 
                 } ] ; 
                 v a r   v a l u e 1   =   c l o n e ( t e s t V a l u e 1 ) ; 
                 v a l u e 1 [ 3 ] . c [ 0 ]   =   6 ; 
                 c h e c k E q u a l ( 6 ,   v a l u e 1 [ 3 ] . c [ 0 ] ) ; 
                 c h e c k E q u a l ( 6 ,   t e s t V a l u e 1 [ 3 ] . c [ 0 ] ) ;   / /   c l o n e   d e e p   a r r a y   o b j e c t   a r r a y 
 
                 v a r   t e s t V a l u e 1   =   [ 1 ,   2 ,   3 ,   { 
                     a :   1 , 
                     b :   2 , 
                     c :   [ 3 ,   4 ,   5 ] 
                 } ] ; 
                 v a r   v a l u e 1   =   c l o n e D e e p ( t e s t V a l u e 1 ) ; 
                 v a l u e 1 [ 3 ] . c [ 0 ]   =   6 ; 
                 c h e c k E q u a l ( 6 ,   v a l u e 1 [ 3 ] . c [ 0 ] ) ; 
                 c h e c k E q u a l ( 3 ,   t e s t V a l u e 1 [ 3 ] . c [ 0 ] ) ;   / /   n o   c l o n e   d e e p   o b j e c t   a r r a y   o b j e c t 
 
                 v a r   t e s t V a l u e 2   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   [ { 
                         e :   4 , 
                         f :   5 , 
                         g :   6 
                     } ,   2 ,   3 ] 
                 } ; 
                 v a r   v a l u e 2   =   c l o n e ( t e s t V a l u e 2 ) ; 
                 v a l u e 2 . d [ 0 ] . e   =   7 ; 
                 c h e c k E q u a l ( 7 ,   v a l u e 2 . d [ 0 ] . e ) ; 
                 c h e c k E q u a l ( 7 ,   t e s t V a l u e 2 . d [ 0 ] . e ) ;   / /   c l o n e   d e e p   o b j e c t   a r r a y   o b j e c t 
 
                 v a r   t e s t V a l u e 2   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 , 
                     d :   [ { 
                         e :   4 , 
                         f :   5 , 
                         g :   6 
                     } ,   2 ,   3 ] 
                 } ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( t e s t V a l u e 2 ) ; 
                 v a l u e 2 . d [ 0 ] . e   =   7 ; 
                 c h e c k E q u a l ( 7 ,   v a l u e 2 . d [ 0 ] . e ) ; 
                 c h e c k E q u a l ( 4 ,   t e s t V a l u e 2 . d [ 0 ] . e ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ d a t e   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ d a t e ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ d a t e ' ,   f u n c t i o n   ( )   { 
                 / /   n o   c l o n e 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   d a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   d a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 1 ,   d a t e 1 . g e t D a t e ( ) ) ; 
                 d a t e 1 . s e t D a t e ( 1 2 ) ; 
                 c h e c k E q u a l ( 2 0 1 9 ,   d a t e 1 . g e t F u l l Y e a r ( ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   d a t e 1 . g e t M o n t h ( )   +   1 ) ; 
                 c h e c k E q u a l ( 1 2 ,   d a t e 1 . g e t D a t e ( ) ) ;   / /   c l o n e   a r r a y   d a t e   n o   c l o n e 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e ( v a l u e 1 ) ; 
                 v a l u e 2 [ 3 ] . s e t D a t e ( 1 3 ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 2 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 1 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ;   / /   c l o n e D e e p   a r r a y   d a t e   n o   c l o n e 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ) ; 
                 v a l u e 2 [ 3 ] . s e t D a t e ( 1 3 ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 2 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( 1 3 ,   v a l u e 1 [ 3 ] . g e t D a t e ( ) ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ;   / /   d a t e 1   c l o n e   s a m e   o b j e c t 
 
                 v a r   d a t e 1   =   n e w   D a t e ( ' 2 0 1 9 / 1 0 / 1 1 ' ) ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   d a t e 1 ,   d a t e 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 1 [ 4 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 2 [ 3 ]   = = =   v a l u e 2 [ 4 ] ,   ' d a t e 1   c l o n e   s a m e   o b j e c t ' ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ r e g E x p   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ r e g E x p ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ r e g E x p ' ,   f u n c t i o n   ( )   { 
                 v a r   r e g e x p 1   =   n e w   R e g E x p ( ' ^ a ' ) ;   / /   c l o n e   D e e p 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 2   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 . s o u r c e ) ;   / /   c l o n e   D e e p   i n   O b j e c t 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( { 
                     v a l u e :   r e g e x p 1 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 2 . v a l u e   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 . v a l u e . s o u r c e ) ;   / /   c l o n e   D e e p   i n   A r r a y 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( [ r e g e x p 1 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 2 [ 0 ]   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 [ 0 ] . s o u r c e ) ; 
                 v a r   r e g e x p 1   =   / ^ a / ;   / /   c l o n e   D e e p 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 2   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 . s o u r c e ) ;   / /   c l o n e   D e e p   i n   O b j e c t 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( { 
                     v a l u e :   r e g e x p 1 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 2 . v a l u e   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 . v a l u e . s o u r c e ) ;   / /   c l o n e   D e e p   i n   A r r a y 
 
                 v a r   r e g e x p 2   =   c l o n e D e e p ( [ r e g e x p 1 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   r e g e x p 2 [ 0 ]   = = =   r e g e x p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 1 . s o u r c e ) ; 
                 c h e c k E q u a l ( t r u e ,   ' ^ a '   = = =   r e g e x p 2 [ 0 ] . s o u r c e ) ;   / /   r e g e x p 1   c l o n e   s a m e   o b j e c t 
 
                 v a r   r e g e x p 1   =   / ^ a / ; 
                 v a r   v a l u e 1   =   [ 1 ,   2 ,   3 ,   r e g e x p 1 ,   r e g e x p 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 2 [ 3 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 3 ]   = = =   v a l u e 1 [ 4 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 2 [ 3 ]   = = =   v a l u e 2 [ 4 ] ,   ' r e g e x p 1   c l o n e   s a m e   o b j e c t ' ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ f u n c t i o n   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ f u n c t i o n ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ f u n c t i o n ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t F u n c 1   =   f u n c t i o n   t e s t F u n c 1 ( )   { 
                     r e t u r n   ' A B C ' ; 
                 } ;   / /   n o   c l o n e 
 
 
                 v a r   o b j e c t 1   =   { 
                     f u n c :   t e s t F u n c 1 
                 } ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . f u n c   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   o b j e c t 1 . f u n c ( ) ) ;   / /   c l o n e 
 
                 v a r   o b j e c t 1   =   c l o n e ( { 
                     f u n c :   t e s t F u n c 1 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . f u n c   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   o b j e c t 1 . f u n c ( ) ) ;   / /   c l o n e   D e e p 
 
                 v a r   o b j e c t 1   =   c l o n e D e e p ( { 
                     f u n c :   t e s t F u n c 1 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   o b j e c t 1 . f u n c   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   o b j e c t 1 . f u n c ( ) ) ;   / /   n o   c l o n e 
 
                 v a r   a r r a y 1   =   [ t e s t F u n c 1 ] ; 
                 c h e c k E q u a l ( t r u e ,   a r r a y 1 [ 0 ]   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   a r r a y 1 [ 0 ] ( ) ) ;   / /   c l o n e 
 
                 v a r   a r r a y 1   =   c l o n e ( [ t e s t F u n c 1 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   a r r a y 1 [ 0 ]   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   a r r a y 1 [ 0 ] ( ) ) ;   / /   c l o n e   D e e p 
 
                 v a r   a r r a y 1   =   c l o n e D e e p ( [ t e s t F u n c 1 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   a r r a y 1 [ 0 ]   = = =   t e s t F u n c 1 ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   a r r a y 1 [ 0 ] ( ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ s y m b o l   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ s y m b o l ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ s y m b o l ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   s y m b o l 1   =   S y m b o l ( ) ; 
                 c h e c k E q u a l ( t r u e ,   p a r t s . i s S y m b o l ( s y m b o l 1 ) ) ; 
                 v a r   v a l u e 1   =   [ s y m b o l 1 ] ; 
                 v a r   v a l u e 2   =   c l o n e D e e p ( v a l u e 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   s y m b o l 1   = = =   v a l u e 1 [ 0 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   v a l u e 1 [ 0 ]   = = =   v a l u e 2 [ 0 ] ) ; 
                 c h e c k E q u a l ( t r u e ,   s y m b o l 1   = = =   v a l u e 2 [ 0 ] ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ m a p   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ m a p ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ m a p ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   m a p 1   =   n e w   M a p ( ) ; 
                 m a p 1 . s e t ( ' k e y 1 ' ,   ' v a l u e 1 ' ) ; 
                 m a p 1 . s e t ( ' k e y 2 ' ,   ' v a l u e 2 ' ) ; 
                 c h e c k E q u a l ( ' v a l u e 1 ' ,   m a p 1 . g e t ( ' k e y 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   p a r t s . i s O b j e c t ( m a p 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t L i k e ( m a p 1 ) ) ; 
                 v a r   m a p 2   =   c l o n e D e e p ( m a p 1 ) ; 
                 c h e c k E q u a l ( ' v a l u e 1 ' ,   m a p 2 . g e t ( ' k e y 1 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a p 1   = = =   m a p 2 ) ;   / /   n o   c l o n e 
                 / /   m a p   o b j e c t   a r r a y 
 
                 v a r   m a p 1   =   n e w   M a p ( ) ; 
                 m a p 1 . s e t ( ' a ' ,   { 
                     a :   ' 1 ' 
                 } ) ; 
                 m a p 1 . s e t ( ' b ' ,   [ ' b ' ] ) ; 
                 m a p 1 . s e t ( ' c ' ,   { 
                     a :   [ 1 ,   2 ,   3 ,   { 
                         b :   ' c ' 
                     } ] 
                 } ) ; 
                 m a p 1 . s e t ( ' d ' ,   [ 1 ,   2 ,   3 ,   { 
                     b :   ' c ' , 
                     d :   [ 4 ,   5 ,   6 ] 
                 } ] ) ; 
                 v a r   m a p 2   =   c l o n e D e e p ( m a p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   m a p 1   = = =   m a p 2 ) ;   / /   n o   c l o n e   n o   c o p y 
 
                 c h e c k E q u a l ( ' 1 ' ,   m a p 2 . g e t ( ' a ' ) . a ) ; 
                 c h e c k E q u a l ( ' b ' ,   m a p 2 . g e t ( ' b ' ) [ 0 ] ) ; 
                 c h e c k E q u a l ( ' c ' ,   m a p 2 . g e t ( ' c ' ) . a [ 3 ] . b ) ; 
                 c h e c k E q u a l ( 6 ,   m a p 2 . g e t ( ' d ' ) [ 3 ] . d [ 2 ] ) ;   / /   c l o n e D e e p   m a p 
 
                 v a r   o b j e c t 1   =   { 
                     a :   ' 1 ' 
                 } ; 
                 v a r   m a p 1   =   n e w   M a p ( ) ; 
                 m a p 1 . s e t ( ' a ' ,   o b j e c t 1 ) ; 
                 v a r   m a p 2   =   c l o n e D e e p ( m a p 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   m a p 1   = = =   m a p 2 ) ;   / /   n o   c l o n e   n o   c o p y 
 
                 c h e c k E q u a l ( ' 1 ' ,   m a p 1 . g e t ( ' a ' ) . a ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   m a p 2 . g e t ( ' a ' ) . a ) ; 
                 c h e c k E q u a l ( t r u e ,   m a p 1 . g e t ( ' a ' )   = = =   m a p 2 . g e t ( ' a ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ s e t   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ s e t ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ s e t ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   s e t 1   =   n e w   S e t ( ) ; 
                 s e t 1 . a d d ( ' v a l u e 1 ' ) ; 
                 s e t 1 . a d d ( ' v a l u e 2 ' ) ; 
                 c h e c k E q u a l ( t r u e ,   s e t 1 . h a s ( ' v a l u e 1 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   s e t 1 . h a s ( ' v a l u e 2 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   s e t 1 . h a s ( ' v a l u e 3 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   p a r t s . i s O b j e c t ( s e t 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   p a r t s . i s O b j e c t L i k e ( s e t 1 ) ) ; 
                 v a r   s e t 2   =   c l o n e D e e p ( s e t 1 ) ; 
                 c h e c k E q u a l ( t r u e ,   s e t 2 . h a s ( ' v a l u e 1 ' ) ) ;   / /   n o   c o p y   n o   c l o n e 
 
                 c h e c k E q u a l ( t r u e ,   s e t 1   = = =   s e t 2 ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c l o n e D e e p _ F a s t _ C i r c u l a r R e f e r e n c e   =   f u n c t i o n   t e s t _ c l o n e D e e p _ F a s t _ C i r c u l a r R e f e r e n c e ( )   { 
             i t ( ' t e s t _ c l o n e D e e p _ F a s t _ C i r c u l a r R e f e r e n c e ' ,   f u n c t i o n   ( )   { 
                 v a r   o b j e c t 1   =   { 
                     b :   ' t e s t ' 
                 } ; 
                 o b j e c t 1 . a   =   o b j e c t 1 ; 
                 c h e c k E q u a l ( ' t e s t ' ,   o b j e c t 1 . b ) ; 
                 c h e c k E q u a l ( ' t e s t ' ,   o b j e c t 1 . a . b ) ; 
                 c h e c k E q u a l ( ' t e s t ' ,   o b j e c t 1 . a . a . b ) ;   / /   t h r e a d   ' m a i n '   h a s   o v e r f l o w e d   i t s   s t a c k 
                 / /   c o n s t   o b j e c t 2   =   c l o n e D e e p ( o b j e c t 1 ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ m e r g e   =   f u n c t i o n   t e s t _ m e r g e ( )   { 
             i t ( ' t e s t _ m e r g e ' ,   f u n c t i o n   ( )   { 
                 / /   o b j e c t 
                 v a r   t e s t O b j e c t A r r a y   =   [ { 
                     k e y 1 :   1 0 0 , 
                     k e y 2 :   2 0 0 , 
                     k e y 3 :   3 0 0 
                 } ,   { 
                     k e y 1 :   1 0 0 , 
                     k e y 2 :   1 5 0 , 
                     k e y 3 :   1 0 0 
                 } ,   { 
                     k e y 1 :   1 0 0 , 
                     k e y 3 :   2 0 0 , 
                     k e y 4 :   1 0 0 
                 } ] ; 
                 c h e c k E q u a l ( { 
                     k e y 1 :   1 0 0 , 
                     k e y 2 :   1 5 0 , 
                     k e y 3 :   2 0 0 , 
                     k e y 4 :   1 0 0 
                 } ,   m e r g e ( { } ,   t e s t O b j e c t A r r a y ) ) ; 
                 c h e c k E q u a l ( { 
                     k e y 1 :   3 0 0 , 
                     k e y 2 :   3 5 0 , 
                     k e y 3 :   6 0 0 , 
                     k e y 4 :   1 0 0 
                 } ,   m e r g e ( { 
                     k e y 1 :   0 , 
                     k e y 2 :   0 , 
                     k e y 3 :   0 , 
                     k e y 4 :   0 
                 } ,   t e s t O b j e c t A r r a y ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                     r e t u r n   s o u r c e   +   t a r g e t ; 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     k e y 1 :   3 0 0 , 
                     k e y 2 :   3 5 0 , 
                     k e y 3 :   6 0 0 , 
                     k e y 4 :   1 0 0 
                 } ,   m e r g e ( { } ,   t e s t O b j e c t A r r a y ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                     r e t u r n   i s U n d e f i n e d ( s o u r c e )   ?   t a r g e t   :   s o u r c e   +   t a r g e t ; 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     k e y 1 :   [ 3 ,   3 0 0 ] , 
                     k e y 2 :   [ 2 ,   3 5 0 ] , 
                     k e y 3 :   [ 3 ,   6 0 0 ] , 
                     k e y 4 :   [ 1 ,   1 0 0 ] 
                 } ,   m e r g e ( { 
                     k e y 1 :   [ 0 ,   0 ] , 
                     k e y 2 :   [ 0 ,   0 ] , 
                     k e y 3 :   [ 0 ,   0 ] , 
                     k e y 4 :   [ 0 ,   0 ] 
                 } ,   t e s t O b j e c t A r r a y ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                     r e t u r n   [ s o u r c e [ 0 ]   +   1 ,   s o u r c e [ 1 ]   +   t a r g e t ] ; 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     k e y 1 :   [ 3 ,   3 0 0 ] , 
                     k e y 2 :   [ 2 ,   3 5 0 ] , 
                     k e y 3 :   [ 3 ,   6 0 0 ] , 
                     k e y 4 :   [ 1 ,   1 0 0 ] 
                 } ,   m e r g e ( { } ,   t e s t O b j e c t A r r a y ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                     r e t u r n   i s U n d e f i n e d ( s o u r c e )   ?   [ 1 ,   t a r g e t ]   :   [ s o u r c e [ 0 ]   +   1 ,   s o u r c e [ 1 ]   +   t a r g e t ] ; 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     k e y 1 :   1 0 0 , 
                     k e y 2 :   1 7 5 , 
                     k e y 3 :   2 0 0 , 
                     k e y 4 :   1 0 0 
                 } ,   o b j e c t F r o m E n t r i e s ( m a p ( o b j e c t E n t r i e s ( m e r g e ( { 
                     k e y 1 :   [ 0 ,   0 ] , 
                     k e y 2 :   [ 0 ,   0 ] , 
                     k e y 3 :   [ 0 ,   0 ] , 
                     k e y 4 :   [ 0 ,   0 ] 
                 } ,   t e s t O b j e c t A r r a y ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                     r e t u r n   [ s o u r c e [ 0 ]   +   1 ,   s o u r c e [ 1 ]   +   t a r g e t ] ; 
                 } ) ) ,   f u n c t i o n   ( _ r e f )   { 
                     v a r   _ r e f 2   =   _ s l i c e d T o A r r a y ( _ r e f ,   2 ) , 
                             k e y   =   _ r e f 2 [ 0 ] , 
                             v a l u e   =   _ r e f 2 [ 1 ] ; 
 
                     r e t u r n   [ k e y ,   v a l u e [ 1 ]   /   v a l u e [ 0 ] ] ; 
                 } ) ) ) ;   / /   d e e p   m e r g e 
 
                 v a r   n a m e s   =   { 
                     ' c h a r a c t e r s ' :   [ { 
                         ' n a m e ' :   ' H a r u 3 9 ' 
                     } ,   { 
                         ' n a m e ' :   ' y u t a p o n ' 
                     } ] 
                 } ; 
                 v a r   a g e s   =   { 
                     ' c h a r a c t e r s ' :   [ { 
                         ' a g e ' :   2 6 
                     } ,   { 
                         ' a g e ' :   1 8 
                     } ] 
                 } ; 
                 c h e c k E q u a l ( { 
                     c h a r a c t e r s :   [ { 
                         a g e :   2 6 , 
                         n a m e :   ' H a r u 3 9 ' 
                     } ,   { 
                         a g e :   1 8 , 
                         n a m e :   ' y u t a p o n ' 
                     } ] 
                 } ,   m e r g e ( { } ,   [ n a m e s ,   a g e s ] ) ) ;   / /   a r r a y 
 
                 v a r   t e s t A r r a y A r r a y   =   [ [ 1 0 0 ,   2 0 0 ,   3 0 0 ] ,   [ 1 0 0 ,   1 5 0 ,   1 0 0 ] ,   [ 1 0 0 , ,   2 0 0 ,   1 0 0 ] ] ; 
                 c h e c k E q u a l ( [ 1 0 0 ,   1 5 0 ,   2 0 0 ,   1 0 0 ] ,   m e r g e ( [ ] ,   t e s t A r r a y A r r a y ) ) ; 
                 c h e c k E q u a l ( [ 3 0 0 ,   3 5 0 ,   6 0 0 ,   1 0 0 ] ,   m e r g e ( [ ] ,   t e s t A r r a y A r r a y ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                     i f   ( i s U n d e f i n e d ( t a r g e t ) )   { 
                         r e t u r n ; 
                     } 
 
                     r e t u r n   i s U n d e f i n e d ( s o u r c e )   ?   t a r g e t   :   s o u r c e   +   t a r g e t ; 
                 } ) ) ; 
                 c h e c k E q u a l ( [ [ 3 ,   3 0 0 ] ,   [ 2 ,   3 5 0 ] ,   [ 3 ,   6 0 0 ] ,   [ 1 ,   1 0 0 ] ] ,   m e r g e ( [ [ 0 ,   0 ] ,   [ 0 ,   0 ] ,   [ 0 ,   0 ] ,   [ 0 ,   0 ] ] ,   t e s t A r r a y A r r a y ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                     i f   ( i s U n d e f i n e d ( t a r g e t ) )   { 
                         r e t u r n ; 
                     } 
 
                     r e t u r n   [ s o u r c e [ 0 ]   +   1 ,   s o u r c e [ 1 ]   +   t a r g e t ] ; 
                 } ) ) ; 
                 c h e c k E q u a l ( [ [ 3 ,   3 0 0 ] ,   [ 2 ,   3 5 0 ] ,   [ 3 ,   6 0 0 ] ,   [ 1 ,   1 0 0 ] ] ,   m e r g e ( [ ] ,   t e s t A r r a y A r r a y ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                     i f   ( i s U n d e f i n e d ( t a r g e t ) )   { 
                         r e t u r n ; 
                     } 
 
                     r e t u r n   i s U n d e f i n e d ( s o u r c e )   ?   [ 1 ,   t a r g e t ]   :   [ s o u r c e [ 0 ]   +   1 ,   s o u r c e [ 1 ]   +   t a r g e t ] ; 
                 } ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( { 
                     k e y 1 :   3 0 0 , 
                     k e y 2 :   3 5 0 , 
                     k e y 3 :   6 0 0 , 
                     k e y 4 :   1 0 0 
                 } ,   m e r g e ( { 
                     s o u r c e :   { 
                         k e y 1 :   0 , 
                         k e y 2 :   0 , 
                         k e y 3 :   0 , 
                         k e y 4 :   0 
                     } , 
                     t a r g e t A r r a y :   t e s t O b j e c t A r r a y , 
                     f u n c :   f u n c t i o n   f u n c ( s o u r c e ,   t a r g e t )   { 
                         r e t u r n   s o u r c e   +   t a r g e t ; 
                     } 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     k e y 1 :   3 0 0 , 
                     k e y 2 :   3 5 0 , 
                     k e y 3 :   6 0 0 , 
                     k e y 4 :   1 0 0 
                 } ,   m e r g e ( { 
                     k e y 1 :   0 , 
                     k e y 2 :   0 , 
                     k e y 3 :   0 , 
                     k e y 4 :   0 
                 } ,   { 
                     t a r g e t A r r a y :   t e s t O b j e c t A r r a y , 
                     f u n c :   f u n c t i o n   f u n c ( s o u r c e ,   t a r g e t )   { 
                         r e t u r n   s o u r c e   +   t a r g e t ; 
                     } 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     k e y 1 :   3 0 0 , 
                     k e y 2 :   3 5 0 , 
                     k e y 3 :   6 0 0 , 
                     k e y 4 :   1 0 0 
                 } ,   m e r g e ( { 
                     k e y 1 :   0 , 
                     k e y 2 :   0 , 
                     k e y 3 :   0 , 
                     k e y 4 :   0 
                 } ,   t e s t O b j e c t A r r a y ,   { 
                     f u n c :   f u n c t i o n   f u n c ( s o u r c e ,   t a r g e t )   { 
                         r e t u r n   s o u r c e   +   t a r g e t ; 
                     } 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( { 
                     k e y 1 :   0 , 
                     k e y 2 :   0 , 
                     k e y 3 :   0 , 
                     k e y 4 :   0 
                 } ,   m e r g e ( { } ,   [ { 
                     k e y 1 :   0 , 
                     k e y 2 :   0 , 
                     k e y 3 :   0 , 
                     k e y 4 :   0 
                 } ] ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                     r e t u r n   t a r g e t ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     m e r g e ( { } ,   [ { 
                         k e y 1 :   0 , 
                         k e y 2 :   0 , 
                         k e y 3 :   0 , 
                         k e y 4 :   0 
                     } ] ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                         r e t u r n   t a r g e t ; 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     m e r g e ( { } ,   [ ' 1 2 3 ' ] ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                         r e t u r n   t a r g e t ; 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     m e r g e ( { } ,   [ { 
                         k e y 1 :   0 , 
                         k e y 2 :   0 , 
                         k e y 3 :   0 , 
                         k e y 4 :   0 
                     } ] ,   1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     m e r g e ( 1 2 3 ,   [ { 
                         k e y 1 :   0 , 
                         k e y 2 :   0 , 
                         k e y 3 :   0 , 
                         k e y 4 :   0 
                     } ] ,   f u n c t i o n   ( s o u r c e ,   t a r g e t )   { 
                         r e t u r n   t a r g e t ; 
                     } ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   s e t P r o p e r t y   =   p a r t s . s e t P r o p e r t y , 
                 r e c u r s i v e   =   p a r t s . r e c u r s i v e ; 
 
         v a r   c l o n e D e e p U s e R e c u r s i v e   =   f u n c t i o n   c l o n e D e e p U s e R e c u r s i v e ( s o u r c e )   { 
             v a r   r e s u l t ; 
 
             i f   ( i s O b j e c t ( s o u r c e ) )   { 
                 r e s u l t   =   { } ; 
             }   e l s e   i f   ( i s A r r a y ( s o u r c e ) )   { 
                 r e s u l t   =   [ ] ; 
             }   e l s e   { 
                 r e t u r n   s o u r c e ; 
             } 
 
             r e c u r s i v e ( s o u r c e ,   f u n c t i o n   ( v a l u e ,   k e y ,   l e v e l ,   p a t h )   { 
                 i f   ( i s O b j e c t ( v a l u e ) )   { 
                     s e t P r o p e r t y ( r e s u l t ,   p a t h   +   ' . '   +   k e y ,   { } ) ; 
                     r e t u r n   v a l u e ; 
                 }   e l s e   i f   ( i s A r r a y ( v a l u e ) )   { 
                     s e t P r o p e r t y ( r e s u l t ,   p a t h   +   ' . '   +   k e y ,   [ ] ) ; 
                     r e t u r n   v a l u e ; 
                 }   e l s e   { 
                     s e t P r o p e r t y ( r e s u l t ,   p a t h   +   ' . '   +   k e y ,   v a l u e ) ; 
                 } 
             } ) ; 
             r e t u r n   r e s u l t ; 
         } ; 
 
         t e s t _ c l o n e _ o b j e c t ( ) ; 
         t e s t _ c l o n e _ a r r a y ( ) ; 
         t e s t _ c l o n e _ d a t e ( ) ; 
         t e s t _ c l o n e _ f u n c t i o n ( ) ; 
         t e s t _ c l o n e _ r e g e x p ( ) ; 
         t e s t _ c l o n e _ o b j e c t P a r a m e t e r ( ) ; 
         t e s t _ c l o n e _ F a s t _ o b j e c t ( ) ; 
         t e s t _ c l o n e _ F a s t _ a r r a y ( ) ; 
         t e s t _ c l o n e _ F a s t _ d a t e ( ) ; 
         t e s t _ c l o n e _ F a s t _ f u n c t i o n ( ) ; 
         t e s t _ c l o n e _ F a s t _ r e g e x p ( ) ; 
         v a r   c l o n e D e e p ; 
         c l o n e D e e p   =   p a r t s . c o m m o n . c l o n e D e e p ; 
         t e s t _ c l o n e D e e p _ o b j e c t ( ) ; 
         t e s t _ c l o n e D e e p _ a r r a y ( ) ; 
         t e s t _ c l o n e D e e p _ o b j e c t _ a r r a y _ m i x ( ) ; 
         t e s t _ c l o n e D e e p _ d a t e ( ) ; 
         t e s t _ c l o n e D e e p _ r e g E x p ( ) ; 
         t e s t _ c l o n e D e e p _ o b j e c t P a r a m e t e r ( ) ; 
         t e s t _ c l o n e D e e p _ f u n c t i o n ( ) ; 
         t e s t _ c l o n e D e e p _ m o m e n t ( ) ; 
         t e s t _ c l o n e D e e p _ s y m b o l ( ) ; 
         t e s t _ c l o n e D e e p _ m a p ( ) ; 
         t e s t _ c l o n e D e e p _ s e t ( ) ; 
         t e s t _ c l o n e D e e p _ C i r c u l a r R e f e r e n c e ( ) ; 
         c l o n e D e e p   =   c l o n e D e e p U s e R e c u r s i v e ; 
         t e s t _ c l o n e D e e p _ F a s t _ o b j e c t ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ a r r a y ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ o b j e c t _ a r r a y _ m i x ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ d a t e ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ r e g E x p ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ f u n c t i o n ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ s y m b o l ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ m a p ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ s e t ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ C i r c u l a r R e f e r e n c e ( ) ; 
         c l o n e D e e p   =   p a r t s . c o m m o n . c l o n e D e e p ; 
         t e s t _ c l o n e D e e p _ F a s t _ o b j e c t ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ a r r a y ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ o b j e c t _ a r r a y _ m i x ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ d a t e ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ r e g E x p ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ f u n c t i o n ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ s y m b o l ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ m a p ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ s e t ( ) ; 
         t e s t _ c l o n e D e e p _ F a s t _ C i r c u l a r R e f e r e n c e ( ) ; 
         t e s t _ m e r g e ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ c o m m o n   =   t e s t _ e x e c u t e _ c o m m o n ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ c o m m o n :   t e s t _ e x e c u t e _ c o m m o n 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) 
 
 } ] ) ; 