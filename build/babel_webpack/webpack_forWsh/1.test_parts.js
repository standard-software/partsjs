( t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   =   t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   | |   [ ] ) . p u s h ( [ [ 1 ] , { 
 
 / * * * /   1 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ i n d e x   =   v o i d   0 ; 
 
 v a r   _ c o m m o n T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 2 ) ; 
 
 v a r   _ t y p e T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 3 ) ; 
 
 v a r   _ s y n t a x T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 4 ) ; 
 
 v a r   _ t e s t T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 5 ) ; 
 
 v a r   _ c o m p a r e T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 6 ) ; 
 
 v a r   _ c o n v e r t T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 7 ) ; 
 
 v a r   _ n u m b e r T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 8 ) ; 
 
 v a r   _ s t r i n g T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 9 ) ; 
 
 v a r   _ o b j e c t T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 1 0 ) ; 
 
 v a r   _ a r r a y T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 1 1 ) ; 
 
 v a r   _ d a t e T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 1 2 ) ; 
 
 v a r   _ c o n s o l e H o o k T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 1 3 ) ; 
 
 v a r   _ o t h e r T e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 1 4 ) ; 
 
 v a r   t e s t _ e x e c u t e _ i n d e x   =   f u n c t i o n   t e s t _ e x e c u t e _ i n d e x ( p a r t s )   { 
     c o n s o l e . l o g ( " p a r t s . j s   v e r s i o n :   " . c o n c a t ( p a r t s . V E R S I O N ) ) ; 
     c o n s o l e . l o g ( " p l a t f o r m :   " . c o n c a t ( p a r t s . p l a t f o r m . p l a t f o r m N a m e ( ) ) ) ; 
 
     i f   ( p a r t s . p l a t f o r m . i s W e b B r o w s e r ( ) )   { 
         c o n s o l e . l o g ( "     U s e r   A g e n t :   " . c o n c a t ( w i n d o w . n a v i g a t o r . u s e r A g e n t ) ) ; 
     } 
 
     c o n s o l e . l o g ( "     b u i l d M o d e :   " . c o n c a t ( p a r t s . p l a t f o r m . b u i l d M o d e ) ) ; 
     c o n s o l e . l o g ( "     t e s t S t a r t F i l e N a m e :   " . c o n c a t ( p a r t s . p l a t f o r m . t e s t S t a r t F i l e N a m e ) ) ; 
     c o n s o l e . l o g ( " t e s t   s t a r t   d a t e t i m e :   " . c o n c a t ( n e w   D a t e ( ) . t o S t r i n g ( ) ) ) ; 
 
     v a r   t e s t _ e x e c u t e _ n a m e S p a c e   =   f u n c t i o n   t e s t _ e x e c u t e _ n a m e S p a c e ( p a r t s )   { 
         v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
                 d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
                 i t   =   _ p a r t s $ t e s t . i t , 
                 c h e c k E q u a l   =   _ p a r t s $ t e s t . c h e c k E q u a l ; 
         d e s c r i b e ( ' t e s t _ e x e c u t e _ n a m e S p a c e ' ,   f u n c t i o n   ( )   { 
             v a r   _ p a r t s $ o b j e c t   =   p a r t s . o b j e c t , 
                     p r o p e r t y C o u n t   =   _ p a r t s $ o b j e c t . p r o p e r t y C o u n t , 
                     i n P r o p e r t y   =   _ p a r t s $ o b j e c t . i n P r o p e r t y ; 
             i t ( ' t e s t _ e x e c u t e _ n a m e S p a c e   1 ' ,   f u n c t i o n   ( )   { 
                 v a r   p r o p e r t y C o u n t F o r P a r t s   =   f u n c t i o n   p r o p e r t y C o u n t F o r P a r t s ( p a r t s )   { 
                     v a r   r e s u l t   =   p r o p e r t y C o u n t ( p a r t s ) ; 
 
                     i f   ( p a r t s . i n P r o p e r t y ( p a r t s ,   ' d e f a u l t ' ) )   { 
                         r e s u l t   - =   1 ; 
                     } 
 
                     i f   ( p a r t s . i n P r o p e r t y ( p a r t s ,   ' p a r t s ' ) )   { 
                         r e s u l t   - =   1 ; 
                     } 
 
                     i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                         i f   ( p a r t s . i n P r o p e r t y ( p a r t s ,   ' _ _ e s M o d u l e ' ) )   { 
                             r e s u l t   - =   1 ; 
                         }   / /   _ _ e s M o d u l e   i s   " i n "   f o u n d   b u t   " f o r . . i n "   o r   " O b j e c t . k e y s "   n o t   f o u n d 
                         / /   a n d   W S H   f o u n d 
 
                     } 
 
                     r e t u r n   r e s u l t ; 
                 } ; 
 
                 c h e c k E q u a l ( 4 0 0 ,   p r o p e r t y C o u n t F o r P a r t s ( p a r t s ) ) ; 
                 c h e c k E q u a l ( 1 7 ,   p r o p e r t y C o u n t ( p a r t s . p l a t f o r m ) ) ; 
                 c h e c k E q u a l ( 7 ,   p r o p e r t y C o u n t ( p a r t s . c o m m o n ) ) ; 
                 c h e c k E q u a l ( 2 6 2 ,   p r o p e r t y C o u n t ( p a r t s . t y p e ) ) ; 
                 c h e c k E q u a l ( 1 7 ,   p r o p e r t y C o u n t ( p a r t s . s y n t a x ) ) ; 
                 c h e c k E q u a l ( 1 2 ,   p r o p e r t y C o u n t ( p a r t s . t e s t ) ) ; 
                 c h e c k E q u a l ( 4 4 ,   p r o p e r t y C o u n t ( p a r t s . c o m p a r e ) ) ; 
                 c h e c k E q u a l ( 3 5 ,   p r o p e r t y C o u n t ( p a r t s . c o n v e r t ) ) ; 
                 c h e c k E q u a l ( 1 9 ,   p r o p e r t y C o u n t ( p a r t s . n u m b e r ) ) ; 
                 c h e c k E q u a l ( 9 6 ,   p r o p e r t y C o u n t ( p a r t s . s t r i n g ) ) ; 
                 c h e c k E q u a l ( 4 0 ,   p r o p e r t y C o u n t ( p a r t s . o b j e c t ) ) ; 
                 c h e c k E q u a l ( 6 8 ,   p r o p e r t y C o u n t ( p a r t s . a r r a y ) ) ; 
                 c h e c k E q u a l ( 4 8 ,   p r o p e r t y C o u n t ( p a r t s . a r r a y . o p e r a t i o n ) ) ; 
                 c h e c k E q u a l ( 3 8 ,   p r o p e r t y C o u n t ( p a r t s . d a t e ) ) ; 
                 c h e c k E q u a l ( 2 ,   p r o p e r t y C o u n t ( p a r t s . s y s t e m ) ) ; 
                 c h e c k E q u a l ( 3 ,   p r o p e r t y C o u n t ( p a r t s . s y s t e m . w s h ) ) ; 
                 c h e c k E q u a l ( 2 0 ,   p r o p e r t y C o u n t ( p a r t s . s y s t e m . c o n s o l e H o o k ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( p a r t s ,   ' t y p e , s y n t a x , t e s t , c o m p a r e , c o n v e r t , '   +   ' n u m b e r , s t r i n g , o b j e c t , a r r a y , d a t e ' ) ) ; 
             } ) ; 
             i t ( ' t e s t _ e x e c u t e _ n a m e S p a c e   2 ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( p a r t s ,   ' i s U n d e f i n e d A l l , i s N o t N u l l A l l , '   +   ' i s F u n c , i s N o t O b j , '   +   ' i s T h r o w n , i s T h r o w n V a l u e , i s T h r o w n E x c e p t i o n , i s N o t T h r o w n , '   +   ' a s s e r t , g u a r d , '   +   ' s c , i f _ , s w i t c h _ , '   +   ' e q u a l , o r , '   +   ' m a t c h S o m e , m a t c h S o m e V a l u e , i n i t i a l V a l u e , '   +   ' n u m b e r T o S t r i n g , '   +   ' s t r i n g T o N u m b e r , s t r i n g T o I n t e g e r , '   +   ' n u m T o S t r i n g , '   +   ' s t r T o N u m b e r , s t r T o I n t e g e r , '   +   ' n u m T o S t r , '   +   ' s t r T o N u m , s t r T o I n t , '   +   ' m a t c h F o r m a t , '   +   ' c o p y P r o p e r t y , p r o p e r t y C o u n t , i n P r o p e r t y , '   +   ' c o p y P r o p , p r o p C o u n t , i n P r o p , '   +   ' c o m m o n ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( p a r t s ,   ' a b c , '   +   ' ' ) ) ; 
             } ) ; 
         } ) ; 
     } ; 
 
     v a r   t e s t _ e x e c u t e _ S e l f R e f e r e n c e   =   f u n c t i o n   t e s t _ e x e c u t e _ S e l f R e f e r e n c e ( p a r t s )   { 
         v a r   _ p a r t s $ t e s t 2   =   p a r t s . t e s t , 
                 d e s c r i b e   =   _ p a r t s $ t e s t 2 . d e s c r i b e , 
                 i t   =   _ p a r t s $ t e s t 2 . i t , 
                 c h e c k E q u a l   =   _ p a r t s $ t e s t 2 . c h e c k E q u a l ; 
         d e s c r i b e ( ' t e s t _ e x e c u t e _ S e l f R e f e r e n c e ' ,   f u n c t i o n   ( )   { 
             i t ( ' t e s t _ p a r t s _ S e l f R e f e r e n c e ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . i s U n d e f i n e d ( p a r t s . p a r t s ) )   { 
                     r e t u r n ; 
                 } 
 
                 c h e c k E q u a l ( p a r t s . V E R S I O N ,   p a r t s . p a r t s . V E R S I O N ) ; 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   p a r t s 1   =   p a r t s . c l o n e D e e p ( p a r t s ) ; 
                 d e l e t e   p a r t s 1 . p a r t s ; 
 
                 i f   ( ! p a r t s . i s U n d e f i n e d ( p a r t s 1 [ " d e f a u l t " ] ) )   { 
                     d e l e t e   p a r t s 1 [ " d e f a u l t " ] ; 
                 } 
 
                 i f   ( ! p a r t s . i s U n d e f i n e d ( p a r t s 1 . _ _ e s M o d u l e ) )   { 
                     d e l e t e   p a r t s 1 . _ _ e s M o d u l e ; 
                 } 
 
                 v a r   p a r t s 2   =   p a r t s . c l o n e D e e p ( p a r t s . p a r t s ) ; 
 
                 i f   ( ! p a r t s 2 . i s U n d e f i n e d ( p a r t s 2 . p a r t s ) )   { 
                     d e l e t e   p a r t s 2 . p a r t s ; 
                 } 
 
                 i f   ( ! p a r t s . i s U n d e f i n e d ( p a r t s 2 [ " d e f a u l t " ] ) )   { 
                     d e l e t e   p a r t s 2 [ " d e f a u l t " ] ; 
                 } 
 
                 i f   ( ! p a r t s . i s U n d e f i n e d ( p a r t s 2 . _ _ e s M o d u l e ) )   { 
                     d e l e t e   p a r t s 2 . _ _ e s M o d u l e ; 
                 } 
 
                 c h e c k E q u a l ( t r u e ,   p a r t s . e q u a l D e e p ( p a r t s 1 ,   p a r t s 2 ) ) ; 
             } ) ; 
         } ) ; 
     } ; 
 
     v a r   _ p a r t s $ t e s t 3   =   p a r t s . t e s t , 
             d e s c r i b e   =   _ p a r t s $ t e s t 3 . d e s c r i b e , 
             t e s t F r a m e   =   _ p a r t s $ t e s t 3 . t e s t F r a m e ; 
     t e s t F r a m e . o u t p u t D e s c r i b e   =   f a l s e ; 
     t e s t F r a m e . o u t p u t I t   =   f a l s e ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ i n d e x ' ,   f u n c t i o n   ( )   { 
         ( 0 ,   _ c o m m o n T e s t . t e s t _ e x e c u t e _ c o m m o n ) ( p a r t s ) ; 
         ( 0 ,   _ t y p e T e s t . t e s t _ e x e c u t e _ t y p e ) ( p a r t s ) ; 
         ( 0 ,   _ s y n t a x T e s t . t e s t _ e x e c u t e _ s y n t a x ) ( p a r t s ) ; 
         ( 0 ,   _ t e s t T e s t . t e s t _ e x e c u t e _ t e s t ) ( p a r t s ) ; 
         ( 0 ,   _ c o m p a r e T e s t . t e s t _ e x e c u t e _ c o m p a r e ) ( p a r t s ) ; 
         ( 0 ,   _ c o n v e r t T e s t . t e s t _ e x e c u t e _ c o n v e r t ) ( p a r t s ) ; 
         ( 0 ,   _ n u m b e r T e s t . t e s t _ e x e c u t e _ n u m b e r ) ( p a r t s ) ; 
         ( 0 ,   _ s t r i n g T e s t . t e s t _ e x e c u t e _ s t r i n g ) ( p a r t s ) ; 
         ( 0 ,   _ o b j e c t T e s t . t e s t _ e x e c u t e _ o b j e c t ) ( p a r t s ) ; 
         ( 0 ,   _ a r r a y T e s t . t e s t _ e x e c u t e _ a r r a y ) ( p a r t s ) ; 
         ( 0 ,   _ d a t e T e s t . t e s t _ e x e c u t e _ d a t e ) ( p a r t s ) ; 
         ( 0 ,   _ o t h e r T e s t . t e s t _ e x e c u t e _ o t h e r ) ( p a r t s ) ; 
         ( 0 ,   _ c o n s o l e H o o k T e s t . t e s t _ e x e c u t e _ c o n s o l e H o o k ) ( p a r t s ) ; 
         t e s t _ e x e c u t e _ n a m e S p a c e ( p a r t s ) ; 
         t e s t _ e x e c u t e _ S e l f R e f e r e n c e ( p a r t s ) ; 
         c o n s o l e . l o g ( ' t e s t   f i n i s h ' ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ i n d e x   =   t e s t _ e x e c u t e _ i n d e x ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ i n d e x :   t e s t _ e x e c u t e _ i n d e x 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) , 
 
 / * * * /   1 2 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ d a t e   =   v o i d   0 ; 
 
 f u n c t i o n   _ s l i c e d T o A r r a y ( a r r ,   i )   {   r e t u r n   _ a r r a y W i t h H o l e s ( a r r )   | |   _ i t e r a b l e T o A r r a y L i m i t ( a r r ,   i )   | |   _ u n s u p p o r t e d I t e r a b l e T o A r r a y ( a r r ,   i )   | |   _ n o n I t e r a b l e R e s t ( ) ;   } 
 
 f u n c t i o n   _ n o n I t e r a b l e R e s t ( )   {   t h r o w   n e w   T y p e E r r o r ( " I n v a l i d   a t t e m p t   t o   d e s t r u c t u r e   n o n - i t e r a b l e   i n s t a n c e . \ n I n   o r d e r   t o   b e   i t e r a b l e ,   n o n - a r r a y   o b j e c t s   m u s t   h a v e   a   [ S y m b o l . i t e r a t o r ] ( )   m e t h o d . " ) ;   } 
 
 f u n c t i o n   _ u n s u p p o r t e d I t e r a b l e T o A r r a y ( o ,   m i n L e n )   {   i f   ( ! o )   r e t u r n ;   i f   ( t y p e o f   o   = = =   " s t r i n g " )   r e t u r n   _ a r r a y L i k e T o A r r a y ( o ,   m i n L e n ) ;   v a r   n   =   O b j e c t . p r o t o t y p e . t o S t r i n g . c a l l ( o ) . s l i c e ( 8 ,   - 1 ) ;   i f   ( n   = = =   " O b j e c t "   & &   o . c o n s t r u c t o r )   n   =   o . c o n s t r u c t o r . n a m e ;   i f   ( n   = = =   " M a p "   | |   n   = = =   " S e t " )   r e t u r n   A r r a y . f r o m ( o ) ;   i f   ( n   = = =   " A r g u m e n t s "   | |   / ^ ( ? : U i | I ) n t ( ? : 8 | 1 6 | 3 2 ) ( ? : C l a m p e d ) ? A r r a y $ / . t e s t ( n ) )   r e t u r n   _ a r r a y L i k e T o A r r a y ( o ,   m i n L e n ) ;   } 
 
 f u n c t i o n   _ a r r a y L i k e T o A r r a y ( a r r ,   l e n )   {   i f   ( l e n   = =   n u l l   | |   l e n   >   a r r . l e n g t h )   l e n   =   a r r . l e n g t h ;   f o r   ( v a r   i   =   0 ,   a r r 2   =   n e w   A r r a y ( l e n ) ;   i   <   l e n ;   i + + )   {   a r r 2 [ i ]   =   a r r [ i ] ;   }   r e t u r n   a r r 2 ;   } 
 
 f u n c t i o n   _ i t e r a b l e T o A r r a y L i m i t ( a r r ,   i )   {   i f   ( t y p e o f   S y m b o l   = = =   " u n d e f i n e d "   | |   ! ( S y m b o l . i t e r a t o r   i n   O b j e c t ( a r r ) ) )   r e t u r n ;   v a r   _ a r r   =   [ ] ;   v a r   _ n   =   t r u e ;   v a r   _ d   =   f a l s e ;   v a r   _ e   =   u n d e f i n e d ;   t r y   {   f o r   ( v a r   _ i   =   a r r [ S y m b o l . i t e r a t o r ] ( ) ,   _ s ;   ! ( _ n   =   ( _ s   =   _ i . n e x t ( ) ) . d o n e ) ;   _ n   =   t r u e )   {   _ a r r . p u s h ( _ s . v a l u e ) ;   i f   ( i   & &   _ a r r . l e n g t h   = = =   i )   b r e a k ;   }   }   c a t c h   ( e r r )   {   _ d   =   t r u e ;   _ e   =   e r r ;   }   f i n a l l y   {   t r y   {   i f   ( ! _ n   & &   _ i [ " r e t u r n " ]   ! =   n u l l )   _ i [ " r e t u r n " ] ( ) ;   }   f i n a l l y   {   i f   ( _ d )   t h r o w   _ e ;   }   }   r e t u r n   _ a r r ;   } 
 
 f u n c t i o n   _ a r r a y W i t h H o l e s ( a r r )   {   i f   ( A r r a y . i s A r r a y ( a r r ) )   r e t u r n   a r r ;   } 
 
 v a r   t e s t _ e x e c u t e _ d a t e   =   f u n c t i o n   t e s t _ e x e c u t e _ d a t e ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t , 
             c h e c k E q u a l   =   _ p a r t s $ t e s t . c h e c k E q u a l , 
             i s T h r o w n   =   _ p a r t s $ t e s t . i s T h r o w n , 
             i s T h r o w n E x c e p t i o n   =   _ p a r t s $ t e s t . i s T h r o w n E x c e p t i o n , 
             t e s t C o u n t e r   =   _ p a r t s $ t e s t . t e s t C o u n t e r ; 
     v a r   _ p a r t s $ d a t e   =   p a r t s . d a t e , 
             T h i s Y e a r   =   _ p a r t s $ d a t e . T h i s Y e a r , 
             T h i s M o n t h   =   _ p a r t s $ d a t e . T h i s M o n t h , 
             T o d a y   =   _ p a r t s $ d a t e . T o d a y , 
             i s I n v a l i d D a t e   =   _ p a r t s $ d a t e . i s I n v a l i d D a t e , 
             D a t e t i m e   =   _ p a r t s $ d a t e . D a t e t i m e , 
             d a t e T o S t r i n g   =   _ p a r t s $ d a t e . d a t e T o S t r i n g , 
             d a t e T o S t r i n g U T C   =   _ p a r t s $ d a t e . d a t e T o S t r i n g U T C , 
             d a y O f W e e k   =   _ p a r t s $ d a t e . d a y O f W e e k , 
             d a y O f W e e k E n g l i s h S h o r t   =   _ p a r t s $ d a t e . d a y O f W e e k E n g l i s h S h o r t , 
             d a y O f W e e k E n g l i s h L o n g   =   _ p a r t s $ d a t e . d a y O f W e e k E n g l i s h L o n g , 
             d a y O f W e e k J a p a n e s e S h o r t   =   _ p a r t s $ d a t e . d a y O f W e e k J a p a n e s e S h o r t , 
             d a y O f W e e k J a p a n e s e L o n g   =   _ p a r t s $ d a t e . d a y O f W e e k J a p a n e s e L o n g , 
             n a m e O f M o n t h   =   _ p a r t s $ d a t e . n a m e O f M o n t h , 
             n a m e O f M o n t h E n g l i s h C h a r 3   =   _ p a r t s $ d a t e . n a m e O f M o n t h E n g l i s h C h a r 3 , 
             n a m e O f M o n t h E n g l i s h C h a r 4   =   _ p a r t s $ d a t e . n a m e O f M o n t h E n g l i s h C h a r 4 , 
             n a m e O f M o n t h E n g l i s h L o n g   =   _ p a r t s $ d a t e . n a m e O f M o n t h E n g l i s h L o n g , 
             s t r i n g T o D a t e   =   _ p a r t s $ d a t e . s t r i n g T o D a t e , 
             m i n u t e s T o T e x t s   =   _ p a r t s $ d a t e . m i n u t e s T o T e x t s , 
             t e x t s T o M i n u t e s   =   _ p a r t s $ d a t e . t e x t s T o M i n u t e s ; 
     v a r   i s D a t e   =   p a r t s . i s D a t e ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ d a t e ' ,   f u n c t i o n   ( )   { 
         v a r   t e s t _ T h i s Y e a r   =   f u n c t i o n   t e s t _ T h i s Y e a r ( )   { 
             i t ( ' t e s t _ T h i s Y e a r ' ,   f u n c t i o n   ( )   { 
                 v a r   n o w   =   n e w   D a t e ( ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( n o w . g e t F u l l Y e a r ( ) ,   0 ,   1 ) ,   T h i s Y e a r ( ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( D a t e . U T C ( n o w . g e t U T C F u l l Y e a r ( ) ,   0 ,   1 ) ) ,   T h i s Y e a r ( f a l s e ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( D a t e . U T C ( n o w . g e t U T C F u l l Y e a r ( ) ,   0 ,   1 ) ) ,   T h i s Y e a r ( { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ T h i s M o n t h   =   f u n c t i o n   t e s t _ T h i s M o n t h ( )   { 
             i t ( ' t e s t _ T h i s M o n t h ' ,   f u n c t i o n   ( )   { 
                 v a r   n o w   =   n e w   D a t e ( ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( n o w . g e t F u l l Y e a r ( ) ,   n o w . g e t M o n t h ( ) ,   1 ) ,   T h i s M o n t h ( ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( D a t e . U T C ( n o w . g e t U T C F u l l Y e a r ( ) ,   n o w . g e t U T C M o n t h ( ) ,   1 ) ) ,   T h i s M o n t h ( f a l s e ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( D a t e . U T C ( n o w . g e t U T C F u l l Y e a r ( ) ,   n o w . g e t U T C M o n t h ( ) ,   1 ) ) ,   T h i s M o n t h ( { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ T o d a y   =   f u n c t i o n   t e s t _ T o d a y ( )   { 
             i t ( ' t e s t _ T o d a y ' ,   f u n c t i o n   ( )   { 
                 v a r   n o w   =   n e w   D a t e ( ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( n o w . g e t F u l l Y e a r ( ) ,   n o w . g e t M o n t h ( ) ,   n o w . g e t D a t e ( ) ) ,   T o d a y ( ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( D a t e . U T C ( n o w . g e t U T C F u l l Y e a r ( ) ,   n o w . g e t U T C M o n t h ( ) ,   n o w . g e t U T C D a t e ( ) ) ) ,   T o d a y ( f a l s e ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( D a t e . U T C ( n o w . g e t U T C F u l l Y e a r ( ) ,   n o w . g e t U T C M o n t h ( ) ,   n o w . g e t U T C D a t e ( ) ) ) ,   T o d a y ( { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s I n v a l i d D a t e   =   f u n c t i o n   t e s t _ i s I n v a l i d D a t e ( )   { 
             i t ( ' t e s t _ i s I n v a l i d D a t e ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s D a t e ( n e w   D a t e ( 2 0 2 0 ,   1 1 ,   2 1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s D a t e ( n e w   D a t e ( ' A B C ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n v a l i d D a t e ( n e w   D a t e ( 2 0 2 0 ,   1 1 ,   2 1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n v a l i d D a t e ( n e w   D a t e ( ' A B C ' ) ) ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( ' N a N ' ,   n e w   D a t e ( ' A B C ' ) . t o S t r i n g ( ) ) ; 
                     c h e c k E q u a l ( ' N a N - N a N - N a N T N a N : N a N : N a N . N Z ' ,   n e w   D a t e ( ' A B C ' ) . t o I S O S t r i n g ( ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' I n v a l i d   D a t e ' ,   n e w   D a t e ( ' A B C ' ) . t o S t r i n g ( ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   D a t e ( ' A B C ' ) . t o I S O S t r i n g ( ) ; 
                     } ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ D a t e _ s t a n d a r d   =   f u n c t i o n   t e s t _ D a t e _ s t a n d a r d ( )   { 
             i t ( ' t e s t _ D a t e _ s t a n d a r d ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 0 ,   n e w   D a t e ( 0 ) . g e t T i m e ( ) ) ; 
 
                 v a r   _ m i n u t e s T o T e x t s   =   m i n u t e s T o T e x t s ( - 1   *   n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( ) ) , 
                         _ m i n u t e s T o T e x t s 2   =   _ s l i c e d T o A r r a y ( _ m i n u t e s T o T e x t s ,   3 ) , 
                         s   =   _ m i n u t e s T o T e x t s 2 [ 0 ] , 
                         h   =   _ m i n u t e s T o T e x t s 2 [ 1 ] , 
                         m   =   _ m i n u t e s T o T e x t s 2 [ 2 ] ; 
 
                 i f   ( s   = = =   ' + ' )   { 
                     i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                         c h e c k E q u a l ( 0 ,   n e w   D a t e ( 0 ) . t o S t r i n g ( ) . i n d e x O f ( " T h u   J a n   0 1   1 9 7 0   " . c o n c a t ( h ,   " : " ) . c o n c a t ( m ,   " : 0 0   G M T " ) . c o n c a t ( s   +   h   +   m ) ) ) ;   / /   c h e c k E q u a l ( 
                         / /       n e w   D a t e ( 0 ) . t o S t r i n g ( ) , 
                         / /       ` T h u   J a n   0 1   1 9 7 0   $ { h } : $ { m } : 0 0   G M T $ { s   +   h   +   m } ` , 
                         / /   ) ; 
                     }   e l s e   { 
                         c h e c k E q u a l ( " T h u   J a n   1   " . c o n c a t ( h ,   " : " ) . c o n c a t ( m ,   " : 0 0   U T C " ) . c o n c a t ( s   +   h   +   m ,   "   1 9 7 0 " ) ,   n e w   D a t e ( 0 ) . t o S t r i n g ( ) ) ; 
                     } 
                 } 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( ' T h u ,   0 1   J a n   1 9 7 0   0 0 : 0 0 : 0 0   G M T ' ,   n e w   D a t e ( 0 ) . t o U T C S t r i n g ( ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' T h u ,   1   J a n   1 9 7 0   0 0 : 0 0 : 0 0   U T C ' ,   n e w   D a t e ( 0 ) . t o U T C S t r i n g ( ) ) ; 
                 } 
 
                 c h e c k E q u a l ( ' 1 9 7 0 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 . 0 0 0 Z ' ,   n e w   D a t e ( 0 ) . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   n e w   D a t e ( D a t e . U T C ( 2 0 2 0 ,   1 0 ,   2 1 ,   1 1 ,   3 5 ,   1 0 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 1 - 2 1 T 1 1 : 3 5 : 1 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ D a t e t i m e   =   f u n c t i o n   t e s t _ D a t e t i m e ( )   { 
             i t ( ' t e s t _ D a t e t i m e ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 0 ,   n e w   D a t e ( 0 ) . g e t T i m e ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( u n d e f i n e d ,   u n d e f i n e d ,   u n d e f i n e d ,   u n d e f i n e d ,   u n d e f i n e d ,   u n d e f i n e d ,   u n d e f i n e d ,   f a l s e ) ; 
                 c h e c k E q u a l ( 0 ,   d t . g e t T i m e ( ) ) ; 
                 c h e c k E q u a l ( ' 1 9 7 0 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( 0 ,   d t . g e t T i m e ( ) ) ; 
                 c h e c k E q u a l ( ' 1 9 7 0 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   1 1 ,   2 1 ,   1 1 ,   3 5 ,   1 0 ,   4 0 0 ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 1 - 2 1 T 1 1 : 3 5 : 1 0 . 4 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   1 1 ,   2 1 ,   1 1 ,   3 5 ,   1 0 ,   4 0 0 ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 0 ,   1 0 ,   2 1 ,   1 1 ,   3 5 ,   1 0 ,   4 0 0 ) . t o I S O S t r i n g ( ) ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   1 1 ,   2 1 ,   1 1 ,   3 5 ,   1 0 ,   4 0 0 ,   f a l s e ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( D a t e . U T C ( 2 0 2 0 ,   1 0 ,   2 1 ,   1 1 ,   3 5 ,   1 0 ,   4 0 0 ) ) . t o I S O S t r i n g ( ) ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 1 T 0 0 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 0 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 5 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   6 ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 5 : 0 6 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   6 ,   7 ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   6 ,   7 ,   t r u e ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   6 ,   7 ,   f a l s e ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   6 ,   7 ,   t r u e ) ; 
 
                 i f   ( d t . g e t T i m e z o n e O f f s e t ( )   = = =   - 5 4 0 )   { 
                     c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 2 T 1 9 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 }   / /   z e r o 
 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   0 ,   3 ,   4 ,   5 ,   6 ,   7 ,   f a l s e ) ; 
                 c h e c k E q u a l ( ' 2 0 1 9 - 1 2 - 0 3 T 0 4 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   3 ,   0 ,   4 ,   5 ,   6 ,   7 ,   f a l s e ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 2 9 T 0 4 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ;   / /   m i n u s 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   - 1 ,   3 ,   4 ,   5 ,   6 ,   7 ,   f a l s e ) ; 
                 c h e c k E q u a l ( ' 2 0 1 9 - 1 1 - 0 3 T 0 4 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   3 ,   - 1 ,   4 ,   5 ,   6 ,   7 ,   f a l s e ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 2 8 T 0 4 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   3 ,   4 ,   - 2 ,   5 ,   6 ,   7 ,   f a l s e ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 3 - 0 3 T 2 2 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( { 
                     y e a r :   2 0 2 0 
                 } ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( { 
                     y e a r :   2 0 2 0 , 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 1 - 0 1 T 0 0 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( { 
                     y e a r :   2 0 2 0 , 
                     m o n t h :   2 , 
                     h o u r :   1 3 , 
                     s e c o n d :   5 9 , 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 1 T 1 3 : 0 0 : 5 9 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( { 
                     y e a r :   2 0 2 0 , 
                     m o n t h :   2 , 
                     h o u r :   1 3 , 
                     s e c o n d :   5 9 
                 } ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 1 T 1 3 : 0 0 : 5 9 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   { 
                     h o u r :   1 3 , 
                     s e c o n d :   5 9 
                 } ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 1 - 0 1 T 1 3 : 0 0 : 5 9 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   { 
                     h o u r :   1 3 , 
                     s e c o n d :   5 9 
                 } ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 1 T 1 3 : 0 0 : 5 9 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   { 
                     m i n u t e :   1 3 , 
                     s e c o n d :   5 9 
                 } ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 0 : 1 3 : 5 9 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 0 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   { 
                     m i n u t e :   1 3 , 
                     s e c o n d :   5 9 
                 } ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 1 3 : 5 9 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   { 
                     s e c o n d :   5 9 
                 } ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 5 : 5 9 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   { 
                     s e c o n d :   5 9 
                 } ) ; 
                 d t . s e t M i n u t e s ( d t . g e t M i n u t e s ( )   -   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 5 : 5 9 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   6 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 5 : 0 6 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   6 ,   7 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 0 2 - 0 3 T 0 4 : 0 5 : 0 6 . 0 0 7 Z ' ,   d t . t o I S O S t r i n g ( ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   6 ,   7 ,   { 
                         i s L o c a l :   f a l s e 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   D a t e t i m e ( 2 0 2 0 ,   2 ,   3 ,   4 ,   5 ,   6 ,   7 ,   { 
                         i s L o c a l :   1 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   D a t e t i m e ( 2 0 2 0 ,   ' 2 ' ,   3 ,   4 ,   5 ,   6 ,   7 ,   { 
                         i s L o c a l :   t r u e 
                     } ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d a t e T o S t r i n g   =   f u n c t i o n   t e s t _ d a t e T o S t r i n g ( )   { 
             i t ( ' t e s t _ d a t e T o S t r i n g ' ,   f u n c t i o n   ( )   { 
                 v a r   d t   =   D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ,   9 ,   5 ,   8 ,   4 5 ) ; 
                 c h e c k E q u a l ( ' 2 0 0 1 / 0 2 / 0 4   0 9 : 0 5 : 0 8 . 0 4 5 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S S S ' ) ) ; 
                 c h e c k E q u a l ( ' 2 0 0 1 / 0 2 / 0 4   0 9 : 0 5 : 0 8 . 0 4 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S S ' ) ) ; 
                 c h e c k E q u a l ( ' 2 0 0 1 / 0 2 / 0 4   0 9 : 0 5 : 0 8 . 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   9 : 5 : 8   a m ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   a a ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   9 : 5 : 8   a ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   a ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   9 : 5 : 8   A M ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   A A ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   9 : 5 : 8   A ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   A ' ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ,   1 6 ,   5 ,   8 ,   4 5 ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   p m ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   a a ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   p ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   a ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   P M ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   A A ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   P ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   A ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   S u n ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   d d d ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   S u n d a y ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   d d d d ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   F e b ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   M M M ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   F e b . ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   M M M M ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   F e b r u a r y ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y / M / D   H : m : s   M M M M M ' ) ) ;   / /   q u o t e 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   6 ) ; 
                 c h e c k E q u a l ( ' Y Y Y Y M M D D   =   2 0 2 1 0 1 0 6 ' ,   d a t e T o S t r i n g ( d t ,   ' " Y Y Y Y M M D D   =   " Y Y Y Y M M D D ' ) ) ; 
                 c h e c k E q u a l ( ' Y Y Y Y M M D D   =   2 0 2 1 0 1 0 6 ' ,   d a t e T o S t r i n g ( d t ,   " ' Y Y Y Y M M D D   =   ' Y Y Y Y M M D D " ) ) ;   / /   t i m e z o n e 
 
                 v a r   _ m i n u t e s T o T e x t s 3   =   m i n u t e s T o T e x t s ( - 1   *   d t . g e t T i m e z o n e O f f s e t ( ) ) , 
                         _ m i n u t e s T o T e x t s 4   =   _ s l i c e d T o A r r a y ( _ m i n u t e s T o T e x t s 3 ,   3 ) , 
                         s   =   _ m i n u t e s T o T e x t s 4 [ 0 ] , 
                         h   =   _ m i n u t e s T o T e x t s 4 [ 1 ] , 
                         m   =   _ m i n u t e s T o T e x t s 4 [ 2 ] ;   / /   ' + 0 9 0 0 '   e t c 
 
 
                 c h e c k E q u a l ( s   +   h   +   ' : '   +   m ,   d a t e T o S t r i n g ( d t ,   ' Z ' ) ) ; 
                 c h e c k E q u a l ( s   +   h   +   m ,   d a t e T o S t r i n g ( d t ,   ' Z Z ' ) ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   d t . t o S t r i n g ( ) . i n d e x O f ( ' U T C '   +   d a t e T o S t r i n g ( d t ,   ' Z Z ' ) )   ! = =   - 1 ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   d t . t o S t r i n g ( ) . i n d e x O f ( ' G M T '   +   d a t e T o S t r i n g ( d t ,   ' Z Z ' ) )   ! = =   - 1 ) ; 
                 } 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( 0 ,   d t . t o S t r i n g ( ) . i n d e x O f ( d a t e T o S t r i n g ( d t ,   ' d d d   M M M   D D   Y Y Y Y   H H : m m : s s   " G M T " Z Z ' ) ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( 0 ,   d t . t o S t r i n g ( ) . i n d e x O f ( d a t e T o S t r i n g ( d t ,   ' d d d   M M M   D   H H : m m : s s   " U T C " Z Z   Y Y Y Y ' ) ) ) ; 
                 }   / /   e x c e p t i o n 
                 / /   q u o t e 
 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   6 ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     d a t e T o S t r i n g ( d t ,   ' " Y Y Y Y M M D D   =   " Y Y Y Y M M D D ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     d a t e T o S t r i n g ( d t ,   ' " Y Y Y Y " M M D D   =   " Y Y Y Y M M D D ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d a t e T o S t r i n g _ M o m e m t L i k e   =   f u n c t i o n   t e s t _ d a t e T o S t r i n g _ M o m e m t L i k e ( )   { 
             i t ( ' t e s t _ d a t e T o S t r i n g _ M o m e m t L i k e ' ,   f u n c t i o n   ( )   { 
                 v a r   d a t e T o S t r i n g M o m e n t   =   f u n c t i o n   d a t e T o S t r i n g M o m e n t ( d a t e ,   f o r m a t )   { 
                     r e t u r n   d a t e T o S t r i n g ( d a t e ,   f o r m a t ,   u n d e f i n e d ,   d a t e T o S t r i n g . f u n c . M o m e n t L i k e ( ) ) ; 
                 } ; 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ,   9 ,   5 ,   8 ,   4 5 ) ; 
                 c h e c k E q u a l ( ' 2 0 0 1 / 0 2 / 0 4   0 9 : 0 5 : 0 8 . 0 4 5 ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S S S ' ) ) ; 
                 c h e c k E q u a l ( ' 2 0 0 1 / 0 2 / 0 4   0 9 : 0 5 : 0 8 . 0 4 ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S S ' ) ) ; 
                 c h e c k E q u a l ( ' 2 0 0 1 / 0 2 / 0 4   0 9 : 0 5 : 0 8 . 0 ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   9 : 5 : 8   a m ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y / M / D   H : m : s   a ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   9 : 5 : 8   A M ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y / M / D   H : m : s   A ' ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ,   1 6 ,   5 ,   8 ,   4 5 ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   p m ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y / M / D   H : m : s   a ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   P M ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y / M / D   H : m : s   A ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   S u n ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y / M / D   H : m : s   d d d ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   S u n d a y ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y / M / D   H : m : s   d d d d ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   F e b ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y / M / D   H : m : s   M M M ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 / 2 / 4   1 6 : 5 : 8   F e b r u a r y ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Y Y / M / D   H : m : s   M M M M ' ) ) ;   / /   q u o t e 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   6 ) ; 
                 c h e c k E q u a l ( ' Y Y Y Y M M D D   =   2 0 2 1 0 1 0 6 ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' " Y Y Y Y M M D D   =   " Y Y Y Y M M D D ' ) ) ; 
                 c h e c k E q u a l ( ' Y Y Y Y M M D D   =   2 0 2 1 0 1 0 6 ' ,   d a t e T o S t r i n g M o m e n t ( d t ,   " ' Y Y Y Y M M D D   =   ' Y Y Y Y M M D D " ) ) ;   / /   t i m e z o n e 
 
                 v a r   _ m i n u t e s T o T e x t s 5   =   m i n u t e s T o T e x t s ( - 1   *   d t . g e t T i m e z o n e O f f s e t ( ) ) , 
                         _ m i n u t e s T o T e x t s 6   =   _ s l i c e d T o A r r a y ( _ m i n u t e s T o T e x t s 5 ,   3 ) , 
                         s   =   _ m i n u t e s T o T e x t s 6 [ 0 ] , 
                         h   =   _ m i n u t e s T o T e x t s 6 [ 1 ] , 
                         m   =   _ m i n u t e s T o T e x t s 6 [ 2 ] ; 
 
                 c h e c k E q u a l ( s   +   h   +   ' : '   +   m ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Z ' ) ) ; 
                 c h e c k E q u a l ( s   +   h   +   m ,   d a t e T o S t r i n g M o m e n t ( d t ,   ' Z Z ' ) ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   d t . t o S t r i n g ( ) . i n d e x O f ( ' U T C '   +   d a t e T o S t r i n g M o m e n t ( d t ,   ' Z Z ' ) )   ! = =   - 1 ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   d t . t o S t r i n g ( ) . i n d e x O f ( ' G M T '   +   d a t e T o S t r i n g M o m e n t ( d t ,   ' Z Z ' ) )   ! = =   - 1 ) ; 
                 } 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( 0 ,   d t . t o S t r i n g ( ) . i n d e x O f ( d a t e T o S t r i n g M o m e n t ( d t ,   ' d d d   M M M   D D   Y Y Y Y   H H : m m : s s   " G M T " Z Z ' ) ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( 0 ,   d t . t o S t r i n g ( ) . i n d e x O f ( d a t e T o S t r i n g M o m e n t ( d t ,   ' d d d   M M M   D   H H : m m : s s   " U T C " Z Z   Y Y Y Y ' ) ) ) ; 
                 }   / /   e x c e p t i o n 
                 / /   q u o t e 
 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   6 ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     d a t e T o S t r i n g M o m e n t ( d t ,   ' " Y Y Y Y M M D D   =   " Y Y Y Y M M D D ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     d a t e T o S t r i n g M o m e n t ( d t ,   ' " Y Y Y Y " M M D D   =   " Y Y Y Y M M D D ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d a t e T o S t r i n g _ t i m e z o n e O f f s e t   =   f u n c t i o n   t e s t _ d a t e T o S t r i n g _ t i m e z o n e O f f s e t ( )   { 
             i t ( ' t e s t _ d a t e T o S t r i n g ' ,   f u n c t i o n   ( )   { 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   6 ,   1 ,   0 ,   2 0 ,   3 0 ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 6 / 0 1   0 0 : 2 0 : 3 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s ' ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 6 / 0 1   0 0 : 2 0 : 3 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s ' ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 6 / 0 1   0 0 : 2 0 : 3 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s ' ,   d t . g e t T i m e z o n e O f f s e t ( ) ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   6 ,   1 ,   0 ,   2 0 ,   3 0 ,   0 ,   f a l s e ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 6 / 0 1   0 9 : 2 0 : 3 0   + 0 9 : 0 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ,   - 1   *   9   *   6 0 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 6 / 0 1   0 8 : 2 0 : 3 0   + 0 8 0 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z Z ' ,   - 1   *   8   *   6 0 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 6 / 0 1   0 7 : 2 0 : 3 0   + 0 7 : 0 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ,   - 1   *   7   *   6 0 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 6 / 0 1   0 1 : 2 0 : 3 0   + 0 1 : 0 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ,   - 1   *   1   *   6 0 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 6 / 0 1   0 0 : 2 0 : 3 0   + 0 0 : 0 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 5 / 3 1   2 3 : 2 0 : 3 0   - 0 1 : 0 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ,   1   *   6 0 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 5 / 3 1   1 2 : 2 0 : 3 0   - 1 2 : 0 0 ' ,   d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ,   1 2   *   6 0 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 6 / 0 1   0 0 : 2 0 : 3 0   Z ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ) ) ;   / /   q u o t e 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   6 ) ; 
                 c h e c k E q u a l ( ' Y Y Y Y M M D D   =   2 0 2 1 0 1 0 6 ' ,   d a t e T o S t r i n g ( d t ,   ' " Y Y Y Y M M D D   =   " Y Y Y Y M M D D ' ,   d t . g e t T i m e z o n e O f f s e t ( ) ) ) ; 
                 c h e c k E q u a l ( ' Y Y Y Y M M D D   =   2 0 2 1 0 1 0 6 ' ,   d a t e T o S t r i n g ( d t ,   " ' Y Y Y Y M M D D   =   ' Y Y Y Y M M D D " ,   d t . g e t T i m e z o n e O f f s e t ( ) ) ) ;   / /   e x c e p t i o n 
                 / /   q u o t e 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   6 ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     d a t e T o S t r i n g ( d t ,   ' " Y Y Y Y M M D D   =   " Y Y Y Y M M D D ' ,   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     d a t e T o S t r i n g ( d t ,   ' " Y Y Y Y " M M D D   =   " Y Y Y Y M M D D ' ,   d t . g e t T i m e z o n e O f f s e t ( ) ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d a t e T o S t r i n g U T C   =   f u n c t i o n   t e s t _ d a t e T o S t r i n g U T C ( )   { 
             i t ( ' t e s t _ d a t e T o S t r i n g U T C ' ,   f u n c t i o n   ( )   { 
                 v a r   d t   =   n e w   D a t e ( D a t e . U T C ( 2 0 2 1 ,   1 ,   3 ,   4 ,   5 ,   6 ,   7 8 9 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 2 / 0 3   0 4 : 0 5 : 0 6 . 7 8 9 ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S S S ' ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 2 / 0 3   0 4 : 0 5 : 0 6 . 7 8 ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S S ' ) ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 / 0 2 / 0 3   0 4 : 0 5 : 0 6 . 7 ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S ' ) ) ; 
                 v a r   d t   =   n e w   D a t e ( D a t e . U T C ( 2 0 2 1 ,   4 ,   3 1 ,   1 3 ,   2 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 2 1 / 5 / 3 1   1 : 2 : 3   p m ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y / M / D   h : m : s   a a ' ) ) ; 
                 c h e c k E q u a l ( ' 2 1 / 5 / 3 1   1 3 : 2 : 3 ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y / M / D   H : m : s ' ) ) ; 
                 v a r   d t   =   n e w   D a t e ( 2 0 2 1 ,   4 ,   3 1 ,   9 ,   1 0 ,   1 1 ) ; 
                 c h e c k E q u a l ( ' 2 1 / 5 / 3 1   0 : 1 0 : 1 1 ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y / M / D   h : m : s ' ) ) ;   / /   t i m e z o n e 
 
                 v a r   d t   =   n e w   D a t e ( 2 0 2 1 ,   4 ,   3 1 ,   9 ,   1 0 ,   1 1 ) ; 
                 c h e c k E q u a l ( ' 2 1 / 5 / 3 1   0 : 1 0 : 1 1 ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y / M / D   h : m : s ' ) ) ; 
                 c h e c k E q u a l ( ' 2 1 / 5 / 3 1   0 : 1 0 : 1 1   Z ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y / M / D   h : m : s   Z ' ) ) ; 
                 c h e c k E q u a l ( ' 2 1 / 5 / 3 1   0 : 1 0 : 1 1   Z ' ,   d a t e T o S t r i n g U T C ( d t ,   ' Y Y / M / D   h : m : s   Z Z ' ) ) ;   / /   q u o t e 
 
                 v a r   d t   =   n e w   D a t e ( D a t e . U T C ( 2 0 2 1 ,   4 ,   3 1 ) ) ; 
                 c h e c k E q u a l ( ' Y Y Y Y M M D D   =   2 0 2 1 0 5 3 1 ' ,   d a t e T o S t r i n g U T C ( d t ,   ' " Y Y Y Y M M D D   =   " Y Y Y Y M M D D ' ) ) ; 
                 c h e c k E q u a l ( ' Y Y Y Y M M D D   =   2 0 2 1 0 5 3 1 ' ,   d a t e T o S t r i n g U T C ( d t ,   " ' Y Y Y Y M M D D   =   ' Y Y Y Y M M D D " ) ) ;   / /   e x c e p t i o n 
                 / /   q u o t e 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   6 ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     d a t e T o S t r i n g U T C ( d t ,   ' " Y Y Y Y M M D D   =   " Y Y Y Y M M D D ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     d a t e T o S t r i n g U T C ( d t ,   ' " Y Y Y Y " M M D D   =   " Y Y Y Y M M D D ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s t r i n g T o D a t e   =   f u n c t i o n   t e s t _ s t r i n g T o D a t e ( )   { 
             i t ( ' t e s t _ s t r i n g T o D a t e ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   4 ,   1 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 5 / 0 1 ' ,   ' Y Y Y Y / M M / D D ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   3 ,   3 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 4 / 3 0 ' ,   ' Y Y Y Y / M M / D D ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( ' ' ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 5 / 0 0 ' ,   ' Y Y Y Y / M M / D D ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( ' ' ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 4 / 3 1 ' ,   ' Y Y Y Y / M M / D D ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( ' ' ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 5 / 0 1 ' ,   ' Y Y Y Y / M M / D D ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   4 ,   1 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 5 / 0 1 ' ,   ' Y Y Y Y / M / D D ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( ' ' ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 5 / 0 1 ' ,   ' Y Y Y Y / M / D D ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   1 0 ,   1 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 1 1 / 0 1 ' ,   ' Y Y Y Y / M / D D ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   1 0 ,   1 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 1 1 / 0 1 ' ,   ' Y Y Y Y / M M / D D ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 0 ,   1 1 ,   1 ) ,   s t r i n g T o D a t e ( ' 1 - 1 2 - 2 0 ' ,   ' D - M - Y Y ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 0 ,   1 1 ,   1 ) ,   s t r i n g T o D a t e ( ' 1 2 - 1 - 2 0 ' ,   ' M - D - Y Y ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 0 ,   0 ,   2 1 ) ,   s t r i n g T o D a t e ( ' 2 1 - 1 - 2 0 ' ,   ' D - M - Y Y ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 0 ,   0 ,   2 1 ) ,   s t r i n g T o D a t e ( ' 1 - 2 1 - 2 0 ' ,   ' M - D - Y Y ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 0 ,   0 ,   1 2 ) ,   s t r i n g T o D a t e ( ' 1 - 1 2 - 2 0 ' ,   ' M - D - Y Y ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( ' ' ) ,   s t r i n g T o D a t e ( ' 2 1 - 1 - 2 0 ' ,   ' M - D - Y Y ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   4 ,   1 ,   3 ,   4 ,   5 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 5 / 0 1   0 3 : 0 4 : 0 5 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   4 ,   1 ,   1 1 ,   8 ,   9 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 5 / 0 1   1 1 : 0 8 : 0 9 ( S a t ) ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s ( d d d ) ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( ' ' ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 5 / 0 1   1 1 : 0 8 : 0 9 ( M o n ) ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s ( d d d ) ' ) ) ;   / /   t e s t C o u n t e r ( ) ; 
 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ,   9 ,   5 ,   8 ,   4 5 ) ,   s t r i n g T o D a t e ( ' 2 0 0 1 / 0 2 / 0 4   0 9 : 0 5 : 0 8 . 0 4 5 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S S S ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ,   9 ,   5 ,   8 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 0 1 / 0 2 / 0 4   0 9 : 0 5 : 0 8 . 0 4 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S S ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ,   9 ,   5 ,   8 ,   0 ) ,   s t r i n g T o D a t e ( ' 2 0 0 1 / 0 2 / 0 4   0 9 : 0 5 : 0 8 . 0 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s . S ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ) ,   s t r i n g T o D a t e ( ' S u n ,   0 4   F e b   2 0 0 1 ' ,   ' d d d ,   D D   M M M   Y Y Y Y ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ) ,   s t r i n g T o D a t e ( ' [ S u n ] | / \ \   0 4   F e b   2 0 0 1 ' ,   ' [ d d d ] | / \ \   D D   M M M   Y Y Y Y ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 0 1 ,   2 ,   4 ) ,   s t r i n g T o D a t e ( ' S u n d a y ,   0 4   F e b   2 0 0 1 ' ,   ' d d d d ,   D D   M M M   Y Y Y Y ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 0 1 ,   9 ,   4 ) ,   s t r i n g T o D a t e ( ' S e p t e m b e r 4   2 0 0 1 ' ,   ' M M M M M D   Y Y Y Y ' ) ) ;   / /   a m   p m 
 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 0 5 2 6   8   5 9   4 0   p ' ,   d a t e T o S t r i n g ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   2 0 ,   5 9 ,   4 0 ) ,   ' Y Y Y Y M M D D   h   m m   s s   a ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   8 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   8   5 9   4 0   a ' ,   ' Y Y Y Y M M D D   h   m m   s s   a ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   8 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   8   5 9   4 0   A M ' ,   ' Y Y Y Y M M D D   h   m m   s s   A A ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   2 0 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   8   5 9   4 0   p ' ,   ' Y Y Y Y M M D D   h   m m   s s   a ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   2 0 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   0 8   5 9   4 0   P ' ,   ' Y Y Y Y M M D D   h h   m m   s s   A ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   2 3 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   1 1   5 9   4 0   P M ' ,   ' Y Y Y Y M M D D   h   m m   s s   A A ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   2 3 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   1 1   5 9   4 0   p m ' ,   ' Y Y Y Y M M D D   h h   m m   s s   a a ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   2 3 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   1 1   5 9   4 0   p   p   p ' ,   ' Y Y Y Y M M D D   h h   m m   s s   a   a   a ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   8 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   8   5 9   4 0 ' ,   ' Y Y Y Y M M D D   h   m m   s s ' ) ) ;   / /   c h e c k N o t E q u a l ( 
                 / /       D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   1 3 ,   5 9 ,   4 0 ) , 
                 / /       s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   1 3   5 9   4 0 ' ,   ' Y Y Y Y M M D D   h   m m   s s ' ) , 
                 / /   ) ; 
 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   1 3 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   1   5 9   4 0   p ' ,   ' Y Y Y Y M M D D   h   m m   s s   a ' ) ) ; 
                 c h e c k E q u a l ( D a t e t i m e ( 2 0 2 1 ,   5 ,   2 6 ,   1 3 ,   5 9 ,   4 0 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 0 5 2 6   1 3   5 9   4 0 ' ,   ' Y Y Y Y M M D D   H   m m   s s ' ) ) ;   / /   t i m e z o n e 
 
                 t e s t C o u n t e r ( ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   6 ,   1 ,   2 3 ,   4 5 ,   6 ) ; 
 
                 v a r   _ m i n u t e s T o T e x t s 7   =   m i n u t e s T o T e x t s ( - 1   *   d t . g e t T i m e z o n e O f f s e t ( ) ) , 
                         _ m i n u t e s T o T e x t s 8   =   _ s l i c e d T o A r r a y ( _ m i n u t e s T o T e x t s 7 ,   3 ) , 
                         s   =   _ m i n u t e s T o T e x t s 8 [ 0 ] , 
                         h   =   _ m i n u t e s T o T e x t s 8 [ 1 ] , 
                         m   =   _ m i n u t e s T o T e x t s 8 [ 2 ] ; 
 
                 v a r   t i m e z o n e T e x t   =   s   +   h   +   ' : '   +   m ; 
                 c h e c k E q u a l ( d a t e T o S t r i n g ( d t ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ) ,   ' 2 0 2 1 / 0 6 / 0 1   2 3 : 4 5 : 0 6   '   +   t i m e z o n e T e x t ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   6 ,   1 ,   0 ,   1 2 ,   3 4 ,   0 ,   f a l s e ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 6 / 0 1   0 9 : 1 2 : 3 4   + 0 9 : 0 0 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ) ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 6 / 0 1   0 8 : 1 2 : 3 4   + 0 8 : 0 0 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ) ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 6 / 0 1   0 0 : 1 2 : 3 4   + 0 0 : 0 0 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ) ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 5 / 3 1   2 3 : 1 2 : 3 4   - 0 1 : 0 0 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ) ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 6 / 0 1   0 0 : 1 2 : 3 4   Z ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z ' ) ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 6 / 0 1   0 9 : 1 2 : 3 4   + 0 9 0 0 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z Z ' ) ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 6 / 0 1   0 8 : 1 2 : 3 4   + 0 8 0 0 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z Z ' ) ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 6 / 0 1   0 0 : 1 2 : 3 4   + 0 0 0 0 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z Z ' ) ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 5 / 3 1   2 3 : 1 2 : 3 4   - 0 1 0 0 ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z Z ' ) ) ; 
                 c h e c k E q u a l ( d t ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 6 / 0 1   0 0 : 1 2 : 3 4   Z ' ,   ' Y Y Y Y / M M / D D   H H : m m : s s   Z Z ' ) ) ;   / /   i n i t 
 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   0 ,   1 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 ' ,   ' Y Y Y Y ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   5 ,   1 ) ,   s t r i n g T o D a t e ( ' 2 0 2 1 / 0 6 ' ,   ' Y Y Y Y / M M ' ) ) ; 
                 c h e c k E q u a l ( n e w   D a t e ( 2 0 2 1 ,   5 ,   2 ) ,   s t r i n g T o D a t e ( ' 0 6 / 0 2 ' ,   ' M M / D D ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d a y O f W e e k   =   f u n c t i o n   t e s t _ d a y O f W e e k ( )   { 
             i t ( ' t e s t _ d a y O f W e e k ' ,   f u n c t i o n   ( )   { 
                 i f   ( n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( )   ! = =   - 5 4 0 )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k ( d t ,   t r u e ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' F r i ' ,   d a y O f W e e k ( d t ,   f a l s e ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k ( d t ,   f a l s e ) ) ;   / /   O b j e c t   P a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k ( d t ,   { 
                     i s L o c a l :   t r u e 
                 } ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' F r i ' ,   d a y O f W e e k ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d a y O f W e e k E n g l i s h S h o r t   =   f u n c t i o n   t e s t _ d a y O f W e e k E n g l i s h S h o r t ( )   { 
             i t ( ' t e s t _ d a y O f W e e k E n g l i s h S h o r t ' ,   f u n c t i o n   ( )   { 
                 i f   ( n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( )   ! = =   - 5 4 0 )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k E n g l i s h S h o r t ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k E n g l i s h S h o r t ( d t ,   t r u e ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' F r i ' ,   d a y O f W e e k E n g l i s h S h o r t ( d t ,   f a l s e ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k E n g l i s h S h o r t ( d t ,   f a l s e ) ) ;   / /   O b j e c t   P a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k E n g l i s h S h o r t ( d t ,   { 
                     i s L o c a l :   t r u e 
                 } ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' F r i ' ,   d a y O f W e e k E n g l i s h S h o r t ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t ' ,   d a y O f W e e k E n g l i s h S h o r t ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d a y O f W e e k E n g l i s h L o n g   =   f u n c t i o n   t e s t _ d a y O f W e e k E n g l i s h L o n g ( )   { 
             i t ( ' t e s t _ d a y O f W e e k E n g l i s h L o n g ' ,   f u n c t i o n   ( )   { 
                 i f   ( n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( )   ! = =   - 5 4 0 )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ) ; 
                 c h e c k E q u a l ( ' S a t u r d a y ' ,   d a y O f W e e k E n g l i s h L o n g ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t u r d a y ' ,   d a y O f W e e k E n g l i s h L o n g ( d t ,   t r u e ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' F r i d a y ' ,   d a y O f W e e k E n g l i s h L o n g ( d t ,   f a l s e ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t u r d a y ' ,   d a y O f W e e k E n g l i s h L o n g ( d t ,   f a l s e ) ) ;   / /   O b j e c t   P a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t u r d a y ' ,   d a y O f W e e k E n g l i s h L o n g ( d t ,   { 
                     i s L o c a l :   t r u e 
                 } ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' F r i d a y ' ,   d a y O f W e e k E n g l i s h L o n g ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' S a t u r d a y ' ,   d a y O f W e e k E n g l i s h L o n g ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d a y O f W e e k J a p a n e s e S h o r t   =   f u n c t i o n   t e s t _ d a y O f W e e k J a p a n e s e S h o r t ( )   { 
             i t ( ' t e s t _ d a y O f W e e k J a p a n e s e S h o r t ' ,   f u n c t i o n   ( )   { 
                 i f   ( n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( )   ! = =   - 5 4 0 )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ) ; 
                 c h e c k E q u a l ( ' W' ,   d a y O f W e e k J a p a n e s e S h o r t ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' W' ,   d a y O f W e e k J a p a n e s e S h o r t ( d t ,   t r u e ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' ё' ,   d a y O f W e e k J a p a n e s e S h o r t ( d t ,   f a l s e ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' W' ,   d a y O f W e e k J a p a n e s e S h o r t ( d t ,   f a l s e ) ) ;   / /   O b j e c t   P a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ) ; 
                 c h e c k E q u a l ( ' W' ,   d a y O f W e e k J a p a n e s e S h o r t ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' W' ,   d a y O f W e e k J a p a n e s e S h o r t ( d t ,   { 
                     i s L o c a l :   t r u e 
                 } ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' ё' ,   d a y O f W e e k J a p a n e s e S h o r t ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' W' ,   d a y O f W e e k J a p a n e s e S h o r t ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d a y O f W e e k J a p a n e s e L o n g   =   f u n c t i o n   t e s t _ d a y O f W e e k J a p a n e s e L o n g ( )   { 
             i t ( ' t e s t _ d a y O f W e e k J a p a n e s e L o n g ' ,   f u n c t i o n   ( )   { 
                 i f   ( n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( )   ! = =   - 5 4 0 )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ) ; 
                 c h e c k E q u a l ( ' W�f�e' ,   d a y O f W e e k J a p a n e s e L o n g ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' W�f�e' ,   d a y O f W e e k J a p a n e s e L o n g ( d t ,   t r u e ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' ё�f�e' ,   d a y O f W e e k J a p a n e s e L o n g ( d t ,   f a l s e ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' W�f�e' ,   d a y O f W e e k J a p a n e s e L o n g ( d t ,   f a l s e ) ) ;   / /   O b j e c t   P a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ) ; 
                 c h e c k E q u a l ( ' W�f�e' ,   d a y O f W e e k J a p a n e s e L o n g ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 8 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' W�f�e' ,   d a y O f W e e k J a p a n e s e L o n g ( d t ,   { 
                     i s L o c a l :   t r u e 
                 } ) ) ;   / /   l o c a l   S a t   U T C   F r i 
 
                 c h e c k E q u a l ( ' ё�f�e' ,   d a y O f W e e k J a p a n e s e L o n g ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ;   / /   U T C   S a t 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   9 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 9 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' W�f�e' ,   d a y O f W e e k J a p a n e s e L o n g ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ n a m e O f M o n t h   =   f u n c t i o n   t e s t _ n a m e O f M o n t h ( )   { 
             i t ( ' t e s t _ n a m e O f M o n t h ' ,   f u n c t i o n   ( )   { 
                 i f   ( n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( )   ! = =   - 5 4 0 )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 2 - 3 1 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h ( d t ,   t r u e ) ) ;   / /   l o c a l   J a n   U T C   D e c 
 
                 c h e c k E q u a l ( ' D e c ' ,   n a m e O f M o n t h ( d t ,   f a l s e ) ) ;   / /   U T C 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 1 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h ( d t ,   f a l s e ) ) ;   / /   O b j e c t   P a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 2 - 3 1 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h ( d t ,   { 
                     i s L o c a l :   t r u e 
                 } ) ) ;   / /   l o c a l   J a n   U T C   D e c 
 
                 c h e c k E q u a l ( ' D e c ' ,   n a m e O f M o n t h ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ;   / /   U T C 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 1 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ n a m e O f M o n t h E n g l i s h C h a r 3   =   f u n c t i o n   t e s t _ n a m e O f M o n t h E n g l i s h C h a r 3 ( )   { 
             i t ( ' t e s t _ n a m e O f M o n t h E n g l i s h C h a r 3 ' ,   f u n c t i o n   ( )   { 
                 i f   ( n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( )   ! = =   - 5 4 0 )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h E n g l i s h C h a r 3 ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 2 - 3 1 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h E n g l i s h C h a r 3 ( d t ,   t r u e ) ) ;   / /   l o c a l   J a n   U T C   D e c 
 
                 c h e c k E q u a l ( ' D e c ' ,   n a m e O f M o n t h E n g l i s h C h a r 3 ( d t ,   f a l s e ) ) ;   / /   U T C 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 1 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h E n g l i s h C h a r 3 ( d t ,   f a l s e ) ) ;   / /   O b j e c t   P a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 2 - 3 1 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h E n g l i s h C h a r 3 ( d t ,   { 
                     i s L o c a l :   t r u e 
                 } ) ) ;   / /   l o c a l   J a n   U T C   D e c 
 
                 c h e c k E q u a l ( ' D e c ' ,   n a m e O f M o n t h E n g l i s h C h a r 3 ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ;   / /   U T C 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 1 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n ' ,   n a m e O f M o n t h E n g l i s h C h a r 3 ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ n a m e O f M o n t h E n g l i s h C h a r 4   =   f u n c t i o n   t e s t _ n a m e O f M o n t h E n g l i s h C h a r 4 ( )   { 
             i t ( ' t e s t _ n a m e O f M o n t h E n g l i s h C h a r 4 ' ,   f u n c t i o n   ( )   { 
                 i f   ( n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( )   ! = =   - 5 4 0 )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ) ; 
                 c h e c k E q u a l ( ' J a n . ' ,   n a m e O f M o n t h E n g l i s h C h a r 4 ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 2 - 3 1 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n . ' ,   n a m e O f M o n t h E n g l i s h C h a r 4 ( d t ,   t r u e ) ) ;   / /   l o c a l   J a n   U T C   D e c 
 
                 c h e c k E q u a l ( ' D e c . ' ,   n a m e O f M o n t h E n g l i s h C h a r 4 ( d t ,   f a l s e ) ) ;   / /   U T C 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 1 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n . ' ,   n a m e O f M o n t h E n g l i s h C h a r 4 ( d t ,   f a l s e ) ) ;   / /   O b j e c t   P a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 2 - 3 1 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n . ' ,   n a m e O f M o n t h E n g l i s h C h a r 4 ( d t ,   { 
                     i s L o c a l :   t r u e 
                 } ) ) ;   / /   l o c a l   J a n   U T C   D e c 
 
                 c h e c k E q u a l ( ' D e c . ' ,   n a m e O f M o n t h E n g l i s h C h a r 4 ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ;   / /   U T C 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 1 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n . ' ,   n a m e O f M o n t h E n g l i s h C h a r 4 ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ n a m e O f M o n t h E n g l i s h L o n g   =   f u n c t i o n   t e s t _ n a m e O f M o n t h E n g l i s h L o n g ( )   { 
             i t ( ' t e s t _ n a m e O f M o n t h E n g l i s h L o n g ' ,   f u n c t i o n   ( )   { 
                 i f   ( n e w   D a t e ( ) . g e t T i m e z o n e O f f s e t ( )   ! = =   - 5 4 0 )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ) ; 
                 c h e c k E q u a l ( ' J a n u a r y ' ,   n a m e O f M o n t h E n g l i s h L o n g ( d t ) ) ; 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 2 - 3 1 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n u a r y ' ,   n a m e O f M o n t h E n g l i s h L o n g ( d t ,   t r u e ) ) ;   / /   l o c a l   J a n   U T C   D e c 
 
                 c h e c k E q u a l ( ' D e c e m b e r ' ,   n a m e O f M o n t h E n g l i s h L o n g ( d t ,   f a l s e ) ) ;   / /   U T C 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 1 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n u a r y ' ,   n a m e O f M o n t h E n g l i s h L o n g ( d t ,   f a l s e ) ) ;   / /   O b j e c t   P a r a m e t e r 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   t r u e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 0 - 1 2 - 3 1 T 2 3 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n u a r y ' ,   n a m e O f M o n t h E n g l i s h L o n g ( d t ,   { 
                     i s L o c a l :   t r u e 
                 } ) ) ;   / /   l o c a l   J a n   U T C   D e c 
 
                 c h e c k E q u a l ( ' D e c e m b e r ' ,   n a m e O f M o n t h E n g l i s h L o n g ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ;   / /   U T C 
 
                 v a r   d t   =   D a t e t i m e ( 2 0 2 1 ,   1 ,   1 ,   8 ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ; 
                 c h e c k E q u a l ( ' 2 0 2 1 - 0 1 - 0 1 T 0 8 : 0 0 : 0 0 . 0 0 0 Z ' ,   d t . t o I S O S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' J a n u a r y ' ,   n a m e O f M o n t h E n g l i s h L o n g ( d t ,   { 
                     i s L o c a l :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ m i n u t e s T o T e x t s   =   f u n c t i o n   t e s t _ m i n u t e s T o T e x t s ( )   { 
             i t ( ' t e s t _ m i n u t e s T o T e x t s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' + 0 9 0 0 ' ,   m i n u t e s T o T e x t s ( 5 4 0 ) . j o i n ( ' ' ) ) ; 
                 c h e c k E q u a l ( ' - : 0 9 : 0 0 ' ,   m i n u t e s T o T e x t s ( - 5 4 0 ) . j o i n ( ' : ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t e x t s T o M i n u t e s   =   f u n c t i o n   t e s t _ t e x t s T o M i n u t e s ( )   { 
             i t ( ' t e s t _ t e x t s T o M i n u t e s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 5 4 0 ,   t e x t s T o M i n u t e s ( [ ' + ' ,   ' 0 9 ' ,   ' 0 0 ' ] ) ) ; 
                 c h e c k E q u a l ( - 5 4 0 ,   t e x t s T o M i n u t e s ( ' - : 0 9 : 0 0 ' . s p l i t ( ' : ' ) ) ) ; 
             } ) ; 
         } ; 
 
         t e s t _ T h i s Y e a r ( ) ; 
         t e s t _ T h i s M o n t h ( ) ; 
         t e s t _ T o d a y ( ) ; 
         t e s t _ i s I n v a l i d D a t e ( ) ; 
         t e s t _ D a t e _ s t a n d a r d ( ) ; 
         t e s t _ D a t e t i m e ( ) ; 
         t e s t _ d a t e T o S t r i n g ( ) ; 
         t e s t _ d a t e T o S t r i n g _ M o m e m t L i k e ( ) ; 
         t e s t _ d a t e T o S t r i n g _ t i m e z o n e O f f s e t ( ) ; 
         t e s t _ d a t e T o S t r i n g U T C ( ) ; 
         t e s t _ s t r i n g T o D a t e ( ) ; 
         t e s t _ d a y O f W e e k ( ) ; 
         t e s t _ d a y O f W e e k E n g l i s h S h o r t ( ) ; 
         t e s t _ d a y O f W e e k E n g l i s h L o n g ( ) ; 
         t e s t _ d a y O f W e e k J a p a n e s e S h o r t ( ) ; 
         t e s t _ d a y O f W e e k J a p a n e s e L o n g ( ) ; 
         t e s t _ n a m e O f M o n t h ( ) ; 
         t e s t _ n a m e O f M o n t h E n g l i s h C h a r 3 ( ) ; 
         t e s t _ n a m e O f M o n t h E n g l i s h C h a r 4 ( ) ; 
         t e s t _ n a m e O f M o n t h E n g l i s h L o n g ( ) ; 
         t e s t _ m i n u t e s T o T e x t s ( ) ; 
         t e s t _ t e x t s T o M i n u t e s ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ d a t e   =   t e s t _ e x e c u t e _ d a t e ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ d a t e :   t e s t _ e x e c u t e _ d a t e 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) , 
 
 / * * * /   7 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ c o n v e r t   =   v o i d   0 ; 
 
 / *   e s l i n t - d i s a b l e   s p a c e - i n - p a r e n s   * / 
 
 / *   e s l i n t - d i s a b l e   n o - v a r   * / 
 v a r   t e s t _ e x e c u t e _ c o n v e r t   =   f u n c t i o n   t e s t _ e x e c u t e _ c o n v e r t ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             c h e c k E q u a l   =   _ p a r t s $ t e s t . c h e c k E q u a l , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t , 
             t e s t   =   _ p a r t s $ t e s t . t e s t ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ c o n v e r t ' ,   f u n c t i o n   ( )   { 
         v a r   _ p a r t s $ t e s t 2   =   p a r t s . t e s t , 
                 c h e c k E q u a l   =   _ p a r t s $ t e s t 2 . c h e c k E q u a l , 
                 i s T h r o w n   =   _ p a r t s $ t e s t 2 . i s T h r o w n , 
                 i s T h r o w n E x c e p t i o n   =   _ p a r t s $ t e s t 2 . i s T h r o w n E x c e p t i o n , 
                 t e s t C o u n t e r   =   _ p a r t s $ t e s t 2 . t e s t C o u n t e r ; 
         v a r   _ p a r t s $ c o n v e r t   =   p a r t s . c o n v e r t , 
                 n u m b e r T o S t r i n g   =   _ p a r t s $ c o n v e r t . n u m b e r T o S t r i n g , 
                 v a l u e T o S t r i n g   =   _ p a r t s $ c o n v e r t . v a l u e T o S t r i n g , 
                 s t r i n g T o N u m b e r   =   _ p a r t s $ c o n v e r t . s t r i n g T o N u m b e r , 
                 s t r i n g T o N u m b e r D e f a u l t   =   _ p a r t s $ c o n v e r t . s t r i n g T o N u m b e r D e f a u l t , 
                 s t r i n g T o I n t e g e r   =   _ p a r t s $ c o n v e r t . s t r i n g T o I n t e g e r , 
                 s t r i n g T o I n t e g e r D e f a u l t   =   _ p a r t s $ c o n v e r t . s t r i n g T o I n t e g e r D e f a u l t , 
                 v a l u e T o N u m b e r   =   _ p a r t s $ c o n v e r t . v a l u e T o N u m b e r , 
                 v a l u e T o N u m b e r D e f a u l t   =   _ p a r t s $ c o n v e r t . v a l u e T o N u m b e r D e f a u l t , 
                 v a l u e T o I n t e g e r   =   _ p a r t s $ c o n v e r t . v a l u e T o I n t e g e r , 
                 v a l u e T o I n t e g e r D e f a u l t   =   _ p a r t s $ c o n v e r t . v a l u e T o I n t e g e r D e f a u l t ; 
 
         v a r   t e s t _ S t r i n g C a s t _ s t a n d a r d   =   f u n c t i o n   t e s t _ S t r i n g C a s t _ s t a n d a r d ( )   { 
             i t ( ' t e s t _ s t a n d a r d S t r i n g C a s t ' ,   f u n c t i o n   ( )   { 
                 / /   P o s i t i v e   n u m b e r 
                 c h e c k E q u a l ( ' 3 2 ' ,   S t r i n g ( 3 2 ) ) ; 
                 c h e c k E q u a l ( ' 3 1 . 5 ' ,   S t r i n g ( 3 1 . 5 ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   S t r i n g ( 2 5 5 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 ' ,   S t r i n g ( 1 1 ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   S t r i n g ( 0 x F F ) ) ; 
                 c h e c k E q u a l ( ' 1 6 ' ,   S t r i n g ( 1 6 ) ) ; 
                 c h e c k E q u a l ( ' 1 0 0 0 0 0 ' ,   S t r i n g ( 1 e + 5 ) ) ; 
                 c h e c k E q u a l ( ' 0 . 0 0 0 0 1 ' ,   S t r i n g ( 1 e - 5 ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   S t r i n g ( + 0 x F F ) ) ; 
                 c h e c k E q u a l ( ' 1 6 ' ,   S t r i n g ( + 1 6 ) ) ; 
                 c h e c k E q u a l ( ' 1 0 0 0 0 0 ' ,   S t r i n g ( + 1 e + 5 ) ) ; 
                 c h e c k E q u a l ( ' 0 . 0 0 0 0 1 ' ,   S t r i n g ( + 1 e - 5 ) ) ;   / /   N e g a t i v e   n u m b e r 
 
                 c h e c k E q u a l ( ' - 3 2 ' ,   S t r i n g ( - 3 2 ) ) ; 
                 c h e c k E q u a l ( ' - 3 1 . 5 ' ,   S t r i n g ( - 3 1 . 5 ) ) ; 
                 c h e c k E q u a l ( ' - 2 5 5 ' ,   S t r i n g ( - 2 5 5 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 ' ,   S t r i n g ( - 1 1 ) ) ; 
                 c h e c k E q u a l ( ' - 2 5 5 ' ,   S t r i n g ( - 0 x F F ) ) ; 
                 c h e c k E q u a l ( ' - 1 6 ' ,   S t r i n g ( - 1 6 ) ) ; 
                 c h e c k E q u a l ( ' - 1 0 0 0 0 0 ' ,   S t r i n g ( - 1 e + 5 ) ) ; 
                 c h e c k E q u a l ( ' - 0 . 0 0 0 0 1 ' ,   S t r i n g ( - 1 e - 5 ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( ' N a N ' ,   S t r i n g ( N a N ) ) ; 
                 c h e c k E q u a l ( ' I n f i n i t y ' ,   S t r i n g ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( ' - I n f i n i t y ' ,   S t r i n g ( - I n f i n i t y ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( ' n u l l ' ,   S t r i n g ( n u l l ) ) ; 
                 c h e c k E q u a l ( ' u n d e f i n e d ' ,   S t r i n g ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] ' ,   S t r i n g ( { } ) ) ; 
                 c h e c k E q u a l ( ' ' ,   S t r i n g ( [ ] ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   S t r i n g ( [ 1 ] ) ) ; 
                 c h e c k E q u a l ( ' 1 , 2 , 3 ' ,   S t r i n g ( [ 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   S t r i n g ( ' ' ) ) ; 
                 c h e c k E q u a l ( ' a ' ,   S t r i n g ( ' a ' ) ) ; 
                 c h e c k E q u a l ( ' t r u e ' ,   S t r i n g ( t r u e ) ) ; 
                 c h e c k E q u a l ( ' f a l s e ' ,   S t r i n g ( f a l s e ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t o S t r i n g _ s t a n d a r d   =   f u n c t i o n   t e s t _ t o S t r i n g _ s t a n d a r d ( )   { 
             i t ( ' t e s t _ s t a n d a r d T o S t r i n g ' ,   f u n c t i o n   ( )   { 
                 / /   P o s i t i v e   n u m b e r 
                 c h e c k E q u a l ( ' 3 2 ' ,   3 2   . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 3 1 . 5 ' ,   3 1 . 5 . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   2 5 5   . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 1 1 ' ,   1 1   . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   0 x F F . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 1 6 ' ,   1 6   . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 1 0 0 0 0 0 ' ,   1 e + 5 . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 0 . 0 0 0 0 1 ' ,   1 e - 5 . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   ( + 0 x F F ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 1 6 ' ,   ( + 1 6 ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 1 0 0 0 0 0 ' ,   ( + 1 e + 5 ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 0 . 0 0 0 0 1 ' ,   ( + 1 e - 5 ) . t o S t r i n g ( ) ) ;   / /   N e g a t i v e   n u m b e r 
 
                 c h e c k E q u a l ( ' - 3 2 ' ,   ( - 3 2 ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' - 3 1 . 5 ' ,   ( - 3 1 . 5 ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' - 2 5 5 ' ,   ( - 2 5 5 ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 ' ,   ( - 1 1 ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' - 2 5 5 ' ,   ( - 0 x F F ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' - 1 6 ' ,   ( - 1 6 ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' - 1 0 0 0 0 0 ' ,   ( - 1 e + 5 ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' - 0 . 0 0 0 0 1 ' ,   ( - 1 e - 5 ) . t o S t r i n g ( ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( ' N a N ' ,   N a N . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' I n f i n i t y ' ,   I n f i n i t y . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' - I n f i n i t y ' ,   ( - I n f i n i t y ) . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( - I n f i n i t y ,   - I n f i n i t y . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( - I n f i n i t y ,   - I n f i n i t y . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( - I n f i n i t y ,   - ' I n f i n i t y ' ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( ' 1 0 1 0 . 0 1 ' ,   1 0 . 2 5 . t o S t r i n g ( 2 ) ) ; 
                 c h e c k E q u a l ( ' 2 2 . 1 ' ,   1 0 . 2 5 . t o S t r i n g ( 4 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 . 2 ' ,   1 0 . 2 5 . t o S t r i n g ( 8 ) ) ; 
                 c h e c k E q u a l ( ' a . 4 ' ,   1 0 . 2 5 . t o S t r i n g ( 1 6 ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u l l . t o S t r i n g ( ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   u n d e f i n e d . t o S t r i n g ( ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] ' ,   { } . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' ' ,   [ ] . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   [ 1 ] . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' 1 , 2 , 3 ' ,   [ 1 ,   2 ,   3 ] . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' ' . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' a ' ,   ' a ' . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' t r u e ' ,   t r u e . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( ' f a l s e ' ,   f a l s e . t o S t r i n g ( ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ n u m b e r T o S t r i n g   =   f u n c t i o n   t e s t _ n u m b e r T o S t r i n g ( )   { 
             i t ( ' t e s t _ n u m b e r T o S t r i n g ' ,   f u n c t i o n   ( )   { 
                 / /   P o s i t i v e   n u m b e r 
                 c h e c k E q u a l ( ' 3 2 ' ,   n u m b e r T o S t r i n g ( 3 2 ) ) ; 
                 c h e c k E q u a l ( ' 3 2 . 5 ' ,   n u m b e r T o S t r i n g ( 3 2 . 5 ) ) ; 
                 c h e c k E q u a l ( ' 3 2 ' ,   n u m b e r T o S t r i n g ( 3 2 ,   1 0 ) ) ; 
                 c h e c k E q u a l ( ' 3 1 . 5 ' ,   n u m b e r T o S t r i n g ( 3 1 . 5 ,   1 0 ) ) ; 
                 c h e c k E q u a l ( ' 1 0 0 0 0 0 ' ,   n u m b e r T o S t r i n g ( 3 2 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 1 1 1 ' ,   n u m b e r T o S t r i n g ( 3 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 1 1 1 . 1 ' ,   n u m b e r T o S t r i n g ( 3 1 . 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 1 1 1 . 0 1 ' ,   n u m b e r T o S t r i n g ( 3 1 . 2 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 4 0 ' ,   n u m b e r T o S t r i n g ( 3 2 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 3 7 ' ,   n u m b e r T o S t r i n g ( 3 1 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 3 7 . 4 ' ,   n u m b e r T o S t r i n g ( 3 1 . 5 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 ' ,   n u m b e r T o S t r i n g ( 3 2 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' 1 f ' ,   n u m b e r T o S t r i n g ( 3 1 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' 1 f . 8 ' ,   n u m b e r T o S t r i n g ( 3 1 . 5 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' 4 4 ' ,   n u m b e r T o S t r i n g ( 3 2 ,   7 ) ) ; 
                 c h e c k E q u a l ( ' 4 3 ' ,   n u m b e r T o S t r i n g ( 3 1 ,   7 ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   n u m b e r T o S t r i n g ( 2 5 5 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 ' ,   n u m b e r T o S t r i n g ( 1 1 ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   n u m b e r T o S t r i n g ( 0 x F F ) ) ; 
                 c h e c k E q u a l ( ' 1 6 ' ,   n u m b e r T o S t r i n g ( 1 6 ) ) ; 
                 c h e c k E q u a l ( ' f f ' ,   n u m b e r T o S t r i n g ( 2 5 5 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' b ' ,   n u m b e r T o S t r i n g ( 1 1 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' 1 7 7 ' ,   n u m b e r T o S t r i n g ( 1 2 7 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 ' ,   n u m b e r T o S t r i n g ( 1 0 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 ' ,   n u m b e r T o S t r i n g ( 3 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 1 1 ' ,   n u m b e r T o S t r i n g ( 1 5 ,   2 ) ) ;   / /   N e g a t i v e   n u m b e r 
 
                 c h e c k E q u a l ( ' - 3 2 ' ,   n u m b e r T o S t r i n g ( - 3 2 ) ) ; 
                 c h e c k E q u a l ( ' - 3 2 . 5 ' ,   n u m b e r T o S t r i n g ( - 3 2 . 5 ) ) ; 
                 c h e c k E q u a l ( ' - 3 2 ' ,   n u m b e r T o S t r i n g ( - 3 2 ,   1 0 ) ) ; 
                 c h e c k E q u a l ( ' - 3 1 . 5 ' ,   n u m b e r T o S t r i n g ( - 3 1 . 5 ,   1 0 ) ) ; 
                 c h e c k E q u a l ( ' - 1 0 0 0 0 0 ' ,   n u m b e r T o S t r i n g ( - 3 2 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 1 1 1 ' ,   n u m b e r T o S t r i n g ( - 3 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 1 1 1 . 1 ' ,   n u m b e r T o S t r i n g ( - 3 1 . 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 1 1 1 . 0 1 ' ,   n u m b e r T o S t r i n g ( - 3 1 . 2 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 4 0 ' ,   n u m b e r T o S t r i n g ( - 3 2 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 3 7 ' ,   n u m b e r T o S t r i n g ( - 3 1 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 3 7 . 4 ' ,   n u m b e r T o S t r i n g ( - 3 1 . 5 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 2 0 ' ,   n u m b e r T o S t r i n g ( - 3 2 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - 1 f ' ,   n u m b e r T o S t r i n g ( - 3 1 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - 1 f . 8 ' ,   n u m b e r T o S t r i n g ( - 3 1 . 5 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - 4 4 ' ,   n u m b e r T o S t r i n g ( - 3 2 ,   7 ) ) ; 
                 c h e c k E q u a l ( ' - 4 3 ' ,   n u m b e r T o S t r i n g ( - 3 1 ,   7 ) ) ; 
                 c h e c k E q u a l ( ' - 2 5 5 ' ,   n u m b e r T o S t r i n g ( - 2 5 5 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 ' ,   n u m b e r T o S t r i n g ( - 1 1 ) ) ; 
                 c h e c k E q u a l ( ' - 2 5 5 ' ,   n u m b e r T o S t r i n g ( - 0 x F F ) ) ; 
                 c h e c k E q u a l ( ' - 1 6 ' ,   n u m b e r T o S t r i n g ( - 1 6 ) ) ; 
                 c h e c k E q u a l ( ' - f f ' ,   n u m b e r T o S t r i n g ( - 2 5 5 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - b ' ,   n u m b e r T o S t r i n g ( - 1 1 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - 1 7 7 ' ,   n u m b e r T o S t r i n g ( - 1 2 7 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 1 2 ' ,   n u m b e r T o S t r i n g ( - 1 0 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 ' ,   n u m b e r T o S t r i n g ( - 3 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 1 1 ' ,   n u m b e r T o S t r i n g ( - 1 5 ,   2 ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( N a N ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( I n f i n i t y ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( - I n f i n i t y ) ; 
                 } ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( n u l l ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( u n d e f i n e d ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( { } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( [ ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( [ 1 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( [ 1 ,   2 ,   3 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( ' ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( ' a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( t r u e ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( f a l s e ) ; 
                 } ) ) ;   / /   E x c e p t i o n 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( ' 1 2 3 ' ,   1 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( 3 2 ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( 3 2 ,   2 . 5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( 3 2 ,   1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( 3 2 ,   3 6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   n u m b e r T o S t r i n g ( 3 2 ,   3 7 ) ; 
                 } ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' - 3 2 ' ,   n u m b e r T o S t r i n g ( { 
                     v a l u e :   - 3 2 
                 } ) ) ; 
                 c h e c k E q u a l ( ' - 1 0 0 0 0 0 ' ,   n u m b e r T o S t r i n g ( { 
                     v a l u e :   - 3 2 , 
                     r a d i x :   2 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ v a l u e T o S t r i n g   =   f u n c t i o n   t e s t _ v a l u e T o S t r i n g ( )   { 
             i t ( ' t e s t _ v a l u e T o S t r i n g ' ,   f u n c t i o n   ( )   { 
                 / /   P o s i t i v e   n u m b e r 
                 c h e c k E q u a l ( ' 3 2 ' ,   v a l u e T o S t r i n g ( 3 2 ) ) ; 
                 c h e c k E q u a l ( ' 3 2 . 5 ' ,   v a l u e T o S t r i n g ( 3 2 . 5 ) ) ; 
                 c h e c k E q u a l ( ' 3 2 ' ,   v a l u e T o S t r i n g ( 3 2 ,   1 0 ) ) ; 
                 c h e c k E q u a l ( ' 3 1 . 5 ' ,   v a l u e T o S t r i n g ( 3 1 . 5 ,   1 0 ) ) ; 
                 c h e c k E q u a l ( ' 1 0 0 0 0 0 ' ,   v a l u e T o S t r i n g ( 3 2 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 1 1 1 ' ,   v a l u e T o S t r i n g ( 3 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 1 1 1 . 1 ' ,   v a l u e T o S t r i n g ( 3 1 . 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 1 1 1 . 0 1 ' ,   v a l u e T o S t r i n g ( 3 1 . 2 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 4 0 ' ,   v a l u e T o S t r i n g ( 3 2 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 3 7 ' ,   v a l u e T o S t r i n g ( 3 1 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 3 7 . 4 ' ,   v a l u e T o S t r i n g ( 3 1 . 5 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 2 0 ' ,   v a l u e T o S t r i n g ( 3 2 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' 1 f ' ,   v a l u e T o S t r i n g ( 3 1 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' 1 f . 8 ' ,   v a l u e T o S t r i n g ( 3 1 . 5 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' 4 4 ' ,   v a l u e T o S t r i n g ( 3 2 ,   7 ) ) ; 
                 c h e c k E q u a l ( ' 4 3 ' ,   v a l u e T o S t r i n g ( 3 1 ,   7 ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   v a l u e T o S t r i n g ( 2 5 5 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 ' ,   v a l u e T o S t r i n g ( 1 1 ) ) ; 
                 c h e c k E q u a l ( ' 2 5 5 ' ,   v a l u e T o S t r i n g ( 0 x F F ) ) ; 
                 c h e c k E q u a l ( ' 1 6 ' ,   v a l u e T o S t r i n g ( 1 6 ) ) ; 
                 c h e c k E q u a l ( ' f f ' ,   v a l u e T o S t r i n g ( 2 5 5 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' b ' ,   v a l u e T o S t r i n g ( 1 1 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' 1 7 7 ' ,   v a l u e T o S t r i n g ( 1 2 7 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 ' ,   v a l u e T o S t r i n g ( 1 0 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 ' ,   v a l u e T o S t r i n g ( 3 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 1 1 1 1 ' ,   v a l u e T o S t r i n g ( 1 5 ,   2 ) ) ;   / /   N e g a t i v e   n u m b e r 
 
                 c h e c k E q u a l ( ' - 3 2 ' ,   v a l u e T o S t r i n g ( - 3 2 ) ) ; 
                 c h e c k E q u a l ( ' - 3 2 . 5 ' ,   v a l u e T o S t r i n g ( - 3 2 . 5 ) ) ; 
                 c h e c k E q u a l ( ' - 3 2 ' ,   v a l u e T o S t r i n g ( - 3 2 ,   1 0 ) ) ; 
                 c h e c k E q u a l ( ' - 3 1 . 5 ' ,   v a l u e T o S t r i n g ( - 3 1 . 5 ,   1 0 ) ) ; 
                 c h e c k E q u a l ( ' - 1 0 0 0 0 0 ' ,   v a l u e T o S t r i n g ( - 3 2 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 1 1 1 ' ,   v a l u e T o S t r i n g ( - 3 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 1 1 1 . 1 ' ,   v a l u e T o S t r i n g ( - 3 1 . 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 1 1 1 . 0 1 ' ,   v a l u e T o S t r i n g ( - 3 1 . 2 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 4 0 ' ,   v a l u e T o S t r i n g ( - 3 2 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 3 7 ' ,   v a l u e T o S t r i n g ( - 3 1 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 3 7 . 4 ' ,   v a l u e T o S t r i n g ( - 3 1 . 5 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 2 0 ' ,   v a l u e T o S t r i n g ( - 3 2 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - 1 f ' ,   v a l u e T o S t r i n g ( - 3 1 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - 1 f . 8 ' ,   v a l u e T o S t r i n g ( - 3 1 . 5 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - 4 4 ' ,   v a l u e T o S t r i n g ( - 3 2 ,   7 ) ) ; 
                 c h e c k E q u a l ( ' - 4 3 ' ,   v a l u e T o S t r i n g ( - 3 1 ,   7 ) ) ; 
                 c h e c k E q u a l ( ' - 2 5 5 ' ,   v a l u e T o S t r i n g ( - 2 5 5 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 ' ,   v a l u e T o S t r i n g ( - 1 1 ) ) ; 
                 c h e c k E q u a l ( ' - 2 5 5 ' ,   v a l u e T o S t r i n g ( - 0 x F F ) ) ; 
                 c h e c k E q u a l ( ' - 1 6 ' ,   v a l u e T o S t r i n g ( - 1 6 ) ) ; 
                 c h e c k E q u a l ( ' - f f ' ,   v a l u e T o S t r i n g ( - 2 5 5 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - b ' ,   v a l u e T o S t r i n g ( - 1 1 ,   1 6 ) ) ; 
                 c h e c k E q u a l ( ' - 1 7 7 ' ,   v a l u e T o S t r i n g ( - 1 2 7 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 1 2 ' ,   v a l u e T o S t r i n g ( - 1 0 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 ' ,   v a l u e T o S t r i n g ( - 3 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' - 1 1 1 1 ' ,   v a l u e T o S t r i n g ( - 1 5 ,   2 ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 t e s t C o u n t e r ( 0 ) ; 
                 c h e c k E q u a l ( ' N a N ' ,   v a l u e T o S t r i n g ( N a N ) ) ; 
                 c h e c k E q u a l ( ' I n f i n i t y ' ,   v a l u e T o S t r i n g ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( ' - I n f i n i t y ' ,   v a l u e T o S t r i n g ( - I n f i n i t y ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( ' 1 0 1 0 . 0 1 ' ,   v a l u e T o S t r i n g ( 1 0 . 2 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 2 2 . 1 ' ,   v a l u e T o S t r i n g ( 1 0 . 2 5 ,   4 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 . 2 ' ,   v a l u e T o S t r i n g ( 1 0 . 2 5 ,   8 ) ) ; 
                 c h e c k E q u a l ( ' a . 4 ' ,   v a l u e T o S t r i n g ( 1 0 . 2 5 ,   1 6 ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( ' n u l l ' ,   v a l u e T o S t r i n g ( n u l l ) ) ; 
                 c h e c k E q u a l ( ' u n d e f i n e d ' ,   v a l u e T o S t r i n g ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] ' ,   v a l u e T o S t r i n g ( { } ) ) ; 
                 c h e c k E q u a l ( ' ' ,   v a l u e T o S t r i n g ( [ ] ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   v a l u e T o S t r i n g ( [ 1 ] ) ) ; 
                 c h e c k E q u a l ( ' 1 , 2 , 3 ' ,   v a l u e T o S t r i n g ( [ 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   v a l u e T o S t r i n g ( ' ' ) ) ; 
                 c h e c k E q u a l ( ' a ' ,   v a l u e T o S t r i n g ( ' a ' ) ) ; 
                 c h e c k E q u a l ( ' t r u e ' ,   v a l u e T o S t r i n g ( t r u e ) ) ; 
                 c h e c k E q u a l ( ' f a l s e ' ,   v a l u e T o S t r i n g ( f a l s e ) ) ;   / /   E x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   v a l u e T o S t r i n g ( ' 1 2 3 ' ,   1 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   v a l u e T o S t r i n g ( 3 2 ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   v a l u e T o S t r i n g ( 3 2 ,   2 . 5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   v a l u e T o S t r i n g ( 3 2 ,   1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   v a l u e T o S t r i n g ( 3 2 ,   3 6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   v a l u e T o S t r i n g ( 3 2 ,   3 7 ) ; 
                 } ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' - 3 2 ' ,   v a l u e T o S t r i n g ( { 
                     v a l u e :   - 3 2 
                 } ) ) ; 
                 c h e c k E q u a l ( ' - 1 0 0 0 0 0 ' ,   v a l u e T o S t r i n g ( { 
                     v a l u e :   - 3 2 , 
                     r a d i x :   2 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ N u m b e r C a s t _ s t a n d a r d   =   f u n c t i o n   t e s t _ N u m b e r C a s t _ s t a n d a r d ( )   { 
             i t ( ' t e s t _ N u m b e r C a s t _ s t a n d a r d ' ,   f u n c t i o n   ( )   { 
                 / /   I n t e g e r 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( ' 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( ' + 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   N u m b e r ( ' - 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( '   1 2 3 ' ) ,   ' 1 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( ' 1 2 3   ' ) ,   ' 2 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( '   1 2 3   ' ) ,   ' 3 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( '  01 2 3 ' ) ,   ' 4 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( ' 1 2 3  0' ) ,   ' 5 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( '  01 2 3  0' ) ,   ' 6 ' ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 2 3   0 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 0   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 2 3 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' a 1 2 3 ' ) ) ;   / /   D e c i m a l 
 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   N u m b e r ( ' 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   N u m b e r ( ' 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   N u m b e r ( ' + 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 . 4 ,   N u m b e r ( ' - 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 5 ,   N u m b e r ( ' 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 5 ,   N u m b e r ( ' 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 5 ,   N u m b e r ( ' + 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 . 5 ,   N u m b e r ( ' - 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   N u m b e r ( '   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   N u m b e r ( ' 1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   N u m b e r ( '   1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   N u m b e r ( '  01 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   N u m b e r ( ' 1 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   N u m b e r ( '  01 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 2 3 . 4   0 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 0   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 2 3   . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 2 3 .   4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 2 3 . 4 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' a 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 5 ,   N u m b e r ( ' 1 2 3 . 4 5 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 2 3 . 4 . 5 ' ) ) ;   / /   s t r i n g 
 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' a b c ' ) ) ;   / /   s p a c e   s t r i n g 
 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( ' ' ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( '   ' ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( '  0' ) ) ;   / /   ? 
                 / /   e x p o n e n t i a l   n o t a t i o n 
 
                 c h e c k E q u a l ( 3 . 1 4 ,   N u m b e r ( 3 . 1 4 ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   N u m b e r ( ' 3 . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   N u m b e r ( ' 3 1 4 e - 2 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   N u m b e r ( ' 0 . 0 3 1 4 E + 2 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 1 4 ,   N u m b e r ( ' . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 ,   N u m b e r ( ' 1 e - 1 7 ' ) ) ; 
                 c h e c k E q u a l ( 1 e - 1 7 ,   N u m b e r ( ' 1 e - 1 7 ' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n   d e t a i l 
 
                 c h e c k E q u a l ( 1 ,   N u m b e r ( ' 1 . ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 . 1 e ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 . 1 e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   N u m b e r ( ' 1 e + 5 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 1 ,   N u m b e r ( ' 1 e - 5 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 . e ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' 1 . e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   N u m b e r ( ' 1 . e + 5 ' ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( 2 9 1 ,   N u m b e r ( ' 0 x 1 2 3 ' ) ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( 2 9 1 ,   N u m b e r ( ' + 0 x 1 2 3 ' ) ) ; 
                     c h e c k E q u a l ( - 2 9 1 ,   N u m b e r ( ' - 0 x 1 2 3 ' ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( N a N ,   N u m b e r ( ' + 0 x 1 2 3 ' ) ) ; 
                     c h e c k E q u a l ( N a N ,   N u m b e r ( ' - 0 x 1 2 3 ' ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( )   | |   p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( )   | |   p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( N a N ,   N u m b e r ( ' 0 o 1 2 3 ' ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( 8 3 ,   N u m b e r ( ' 0 o 1 2 3 ' ) ) ; 
                 } 
 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' + 0 o 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' - 0 o 1 2 3 ' ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( I n f i n i t y ,   N u m b e r ( ' I n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' i n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' i n f ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' i n f o ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' N a N ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' n a n ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( ' n a ' ) ) ;   / /   N u m b e r 
 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   N u m b e r ( - 1 2 3 ) ) ; 
                 c h e c k E q u a l ( 1 . 2 3 ,   N u m b e r ( 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( - 1 . 2 3 ,   N u m b e r ( - 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( I n f i n i t y ,   N u m b e r ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( - I n f i n i t y ,   N u m b e r ( - I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( N a N ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( n u l l ) ) ;   / /   ! 
 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( { } ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( { 
                     a :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( [ ] ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 1 ,   N u m b e r ( [ 1 ] ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 1 2 3 ,   N u m b e r ( [ 1 2 3 ] ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( [ 1 ,   2 ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ p a r s e F l o a t _ s t a n d a r d   =   f u n c t i o n   t e s t _ p a r s e F l o a t _ s t a n d a r d ( )   { 
             i t ( ' t e s t _ p a r s e F l o a t _ s t a n d a r d ' ,   f u n c t i o n   ( )   { 
                 / /   I n t e g e r 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( ' 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( ' + 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   p a r s e F l o a t ( ' - 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( '   1 2 3 ' ) ,   ' 1 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( ' 1 2 3   ' ) ,   ' 2 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( '   1 2 3   ' ) ,   ' 3 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( '  01 2 3 ' ) ,   ' 4 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( ' 1 2 3  0' ) ,   ' 5 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( '  01 2 3  0' ) ,   ' 6 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( ' 1 2 3   0 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e F l o a t ( ' 0   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e F l o a t ( ' 1   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( ' 1 2 3 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' a 1 2 3 ' ) ) ;   / /   D e c i m a l 
 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( ' 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( ' 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( ' + 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 . 4 ,   p a r s e F l o a t ( ' - 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 5 ,   p a r s e F l o a t ( ' 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 5 ,   p a r s e F l o a t ( ' 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 5 ,   p a r s e F l o a t ( ' + 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 . 5 ,   p a r s e F l o a t ( ' - 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( '   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( ' 1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( '   1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( '  01 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( ' 1 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( '  01 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( ' 1 2 3 . 4   0 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e F l o a t ( ' 0   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e F l o a t ( ' 1   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( ' 1 2 3   . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( ' 1 2 3 .   4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( ' 1 2 3 . 4 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' a 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 5 ,   p a r s e F l o a t ( ' 1 2 3 . 4 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   p a r s e F l o a t ( ' 1 2 3 . 4 . 5 ' ) ) ;   / /   s t r i n g 
 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' a b c ' ) ) ;   / /   s p a c e   s t r i n g 
 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( '   ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( '  0' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n 
 
                 c h e c k E q u a l ( 3 . 1 4 ,   p a r s e F l o a t ( 3 . 1 4 ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   p a r s e F l o a t ( ' 3 . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   p a r s e F l o a t ( ' 3 1 4 e - 2 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   p a r s e F l o a t ( ' 0 . 0 3 1 4 E + 2 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 1 4 ,   p a r s e F l o a t ( ' . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 ,   p a r s e F l o a t ( ' 1 e - 1 7 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 e - 1 7 ' ,   0 . 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( 1 e - 1 7 ,   p a r s e F l o a t ( ' 1 e - 1 7 ' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n   d e t a i l 
 
                 c h e c k E q u a l ( 1 ,   p a r s e F l o a t ( ' 1 . ' ) ) ; 
                 c h e c k E q u a l ( 1 . 1 ,   p a r s e F l o a t ( ' 1 . 1 e ' ) ) ; 
                 c h e c k E q u a l ( 1 . 1 ,   p a r s e F l o a t ( ' 1 . 1 e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   p a r s e F l o a t ( ' 1 e + 5 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 1 ,   p a r s e F l o a t ( ' 1 e - 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e F l o a t ( ' 1 . e ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e F l o a t ( ' 1 . e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   p a r s e F l o a t ( ' 1 . e + 5 ' ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( 0 ,   p a r s e F l o a t ( ' 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e F l o a t ( ' + 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 0 ,   p a r s e F l o a t ( ' - 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e F l o a t ( ' 0 o 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e F l o a t ( ' + 0 o 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 0 ,   p a r s e F l o a t ( ' - 0 o 1 2 3 ' ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( I n f i n i t y ,   p a r s e F l o a t ( ' I n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' i n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' i n f ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' i n f o ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' N a N ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' n a n ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( ' n a ' ) ) ;   / /   N u m b e r 
 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   p a r s e F l o a t ( - 1 2 3 ) ) ; 
                 c h e c k E q u a l ( 1 . 2 3 ,   p a r s e F l o a t ( 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( - 1 . 2 3 ,   p a r s e F l o a t ( - 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( I n f i n i t y ,   p a r s e F l o a t ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( - I n f i n i t y ,   p a r s e F l o a t ( - I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( N a N ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( n u l l ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( { } ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( { 
                     a :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e F l o a t ( [ ] ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e F l o a t ( [ 1 ] ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e F l o a t ( [ 1 2 3 ] ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e F l o a t ( [ 1 ,   2 ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ p a r s e I n t _ s t a n d a r d   =   f u n c t i o n   t e s t _ p a r s e I n t _ s t a n d a r d ( )   { 
             i t ( ' t e s t _ p a r s e I n t _ s t a n d a r d ' ,   f u n c t i o n   ( )   { 
                 v a r   p a r s e I n t 1 0   =   f u n c t i o n   p a r s e I n t 1 0 ( v a l u e )   { 
                     r e t u r n   p a r s e I n t ( v a l u e ,   1 0 ) ; 
                 } ;   / /   I n t e g e r 
 
 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' + 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   p a r s e I n t 1 0 ( ' - 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( '   1 2 3 ' ) ,   ' 1 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3   ' ) ,   ' 2 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( '   1 2 3   ' ) ,   ' 3 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( '  01 2 3 ' ) ,   ' 4 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3  0' ) ,   ' 5 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( '  01 2 3  0' ) ,   ' 6 ' ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3   0 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e I n t 1 0 ( ' 0   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' a 1 2 3 ' ) ) ;   / /   D e c i m a l 
 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' + 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   p a r s e I n t 1 0 ( ' - 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' + 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   p a r s e I n t 1 0 ( ' - 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( '   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( '   1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( '  01 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( '  01 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 . 4   0 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e I n t 1 0 ( ' 0   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3   . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 .   4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 . 4 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' a 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 . 4 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( ' 1 2 3 . 4 . 5 ' ) ) ;   / /   s t r i n g 
 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' a b c ' ) ) ;   / /   s p a c e   s t r i n g 
 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( '   ' ) ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( '  0' ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( '  0' ) ) ; 
                 }   / /   e x p o n e n t i a l   n o t a t i o n 
 
 
                 c h e c k E q u a l ( 3 ,   p a r s e I n t 1 0 ( 3 . 1 4 ) ) ; 
                 c h e c k E q u a l ( 3 ,   p a r s e I n t 1 0 ( ' 3 . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 3 1 4 ,   p a r s e I n t 1 0 ( ' 3 1 4 e - 2 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e I n t 1 0 ( ' 0 . 0 3 1 4 E + 2 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' . 1 4 ' ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 e - 1 7 ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 e - 1 7 ' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n   d e t a i l 
 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 . ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 . 1 e ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 . 1 e + ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 e + 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 e - 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 . e ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 . e + ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( ' 1 . e + 5 ' ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( 0 ,   p a r s e I n t 1 0 ( ' 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e I n t 1 0 ( ' + 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 0 ,   p a r s e I n t 1 0 ( ' - 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e I n t 1 0 ( ' 0 o 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   p a r s e I n t 1 0 ( ' + 0 o 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 0 ,   p a r s e I n t 1 0 ( ' - 0 o 1 2 3 ' ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' I n f i n i t y ' ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' i n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' i n f ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' i n f o ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' N a N ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' n a n ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( ' n a ' ) ) ;   / /   N u m b e r 
 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   p a r s e I n t 1 0 ( - 1 2 3 ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   p a r s e I n t 1 0 ( - 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( - I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( N a N ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( n u l l ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( { } ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( { 
                     a :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( N a N ,   p a r s e I n t 1 0 ( [ ] ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( [ 1 ] ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   p a r s e I n t 1 0 ( [ 1 2 3 ] ) ) ; 
                 c h e c k E q u a l ( 1 ,   p a r s e I n t 1 0 ( [ 1 ,   2 ] ) ) ;   / /   N o n - d e c i m a l   n u m b e r   o n l y   p a r s e I n t 
 
                 c h e c k E q u a l ( 1 0 ,   p a r s e I n t ( ' 1 0 1 0 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   p a r s e I n t ( ' 2 2 ' ,   4 ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   p a r s e I n t ( ' 1 2 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   p a r s e I n t ( ' a ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   p a r s e I n t ( ' A ' ,   1 6 ) ) ;   / /   D o   n o t   s p e c i f y   r a d i x 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( 6 ,   p a r s e I n t ( ' 0 6 ' ) ) ; 
                     c h e c k E q u a l ( 7 ,   p a r s e I n t ( ' 0 7 ' ) ) ; 
                     c h e c k E q u a l ( 0 ,   p a r s e I n t ( ' 0 8 ' ) ) ; 
                     c h e c k E q u a l ( 0 ,   p a r s e I n t ( ' 0 9 ' ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( 6 ,   p a r s e I n t ( ' 0 6 ' ) ) ; 
                     c h e c k E q u a l ( 7 ,   p a r s e I n t ( ' 0 7 ' ) ) ; 
                     c h e c k E q u a l ( 8 ,   p a r s e I n t ( ' 0 8 ' ) ) ; 
                     c h e c k E q u a l ( 9 ,   p a r s e I n t ( ' 0 9 ' ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s t r i n g T o N u m b e r   =   f u n c t i o n   t e s t _ s t r i n g T o N u m b e r ( )   { 
             i t ( ' t e s t _ s t r i n g T o N u m b e r ' ,   f u n c t i o n   ( )   { 
                 / /   I n t e g e r 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o N u m b e r ( ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o N u m b e r ( ' 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o N u m b e r ( ' + 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   s t r i n g T o N u m b e r ( ' - 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '   1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '   1 2 3   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '  01 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3  0' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '  01 2 3  0' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3   0 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 0   1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1   1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3 a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' a 1 2 3 ' ) ; 
                 } ) ) ;   / /   D e c i m a l 
 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   s t r i n g T o N u m b e r ( ' 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   s t r i n g T o N u m b e r ( ' 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   s t r i n g T o N u m b e r ( ' + 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 . 4 ,   s t r i n g T o N u m b e r ( ' - 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '   1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3 . 4   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '   1 2 3 . 4   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '  01 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3 . 4  0' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '  01 2 3 . 4  0' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3 . 4   0 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 0   1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1   1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3   . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3 .   4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3 . 4 a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' a 1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 5 ,   s t r i n g T o N u m b e r ( ' 1 2 3 . 4 5 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 2 3 . 4 . 5 ' ) ; 
                 } ) ) ;   / /   s t r i n g 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' a b c ' ) ; 
                 } ) ) ;   / /   s p a c e   s t r i n g 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( '  0' ) ; 
                 } ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n 
 
                 c h e c k E q u a l ( 3 . 1 4 ,   s t r i n g T o N u m b e r ( ' 3 . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   s t r i n g T o N u m b e r ( ' 3 1 4 e - 2 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   s t r i n g T o N u m b e r ( ' 0 . 0 3 1 4 E + 2 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 1 4 ,   s t r i n g T o N u m b e r ( ' . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 ,   s t r i n g T o N u m b e r ( ' 1 e - 1 7 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 e - 1 7 ' ,   0 . 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( 1 e - 1 7 ,   s t r i n g T o N u m b e r ( ' 1 e - 1 7 ' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n   d e t a i l 
 
                 c h e c k E q u a l ( 1 ,   s t r i n g T o N u m b e r ( ' 1 . ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 . 1 e ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 . 1 e + ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   s t r i n g T o N u m b e r ( ' 1 e + 5 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 1 ,   s t r i n g T o N u m b e r ( ' 1 e - 5 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 . e ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 1 . e + ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   s t r i n g T o N u m b e r ( ' 1 . e + 5 ' ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' + 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' - 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' + 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' - 0 x 1 2 3 ' ) ; 
                 } ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' I n f i n i t y ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' i n f i n i t y ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' i n f ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' i n f o ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' N a N ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' n a n ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( ' n a ' ) ; 
                 } ) ) ;   / /   N u m b e r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( 1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( - 1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( 1 . 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( - 1 . 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( I n f i n i t y ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( - I n f i n i t y ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( N a N ) ; 
                 } ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( n u l l ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( u n d e f i n e d ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( { } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( { 
                         a :   1 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( [ ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( [ 1 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( [ 1 2 3 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r ( [ 1 ,   2 ] ) ; 
                 } ) ) ;   / /   E x c e p t i o n 
 
                 v a r   i   =   0 ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o N u m b e r ( 1 2 3 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o N u m b e r   e x c e p t i o n   " . c o n c a t ( i ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( - 1 2 3 ,   s t r i n g T o N u m b e r ( { 
                     v a l u e :   ' - 0 1 2 3 ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s t r i n g T o N u m b e r D e f a u l t   =   f u n c t i o n   t e s t _ s t r i n g T o N u m b e r D e f a u l t ( )   { 
             i t ( ' t e s t _ s t r i n g T o N u m b e r D e f a u l t ' ,   f u n c t i o n   ( )   { 
                 / /   I n t e g e r 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o N u m b e r D e f a u l t ( ' + 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   s t r i n g T o N u m b e r D e f a u l t ( ' - 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '   1 2 3 ' ) ,   ' 1 ' ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3   ' ) ,   ' 2 ' ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '   1 2 3   ' ) ,   ' 3 ' ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '  01 2 3 ' ) ,   ' 4 ' ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3  0' ) ,   ' 5 ' ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '  01 2 3  0' ) ,   ' 6 ' ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3   0 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 0   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 a ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' a 1 2 3 ' ) ) ;   / /   D e c i m a l 
 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   s t r i n g T o N u m b e r D e f a u l t ( ' + 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 . 4 ,   s t r i n g T o N u m b e r D e f a u l t ( ' - 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '   1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '  01 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '  01 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 . 4   0 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 0   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3   . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 .   4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 . 4 a ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' a 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 5 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 . 4 5 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 2 3 . 4 . 5 ' ) ) ;   / /   s t r i n g 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' a b c ' ) ) ; 
                 c h e c k E q u a l ( n u l l ,   s t r i n g T o N u m b e r D e f a u l t ( ' a b c ' ,   n u l l ) ) ; 
                 c h e c k E q u a l ( N a N ,   s t r i n g T o N u m b e r D e f a u l t ( ' a b c ' ,   N a N ) ) ;   / /   s p a c e   s t r i n g 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '   ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( '  0' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n 
 
                 c h e c k E q u a l ( 3 . 1 4 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 3 . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 3 1 4 e - 2 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 0 . 0 3 1 4 E + 2 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 1 4 ,   s t r i n g T o N u m b e r D e f a u l t ( ' . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 e - 1 7 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 e - 1 7 ' ,   0 . 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( 1 e - 1 7 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 e - 1 7 ' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n   d e t a i l 
 
                 c h e c k E q u a l ( 1 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 . ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 . 1 e ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 . 1 e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 e + 5 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 1 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 e - 5 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 . e ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 . e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   s t r i n g T o N u m b e r D e f a u l t ( ' 1 . e + 5 ' ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' + 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' - 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' + 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' - 0 x 1 2 3 ' ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' I n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' i n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' i n f ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' i n f o ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' N a N ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' n a n ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o N u m b e r D e f a u l t ( ' n a ' ) ) ;   / /   N u m b e r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( 1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( - 1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( 1 . 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( - 1 . 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( I n f i n i t y ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( - I n f i n i t y ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( N a N ) ; 
                 } ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( n u l l ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( u n d e f i n e d ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( { } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( { 
                         a :   1 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( [ ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( [ 1 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( [ 1 2 3 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o N u m b e r D e f a u l t ( [ 1 ,   2 ] ) ; 
                 } ) ) ;   / /   E x c e p t i o n 
 
                 v a r   i   =   0 ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o N u m b e r D e f a u l t ( 1 2 3 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o N u m b e r D e f a u l t   e x c e p t i o n   " . c o n c a t ( i ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( - 1 2 3 ,   s t r i n g T o N u m b e r D e f a u l t ( { 
                     v a l u e :   ' - 0 1 2 3 ' 
                 } ) ) ; 
                 c h e c k E q u a l ( n u l l ,   s t r i n g T o N u m b e r D e f a u l t ( { 
                     v a l u e :   ' a b c ' , 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ v a l u e T o N u m b e r   =   f u n c t i o n   t e s t _ v a l u e T o N u m b e r ( )   { 
             i t ( ' t e s t _ v a l u e T o N u m b e r ' ,   f u n c t i o n   ( )   { 
                 / /   I n t e g e r 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o N u m b e r ( ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o N u m b e r ( ' 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o N u m b e r ( ' + 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   v a l u e T o N u m b e r ( ' - 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '   1 2 3 ' ) ,   ' 1 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3   ' ) ,   ' 2 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '   1 2 3   ' ) ,   ' 3 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '  01 2 3 ' ) ,   ' 4 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3  0' ) ,   ' 5 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '  01 2 3  0' ) ,   ' 6 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3   0 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 0   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' a 1 2 3 ' ) ) ;   / /   D e c i m a l 
 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   v a l u e T o N u m b e r ( ' 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   v a l u e T o N u m b e r ( ' 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 ,   v a l u e T o N u m b e r ( ' + 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 . 4 ,   v a l u e T o N u m b e r ( ' - 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 5 ,   v a l u e T o N u m b e r ( ' 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 5 ,   v a l u e T o N u m b e r ( ' 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 5 ,   v a l u e T o N u m b e r ( ' + 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 . 5 ,   v a l u e T o N u m b e r ( ' - 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '   1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '  01 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '  01 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3 . 4   0 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 0   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3   . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3 .   4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3 . 4 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' a 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 . 4 5 ,   v a l u e T o N u m b e r ( ' 1 2 3 . 4 5 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 2 3 . 4 . 5 ' ) ) ;   / /   s t r i n g 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' a b c ' ) ) ;   / /   s p a c e   s t r i n g 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '   ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( '  0' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n 
 
                 c h e c k E q u a l ( 3 . 1 4 ,   v a l u e T o N u m b e r ( 3 . 1 4 ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   v a l u e T o N u m b e r ( ' 3 . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   v a l u e T o N u m b e r ( ' 3 1 4 e - 2 ' ) ) ; 
                 c h e c k E q u a l ( 3 . 1 4 ,   v a l u e T o N u m b e r ( ' 0 . 0 3 1 4 E + 2 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 1 4 ,   v a l u e T o N u m b e r ( ' . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 ,   v a l u e T o N u m b e r ( ' 1 e - 1 7 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 e - 1 7 ' ,   0 . 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 . t o S t r i n g ( ) ) ; 
                 c h e c k E q u a l ( 1 e - 1 7 ,   v a l u e T o N u m b e r ( ' 1 e - 1 7 ' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n   d e t a i l 
 
                 c h e c k E q u a l ( 1 ,   v a l u e T o N u m b e r ( ' 1 . ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 . 1 e ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 . 1 e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   v a l u e T o N u m b e r ( ' 1 e + 5 ' ) ) ; 
                 c h e c k E q u a l ( 0 . 0 0 0 0 1 ,   v a l u e T o N u m b e r ( ' 1 e - 5 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 . e ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 1 . e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   v a l u e T o N u m b e r ( ' 1 . e + 5 ' ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' + 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' - 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' 0 o 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' + 0 o 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' - 0 o 1 2 3 ' ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' I n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' i n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' i n f ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' i n f o ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' N a N ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' n a n ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( ' n a ' ) ) ;   / /   N u m b e r 
 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o N u m b e r ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   v a l u e T o N u m b e r ( - 1 2 3 ) ) ; 
                 c h e c k E q u a l ( 1 . 2 3 ,   v a l u e T o N u m b e r ( 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( - 1 . 2 3 ,   v a l u e T o N u m b e r ( - 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( I n f i n i t y ,   v a l u e T o N u m b e r ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( - I n f i n i t y ,   v a l u e T o N u m b e r ( - I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( N a N ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( n u l l ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( { } ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( { 
                     a :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( [ ] ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( [ 1 ] ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( [ 1 2 3 ] ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r ( [ 1 ,   2 ] ) ) ;   / /   D e f a u l t 
 
                 c h e c k E q u a l ( n u l l ,   v a l u e T o N u m b e r D e f a u l t ( ' ' ,   n u l l ) ) ; 
                 c h e c k E q u a l ( n u l l ,   v a l u e T o N u m b e r D e f a u l t ( { 
                     v a l u e :   ' ' , 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( n u l l ,   v a l u e T o N u m b e r D e f a u l t ( ' ' ,   { 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( 1 . 5 ,   v a l u e T o N u m b e r D e f a u l t ( ' 1 . 5 ' ,   n u l l ) ) ; 
                 c h e c k E q u a l ( 1 . 5 ,   v a l u e T o N u m b e r D e f a u l t ( { 
                     v a l u e :   ' 1 . 5 ' , 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( 1 . 5 ,   v a l u e T o N u m b e r D e f a u l t ( ' 1 . 5 ' ,   { 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r D e f a u l t ( N a N ,   n u l l ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r D e f a u l t ( { 
                     v a l u e :   N a N , 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o N u m b e r D e f a u l t ( N a N ,   { 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s t r i n g T o I n t e g e r   =   f u n c t i o n   t e s t _ s t r i n g T o I n t e g e r ( )   { 
             i t ( ' t e s t _ s t r i n g T o I n t e g e r ' ,   f u n c t i o n   ( )   { 
                 / /   I n t e g e r 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o I n t e g e r ( ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o I n t e g e r ( ' 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o I n t e g e r ( ' + 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   s t r i n g T o I n t e g e r ( ' - 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( '   1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( '   1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( '   1 2 3   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3   0 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 0   1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1   1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3 a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' a 1 2 3 ' ) ; 
                 } ) ) ;   / /   D e c i m a l 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 0 1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' + 1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' - 0 1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( '   1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3 . 4   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( '   1 2 3 . 4   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3 . 4   0 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 0   1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1   1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3   . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3 .   4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3 . 4 a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' a 1 2 3 . 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3 . 4 5 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 2 3 . 4 . 5 ' ) ; 
                 } ) ) ;   / /   P o s i t i v e   n u m b e r 
 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r ( ' 3 2 ' ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r ( ' 3 2 ' ,   1 0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 3 1 . 5 ' ,   1 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r ( ' 1 0 0 0 0 0 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 3 1 ,   s t r i n g T o I n t e g e r ( ' 1 1 1 1 1 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 1 1 1 1 . 1 ' ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 1 1 1 1 . 0 1 ' ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r ( ' 4 0 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( 3 1 ,   s t r i n g T o I n t e g e r ( ' 3 7 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 3 7 . 4 ' ,   8 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r ( ' 2 0 ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 3 1 ,   s t r i n g T o I n t e g e r ( ' 1 f ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 f . 8 ' ,   1 6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r ( ' 4 4 ' ,   7 ) ) ; 
                 c h e c k E q u a l ( 3 1 ,   s t r i n g T o I n t e g e r ( ' 4 3 ' ,   7 ) ) ; 
                 c h e c k E q u a l ( 2 5 5 ,   s t r i n g T o I n t e g e r ( ' 2 5 5 ' ,   1 0 ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   s t r i n g T o I n t e g e r ( ' 1 1 ' ,   1 0 ) ) ; 
                 c h e c k E q u a l ( 2 5 5 ,   s t r i n g T o I n t e g e r ( ' F F ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 1 6 ,   s t r i n g T o I n t e g e r ( ' 2 0 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( 2 5 5 ,   s t r i n g T o I n t e g e r ( ' f f ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   s t r i n g T o I n t e g e r ( ' b ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 1 2 7 ,   s t r i n g T o I n t e g e r ( ' 1 7 7 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   s t r i n g T o I n t e g e r ( ' 1 2 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( 3 ,   s t r i n g T o I n t e g e r ( ' 1 1 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 1 5 ,   s t r i n g T o I n t e g e r ( ' 1 1 1 1 ' ,   2 ) ) ;   / /   N e g a t i v e   n u m b e r 
 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r ( ' - 3 2 ' ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r ( ' - 3 2 ' ,   1 0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' - 3 1 . 5 ' ,   1 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r ( ' - 1 0 0 0 0 0 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( - 3 1 ,   s t r i n g T o I n t e g e r ( ' - 1 1 1 1 1 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' - 1 1 1 1 1 . 1 ' ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' - 1 1 1 1 1 . 0 1 ' ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r ( ' - 4 0 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( - 3 1 ,   s t r i n g T o I n t e g e r ( ' - 3 7 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' - 3 7 . 4 ' ,   8 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r ( ' - 2 0 ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( - 3 1 ,   s t r i n g T o I n t e g e r ( ' - 1 f ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' - 1 f . 8 ' ,   1 6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r ( ' - 4 4 ' ,   7 ) ) ; 
                 c h e c k E q u a l ( - 3 1 ,   s t r i n g T o I n t e g e r ( ' - 4 3 ' ,   7 ) ) ; 
                 c h e c k E q u a l ( - 2 5 5 ,   s t r i n g T o I n t e g e r ( ' - 2 5 5 ' ,   1 0 ) ) ; 
                 c h e c k E q u a l ( - 1 1 ,   s t r i n g T o I n t e g e r ( ' - 1 1 ' ,   1 0 ) ) ; 
                 c h e c k E q u a l ( - 2 5 5 ,   s t r i n g T o I n t e g e r ( ' - F F ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( - 1 6 ,   s t r i n g T o I n t e g e r ( ' - 2 0 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( - 2 5 5 ,   s t r i n g T o I n t e g e r ( ' - f f ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( - 1 1 ,   s t r i n g T o I n t e g e r ( ' - b ' ,   1 6 ) ) ; 
                 c h e c k E q u a l ( - 1 2 7 ,   s t r i n g T o I n t e g e r ( ' - 1 7 7 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( - 1 0 ,   s t r i n g T o I n t e g e r ( ' - 1 2 ' ,   8 ) ) ; 
                 c h e c k E q u a l ( - 3 ,   s t r i n g T o I n t e g e r ( ' - 1 1 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( - 1 5 ,   s t r i n g T o I n t e g e r ( ' - 1 1 1 1 ' ,   2 ) ) ;   / /   s t r i n g 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' a b c ' ) ; 
                 } ) ) ;   / /   s p a c e   s t r i n g 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( '   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( '  0' ) ; 
                 } ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 3 . 1 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 3 1 4 e - 2 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 0 . 0 3 1 4 E + 2 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' . 1 4 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 e - 1 7 ' ) ; 
                 } ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n   d e t a i l 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 . 1 e ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 . 1 e + ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 e + 5 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 e - 5 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 . e ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 1 . e + ' ) ; 
                 } ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' + 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' - 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' + 0 x 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' - 0 x 1 2 3 ' ) ; 
                 } ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' I n f i n i t y ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' i n f i n i t y ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' i n f ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' i n f o ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' N a N ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' n a n ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( ' n a ' ) ; 
                 } ) ) ;   / /   N u m b e r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( 1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( - 1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( 1 . 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( - 1 . 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( I n f i n i t y ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( - I n f i n i t y ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( N a N ) ; 
                 } ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( n u l l ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( u n d e f i n e d ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( { } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( { 
                         a :   1 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( [ ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( [ 1 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( [ 1 2 3 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( [ 1 ,   2 ] ) ; 
                 } ) ) ;   / /   E x c e p t i o n 
 
                 v a r   i   =   0 ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r ( 1 2 3 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r ( ' 1 2 3 ' ,   2 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r ( ' 1 2 3 ' ,   2 . 5 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r ( ' 1 2 3 ' ,   1 ) ; 
                 } ,   n e w   R a n g e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r ( ' 1 2 3 ' ,   3 6 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r ( ' 1 2 3 ' ,   3 7 ) ; 
                 } ,   n e w   R a n g e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r   e x c e p t i o n   " . c o n c a t ( i ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( - 1 2 3 ,   s t r i n g T o I n t e g e r ( { 
                     v a l u e :   ' - 0 1 2 3 ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r ( { 
                         v a l u e :   ' a b c ' 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( - 1 5 ,   s t r i n g T o I n t e g e r ( { 
                     v a l u e :   ' - 1 1 1 1 ' , 
                     r a d i x :   2 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s t r i n g T o I n t e g e r D e f a u l t   =   f u n c t i o n   t e s t _ s t r i n g T o I n t e g e r D e f a u l t ( )   { 
             i t ( ' t e s t _ s t r i n g T o I n t e g e r D e f a u l t ' ,   f u n c t i o n   ( )   { 
                 / /   I n t e g e r 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' + 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( '   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3   ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( '   1 2 3   ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3   0 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 0   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 a ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' a 1 2 3 ' ) ) ;   / /   D e c i m a l 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' + 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( '   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( '   1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 . 4   0 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 0   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3   . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 .   4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 . 4 a ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' a 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 . 4 5 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 . 4 . 5 ' ) ) ;   / /   P o s i t i v e   n u m b e r 
 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 3 2 ' ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 3 2 ' ,   u n d e f i n e d ,   1 0 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 3 1 . 5 ' ,   u n d e f i n e d ,   1 0 ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 0 0 0 0 0 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( 3 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 1 1 1 1 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 1 1 1 1 . 1 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 1 1 1 1 . 0 1 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 4 0 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( 3 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 3 7 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 3 7 . 4 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 2 0 ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 3 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 f ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 f . 8 ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 4 4 ' ,   u n d e f i n e d ,   7 ) ) ; 
                 c h e c k E q u a l ( 3 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 4 3 ' ,   u n d e f i n e d ,   7 ) ) ; 
                 c h e c k E q u a l ( 2 5 5 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 2 5 5 ' ,   u n d e f i n e d ,   1 0 ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 1 ' ,   u n d e f i n e d ,   1 0 ) ) ; 
                 c h e c k E q u a l ( 2 5 5 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' F F ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 1 6 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 2 0 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( 2 5 5 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' f f ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 1 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' b ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( 1 2 7 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 7 7 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( 1 0 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( 3 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 1 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( 1 5 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 1 1 1 ' ,   u n d e f i n e d ,   2 ) ) ;   / /   N e g a t i v e   n u m b e r 
 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 3 2 ' ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 3 2 ' ,   u n d e f i n e d ,   1 0 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 3 1 . 5 ' ,   u n d e f i n e d ,   1 0 ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 0 0 0 0 0 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( - 3 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 1 1 1 1 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 1 1 1 1 . 1 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 1 1 1 1 . 0 1 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 4 0 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( - 3 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 3 7 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 3 7 . 4 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 2 0 ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( - 3 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 f ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 f . 8 ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( - 3 2 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 4 4 ' ,   u n d e f i n e d ,   7 ) ) ; 
                 c h e c k E q u a l ( - 3 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 4 3 ' ,   u n d e f i n e d ,   7 ) ) ; 
                 c h e c k E q u a l ( - 2 5 5 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 2 5 5 ' ,   u n d e f i n e d ,   1 0 ) ) ; 
                 c h e c k E q u a l ( - 1 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 1 ' ,   u n d e f i n e d ,   1 0 ) ) ; 
                 c h e c k E q u a l ( - 2 5 5 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - F F ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( - 1 6 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 2 0 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( - 2 5 5 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - f f ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( - 1 1 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - b ' ,   u n d e f i n e d ,   1 6 ) ) ; 
                 c h e c k E q u a l ( - 1 2 7 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 7 7 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( - 1 0 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 2 ' ,   u n d e f i n e d ,   8 ) ) ; 
                 c h e c k E q u a l ( - 3 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 1 ' ,   u n d e f i n e d ,   2 ) ) ; 
                 c h e c k E q u a l ( - 1 5 ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 1 1 1 1 ' ,   u n d e f i n e d ,   2 ) ) ;   / /   s t r i n g 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' a b c ' ) ) ; 
                 c h e c k E q u a l ( n u l l ,   s t r i n g T o I n t e g e r D e f a u l t ( ' a b c ' ,   n u l l ,   1 0 ) ) ; 
                 c h e c k E q u a l ( N a N ,   s t r i n g T o I n t e g e r D e f a u l t ( ' a b c ' ,   N a N ,   1 0 ) ) ;   / /   s p a c e   s t r i n g 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( '   ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( '  0' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 3 . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 3 1 4 e - 2 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 0 . 0 3 1 4 E + 2 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 e - 1 7 ' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n   d e t a i l 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 . ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 . 1 e ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 . 1 e + ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 e + 5 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 e - 5 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 . e ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 1 . e + ' ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' + 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' + 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' - 0 x 1 2 3 ' ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' I n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' i n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' i n f ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( ' i n f o ' ) ) ;   / /   N u m b e r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( 1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( - 1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( 1 . 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( - 1 . 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( I n f i n i t y ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( - I n f i n i t y ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( N a N ) ; 
                 } ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( n u l l ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( u n d e f i n e d ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( { } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( { 
                         a :   1 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( [ ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( [ 1 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( [ 1 2 3 ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s t r i n g T o I n t e g e r D e f a u l t ( [ 1 ,   2 ] ) ; 
                 } ) ) ;   / /   E x c e p t i o n 
 
                 v a r   i   =   0 ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r D e f a u l t ( 1 2 3 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r D e f a u l t   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 ' ,   u n d e f i n e d ,   2 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r D e f a u l t   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 ' ,   u n d e f i n e d ,   2 . 5 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r D e f a u l t   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 ' ,   u n d e f i n e d ,   1 ) ; 
                 } ,   n e w   R a n g e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r D e f a u l t   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 ' ,   u n d e f i n e d ,   3 6 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r D e f a u l t   e x c e p t i o n   " . c o n c a t ( i ) ) ; 
                 i   + =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s t r i n g T o I n t e g e r D e f a u l t ( ' 1 2 3 ' ,   u n d e f i n e d ,   3 7 ) ; 
                 } ,   n e w   R a n g e E r r o r ( ) . n a m e ) ,   " t e s t   s t r i n g T o I n t e g e r D e f a u l t   e x c e p t i o n   " . c o n c a t ( i ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( - 1 2 3 ,   s t r i n g T o I n t e g e r D e f a u l t ( { 
                     v a l u e :   ' - 0 1 2 3 ' 
                 } ) ) ; 
                 c h e c k E q u a l ( n u l l ,   s t r i n g T o I n t e g e r D e f a u l t ( { 
                     v a l u e :   ' a b c ' , 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s t r i n g T o I n t e g e r D e f a u l t ( { 
                     v a l u e :   ' a b c ' 
                 } ) ) ; 
                 c h e c k E q u a l ( - 1 5 ,   s t r i n g T o I n t e g e r D e f a u l t ( { 
                     v a l u e :   ' - 1 1 1 1 ' , 
                     r a d i x :   2 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ v a l u e T o I n t e g e r   =   f u n c t i o n   t e s t _ v a l u e T o I n t e g e r ( )   { 
             i t ( ' t e s t _ v a l u e T o I n t e g e r ' ,   f u n c t i o n   ( )   { 
                 / /   I n t e g e r 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o I n t e g e r ( ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o I n t e g e r ( ' 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o I n t e g e r ( ' + 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   v a l u e T o I n t e g e r ( ' - 0 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '   1 2 3 ' ) ,   ' 1 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3   ' ) ,   ' 2 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '   1 2 3   ' ) ,   ' 3 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '  01 2 3 ' ) ,   ' 4 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3  0' ) ,   ' 5 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '  01 2 3  0' ) ,   ' 6 ' ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3   0 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 0   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1   1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' a 1 2 3 ' ) ) ;   / /   D e c i m a l 
 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o I n t e g e r ( ' 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o I n t e g e r ( ' 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o I n t e g e r ( ' + 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   v a l u e T o I n t e g e r ( ' - 0 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 4 ,   v a l u e T o I n t e g e r ( ' 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 4 ,   v a l u e T o I n t e g e r ( ' 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 4 ,   v a l u e T o I n t e g e r ( ' + 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( - 1 2 4 ,   v a l u e T o I n t e g e r ( ' - 0 1 2 3 . 5 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '   1 2 3 . 4   ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '  01 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '  01 2 3 . 4  0' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3 . 4   0 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 0   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1   1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3   . 4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3 .   4 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3 . 4 a ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' a 1 2 3 . 4 ' ) ) ; 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o I n t e g e r ( ' 1 2 3 . 4 5 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 2 3 . 4 . 5 ' ) ) ;   / /   s t r i n g 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' a b c ' ) ) ;   / /   s p a c e   s t r i n g 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '   ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( '  0' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n 
 
                 c h e c k E q u a l ( 3 ,   v a l u e T o I n t e g e r ( 3 . 1 4 ) ) ; 
                 c h e c k E q u a l ( 3 ,   v a l u e T o I n t e g e r ( ' 3 . 1 4 ' ) ) ; 
                 c h e c k E q u a l ( 3 ,   v a l u e T o I n t e g e r ( ' 3 1 4 e - 2 ' ) ) ; 
                 c h e c k E q u a l ( 3 ,   v a l u e T o I n t e g e r ( ' 0 . 0 3 1 4 E + 2 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   v a l u e T o I n t e g e r ( ' . 1 4 ' ) ) ;   / /   e x p o n e n t i a l   n o t a t i o n   d e t a i l 
 
                 c h e c k E q u a l ( 1 ,   v a l u e T o I n t e g e r ( ' 1 . ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 . 1 e ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 . 1 e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   v a l u e T o I n t e g e r ( ' 1 e + 5 ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   v a l u e T o I n t e g e r ( ' 1 e - 5 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 . e ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 1 . e + ' ) ) ; 
                 c h e c k E q u a l ( 1 0 0 0 0 0 ,   v a l u e T o I n t e g e r ( ' 1 . e + 5 ' ) ) ;   / /   N o n - d e c i m a l   n u m b e r 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' + 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' - 0 x 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' 0 o 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' + 0 o 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' - 0 o 1 2 3 ' ) ) ;   / /   S p a c i a l   n u m b e r 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' I n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' i n f i n i t y ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' i n f ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' i n f o ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' N a N ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' n a n ' ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( ' n a ' ) ) ;   / /   N u m b e r 
 
                 c h e c k E q u a l ( 1 2 3 ,   v a l u e T o I n t e g e r ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( - 1 2 3 ,   v a l u e T o I n t e g e r ( - 1 2 3 ) ) ; 
                 c h e c k E q u a l ( 1 ,   v a l u e T o I n t e g e r ( 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( 2 ,   v a l u e T o I n t e g e r ( 1 . 6 7 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   v a l u e T o I n t e g e r ( - 1 . 2 3 ) ) ; 
                 c h e c k E q u a l ( - 2 ,   v a l u e T o I n t e g e r ( - 1 . 6 7 ) ) ; 
                 c h e c k E q u a l ( I n f i n i t y ,   v a l u e T o I n t e g e r ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( - I n f i n i t y ,   v a l u e T o I n t e g e r ( - I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( N a N ) ) ;   / /   O t h e r   t h a n   n u m b e r   t y p e 
 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( n u l l ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( { } ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( { 
                     a :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( [ ] ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( [ 1 ] ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( [ 1 2 3 ] ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r ( [ 1 ,   2 ] ) ) ;   / /   D e f a u l t 
 
                 c h e c k E q u a l ( n u l l ,   v a l u e T o I n t e g e r D e f a u l t ( ' ' ,   n u l l ) ) ; 
                 c h e c k E q u a l ( n u l l ,   v a l u e T o I n t e g e r D e f a u l t ( { 
                     v a l u e :   ' ' , 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( n u l l ,   v a l u e T o I n t e g e r D e f a u l t ( ' ' ,   { 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( 2 ,   v a l u e T o I n t e g e r D e f a u l t ( ' 1 . 5 ' ,   n u l l ) ) ; 
                 c h e c k E q u a l ( 2 ,   v a l u e T o I n t e g e r D e f a u l t ( { 
                     v a l u e :   ' 1 . 5 ' , 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( 2 ,   v a l u e T o I n t e g e r D e f a u l t ( ' 1 . 5 ' ,   { 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( 1 ,   v a l u e T o I n t e g e r D e f a u l t ( ' 1 ' ,   n u l l ) ) ; 
                 c h e c k E q u a l ( 1 ,   v a l u e T o I n t e g e r D e f a u l t ( { 
                     v a l u e :   ' 1 ' , 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( 1 ,   v a l u e T o I n t e g e r D e f a u l t ( ' 1 ' ,   { 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r D e f a u l t ( N a N ,   n u l l ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r D e f a u l t ( { 
                     v a l u e :   N a N , 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
                 c h e c k E q u a l ( N a N ,   v a l u e T o I n t e g e r D e f a u l t ( N a N ,   { 
                     d e f a u l t V a l u e :   n u l l 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         t e s t _ S t r i n g C a s t _ s t a n d a r d ( ) ; 
         t e s t _ t o S t r i n g _ s t a n d a r d ( ) ; 
         t e s t _ n u m b e r T o S t r i n g ( ) ; 
         t e s t _ v a l u e T o S t r i n g ( ) ; 
         t e s t _ N u m b e r C a s t _ s t a n d a r d ( ) ; 
         t e s t _ p a r s e F l o a t _ s t a n d a r d ( ) ; 
         t e s t _ p a r s e I n t _ s t a n d a r d ( ) ; 
         t e s t _ s t r i n g T o N u m b e r ( ) ; 
         t e s t _ s t r i n g T o N u m b e r D e f a u l t ( ) ; 
         t e s t _ v a l u e T o N u m b e r ( ) ; 
         t e s t _ s t r i n g T o I n t e g e r ( ) ; 
         t e s t _ s t r i n g T o I n t e g e r D e f a u l t ( ) ; 
         t e s t _ v a l u e T o I n t e g e r ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ c o n v e r t   =   t e s t _ e x e c u t e _ c o n v e r t ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ c o n v e r t :   t e s t _ e x e c u t e _ c o n v e r t 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) , 
 
 / * * * /   8 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ n u m b e r   =   v o i d   0 ; 
 
 / *   e s l i n t - d i s a b l e   s p a c e - i n - p a r e n s   * / 
 
 / *   e s l i n t - d i s a b l e   m a x - l e n   * / 
 
 / *   e s l i n t - d i s a b l e   n o - v a r   * / 
 v a r   t e s t _ e x e c u t e _ n u m b e r   =   f u n c t i o n   t e s t _ e x e c u t e _ n u m b e r ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ n u m b e r ' ,   f u n c t i o n   ( )   { 
         v a r   _ p a r t s $ t e s t 2   =   p a r t s . t e s t , 
                 c h e c k E q u a l   =   _ p a r t s $ t e s t 2 . c h e c k E q u a l , 
                 i s T h r o w n   =   _ p a r t s $ t e s t 2 . i s T h r o w n , 
                 t e s t C o u n t e r   =   _ p a r t s $ t e s t 2 . t e s t C o u n t e r ; 
         v a r   _ p a r t s $ n u m b e r   =   p a r t s . n u m b e r , 
                 i s M u l t i p l e s   =   _ p a r t s $ n u m b e r . i s M u l t i p l e s , 
                 i s E v e n   =   _ p a r t s $ n u m b e r . i s E v e n , 
                 i s O d d   =   _ p a r t s $ n u m b e r . i s O d d , 
                 r o u n d   =   _ p a r t s $ n u m b e r . r o u n d , 
                 r o u n d U p   =   _ p a r t s $ n u m b e r . r o u n d U p , 
                 r o u n d D o w n   =   _ p a r t s $ n u m b e r . r o u n d D o w n , 
                 n e a r E q u a l   =   _ p a r t s $ n u m b e r . n e a r E q u a l , 
                 i n R a n g e   =   _ p a r t s $ n u m b e r . i n R a n g e , 
                 r a n d o m I n t   =   _ p a r t s $ n u m b e r . r a n d o m I n t ; 
 
         v a r   t e s t _ i s M u l t i p l e s   =   f u n c t i o n   t e s t _ i s M u l t i p l e s ( )   { 
             i t ( ' t e s t _ i s M u l t i p l e s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s M u l t i p l e s ( 1 0 ,   2 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s M u l t i p l e s ( 1 0 ,   5 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s M u l t i p l e s ( 1 0 ,   3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s M u l t i p l e s ( 9 ,   2 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s M u l t i p l e s ( 9 ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s M u l t i p l e s ( 9 ,   3 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s M u l t i p l e s ( 0 ,   2 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s M u l t i p l e s ( - 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s M u l t i p l e s ( - 2 ,   2 ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( t r u e ,   i s M u l t i p l e s ( { 
                     n u m b e r :   1 0 , 
                     r a d i x :   2 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s M u l t i p l e s ( { 
                     n u m b e r :   9 , 
                     r a d i x :   2 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i s M u l t i p l e s ( 1 0 ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i s M u l t i p l e s ( 1 0 . 1 ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i s M u l t i p l e s ( 1 0 ,   2 . 2 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ M a t h _ r o u n d   =   f u n c t i o n   t e s t _ M a t h _ r o u n d ( )   { 
             i t ( ' t e s t _ M a t h _ r o u n d ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 5 ,   M a t h . r o u n d ( 5 ) ) ; 
                 c h e c k E q u a l ( 5 ,   M a t h . r o u n d ( 5 . 4 ) ) ; 
                 c h e c k E q u a l ( 6 ,   M a t h . r o u n d ( 5 . 5 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   M a t h . r o u n d ( - 5 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   M a t h . r o u n d ( - 5 . 4 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   M a t h . r o u n d ( - 5 . 5 ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ r o u n d   =   f u n c t i o n   t e s t _ r o u n d ( )   { 
             i t ( ' t e s t _ r o u n d ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 5 ,   r o u n d ( 5 ) ) ; 
                 c h e c k E q u a l ( 5 ,   r o u n d ( 5 . 4 ) ) ; 
                 c h e c k E q u a l ( 6 ,   r o u n d ( 5 . 5 ) ) ; 
                 c h e c k E q u a l ( 5 ,   r o u n d ( 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( 5 ,   r o u n d ( 5 . 4 ,   0 ) ) ; 
                 c h e c k E q u a l ( 6 ,   r o u n d ( 5 . 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( 5 . 4 ,   r o u n d ( 5 . 4 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 5 ,   r o u n d ( 5 . 4 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 5 ,   r o u n d ( 5 . 5 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 6 ,   r o u n d ( 5 . 5 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 4 ,   r o u n d ( 5 . 0 4 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 5 ,   r o u n d ( 5 . 0 4 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 5 ,   r o u n d ( 5 . 0 5 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 6 ,   r o u n d ( 5 . 0 5 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 4 0 ,   r o u n d ( 5 4 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 ,   r o u n d ( 5 4 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 ,   r o u n d ( 5 5 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 6 0 ,   r o u n d ( 5 5 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 4 0 0 ,   r o u n d ( 5 4 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 0 ,   r o u n d ( 5 4 5 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 0 ,   r o u n d ( 5 5 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( 5 6 0 0 ,   r o u n d ( 5 5 5 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d ( - 5 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d ( - 5 . 4 ) ) ; 
                 c h e c k E q u a l ( - 6 ,   r o u n d ( - 5 . 5 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d ( - 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d ( - 5 . 4 ,   0 ) ) ; 
                 c h e c k E q u a l ( - 6 ,   r o u n d ( - 5 . 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( - 5 . 4 ,   r o u n d ( - 5 . 4 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 5 ,   r o u n d ( - 5 . 4 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 5 ,   r o u n d ( - 5 . 5 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 6 ,   r o u n d ( - 5 . 5 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 4 ,   r o u n d ( - 5 . 0 4 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 5 ,   r o u n d ( - 5 . 0 4 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 5 ,   r o u n d ( - 5 . 0 5 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 6 ,   r o u n d ( - 5 . 0 5 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 4 0 ,   r o u n d ( - 5 4 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 ,   r o u n d ( - 5 4 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 ,   r o u n d ( - 5 5 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 6 0 ,   r o u n d ( - 5 5 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 4 0 0 ,   r o u n d ( - 5 4 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 0 ,   r o u n d ( - 5 4 5 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 0 ,   r o u n d ( - 5 5 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 6 0 0 ,   r o u n d ( - 5 5 5 0 ,   - 2 ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( 6 ,   r o u n d ( { 
                     v a l u e :   5 . 5 
                 } ) ) ; 
                 c h e c k E q u a l ( 5 . 0 6 ,   r o u n d ( { 
                     v a l u e :   5 . 0 5 5 , 
                     d i g i t :   2 
                 } ) ) ; 
                 c h e c k E q u a l ( 5 6 0 0 ,   r o u n d ( { 
                     v a l u e :   5 5 5 0 , 
                     d i g i t :   - 2 
                 } ) ) ; 
                 c h e c k E q u a l ( 5 6 0 0 ,   r o u n d ( 5 5 5 0 ,   { 
                     d i g i t :   - 2 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r o u n d ( 5 . 5 ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r o u n d ( 5 . 5 ,   2 . 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r o u n d ( ' a ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ r o u n d U p   =   f u n c t i o n   t e s t _ r o u n d U p ( )   { 
             i t ( ' t e s t _ r o u n d U p ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 5 ,   r o u n d U p ( 5 ) ) ; 
                 c h e c k E q u a l ( 6 ,   r o u n d U p ( 5 . 4 ) ) ; 
                 c h e c k E q u a l ( 6 ,   r o u n d U p ( 5 . 5 ) ) ; 
                 c h e c k E q u a l ( 5 ,   r o u n d U p ( 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( 6 ,   r o u n d U p ( 5 . 4 ,   0 ) ) ; 
                 c h e c k E q u a l ( 6 ,   r o u n d U p ( 5 . 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( 5 . 5 ,   r o u n d U p ( 5 . 4 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 5 ,   r o u n d U p ( 5 . 4 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 6 ,   r o u n d U p ( 5 . 5 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 6 ,   r o u n d U p ( 5 . 5 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 5 ,   r o u n d U p ( 5 . 0 4 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 5 ,   r o u n d U p ( 5 . 0 4 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 6 ,   r o u n d U p ( 5 . 0 5 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 6 ,   r o u n d U p ( 5 . 0 5 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 ,   r o u n d U p ( 5 4 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 ,   r o u n d U p ( 5 4 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 6 0 ,   r o u n d U p ( 5 5 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 6 0 ,   r o u n d U p ( 5 5 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 0 ,   r o u n d U p ( 5 4 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 0 ,   r o u n d U p ( 5 4 5 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( 5 6 0 0 ,   r o u n d U p ( 5 5 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( 5 6 0 0 ,   r o u n d U p ( 5 5 5 0 ,   - 2 ) ) ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d U p ( - 5 ) ) ; 
                 c h e c k E q u a l ( - 6 ,   r o u n d U p ( - 5 . 4 ) ) ; 
                 c h e c k E q u a l ( - 6 ,   r o u n d U p ( - 5 . 5 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d U p ( - 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( - 6 ,   r o u n d U p ( - 5 . 4 ,   0 ) ) ; 
                 c h e c k E q u a l ( - 6 ,   r o u n d U p ( - 5 . 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( - 5 . 5 ,   r o u n d U p ( - 5 . 4 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 5 ,   r o u n d U p ( - 5 . 4 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 6 ,   r o u n d U p ( - 5 . 5 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 6 ,   r o u n d U p ( - 5 . 5 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 5 ,   r o u n d U p ( - 5 . 0 4 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 5 ,   r o u n d U p ( - 5 . 0 4 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 6 ,   r o u n d U p ( - 5 . 0 5 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 6 ,   r o u n d U p ( - 5 . 0 5 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 ,   r o u n d U p ( - 5 4 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 ,   r o u n d U p ( - 5 4 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 6 0 ,   r o u n d U p ( - 5 5 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 6 0 ,   r o u n d U p ( - 5 5 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 0 ,   r o u n d U p ( - 5 4 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 0 ,   r o u n d U p ( - 5 4 5 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 6 0 0 ,   r o u n d U p ( - 5 5 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 6 0 0 ,   r o u n d U p ( - 5 5 5 0 ,   - 2 ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( 6 ,   r o u n d U p ( { 
                     v a l u e :   5 . 5 
                 } ) ) ; 
                 c h e c k E q u a l ( 5 . 0 6 ,   r o u n d U p ( { 
                     v a l u e :   5 . 0 5 5 , 
                     d i g i t :   2 
                 } ) ) ; 
                 c h e c k E q u a l ( 5 6 0 0 ,   r o u n d U p ( { 
                     v a l u e :   5 5 5 0 , 
                     d i g i t :   - 2 
                 } ) ) ; 
                 c h e c k E q u a l ( 5 6 0 0 ,   r o u n d U p ( 5 5 5 0 ,   { 
                     d i g i t :   - 2 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r o u n d U p ( 5 . 5 ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r o u n d U p ( 5 . 5 ,   2 . 2 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ r o u n d D o w n   =   f u n c t i o n   t e s t _ r o u n d D o w n ( )   { 
             i t ( ' t e s t _ r o u n d D o w n ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 5 ,   r o u n d D o w n ( 5 ) ) ; 
                 c h e c k E q u a l ( 5 ,   r o u n d D o w n ( 5 . 4 ) ) ; 
                 c h e c k E q u a l ( 5 ,   r o u n d D o w n ( 5 . 5 ) ) ; 
                 c h e c k E q u a l ( 5 ,   r o u n d D o w n ( 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( 5 ,   r o u n d D o w n ( 5 . 4 ,   0 ) ) ; 
                 c h e c k E q u a l ( 5 ,   r o u n d D o w n ( 5 . 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( 5 . 4 ,   r o u n d D o w n ( 5 . 4 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 4 ,   r o u n d D o w n ( 5 . 4 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 5 ,   r o u n d D o w n ( 5 . 5 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 5 ,   r o u n d D o w n ( 5 . 5 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 4 ,   r o u n d D o w n ( 5 . 0 4 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 4 ,   r o u n d D o w n ( 5 . 0 4 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 5 ,   r o u n d D o w n ( 5 . 0 5 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 . 0 5 ,   r o u n d D o w n ( 5 . 0 5 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 4 0 ,   r o u n d D o w n ( 5 4 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 4 0 ,   r o u n d D o w n ( 5 4 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 ,   r o u n d D o w n ( 5 5 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 ,   r o u n d D o w n ( 5 5 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( 5 4 0 0 ,   r o u n d D o w n ( 5 4 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( 5 4 0 0 ,   r o u n d D o w n ( 5 4 5 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 0 ,   r o u n d D o w n ( 5 5 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( 5 5 0 0 ,   r o u n d D o w n ( 5 5 5 0 ,   - 2 ) ) ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d D o w n ( - 5 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d D o w n ( - 5 . 4 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d D o w n ( - 5 . 5 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d D o w n ( - 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d D o w n ( - 5 . 4 ,   0 ) ) ; 
                 c h e c k E q u a l ( - 5 ,   r o u n d D o w n ( - 5 . 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( - 5 . 4 ,   r o u n d D o w n ( - 5 . 4 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 4 ,   r o u n d D o w n ( - 5 . 4 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 5 ,   r o u n d D o w n ( - 5 . 5 4 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 5 ,   r o u n d D o w n ( - 5 . 5 5 ,   1 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 4 ,   r o u n d D o w n ( - 5 . 0 4 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 4 ,   r o u n d D o w n ( - 5 . 0 4 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 5 ,   r o u n d D o w n ( - 5 . 0 5 4 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 . 0 5 ,   r o u n d D o w n ( - 5 . 0 5 5 ,   2 ) ) ; 
                 c h e c k E q u a l ( - 5 4 0 ,   r o u n d D o w n ( - 5 4 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 4 0 ,   r o u n d D o w n ( - 5 4 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 ,   r o u n d D o w n ( - 5 5 4 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 ,   r o u n d D o w n ( - 5 5 5 ,   - 1 ) ) ; 
                 c h e c k E q u a l ( - 5 4 0 0 ,   r o u n d D o w n ( - 5 4 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 4 0 0 ,   r o u n d D o w n ( - 5 4 5 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 0 ,   r o u n d D o w n ( - 5 5 4 0 ,   - 2 ) ) ; 
                 c h e c k E q u a l ( - 5 5 0 0 ,   r o u n d D o w n ( - 5 5 5 0 ,   - 2 ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( 5 ,   r o u n d D o w n ( { 
                     v a l u e :   5 . 5 
                 } ) ) ; 
                 c h e c k E q u a l ( 5 . 0 5 ,   r o u n d D o w n ( { 
                     v a l u e :   5 . 0 5 5 , 
                     d i g i t :   2 
                 } ) ) ; 
                 c h e c k E q u a l ( 5 5 0 0 ,   r o u n d D o w n ( { 
                     v a l u e :   5 5 5 0 , 
                     d i g i t :   - 2 
                 } ) ) ; 
                 c h e c k E q u a l ( 5 5 0 0 ,   r o u n d D o w n ( 5 5 5 0 ,   { 
                     d i g i t :   - 2 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r o u n d D o w n ( 5 . 5 ,   2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r o u n d D o w n ( 5 . 5 ,   2 . 2 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ n e a r E q u a l   =   f u n c t i o n   t e s t _ n e a r E q u a l ( )   { 
             i t ( ' t e s t _ n e a r E q u a l ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   n e a r E q u a l ( 0 . 0 4 9 9 9 9 ,   0 . 0 5 0 0 1 1 ,   0 . 0 0 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   n e a r E q u a l ( 0 . 0 5 0 ,   0 . 0 5 1 ,   0 . 0 0 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   n e a r E q u a l ( 0 . 0 5 0 ,   0 . 0 5 0 9 ,   0 . 0 0 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   n e a r E q u a l ( 0 . 0 5 0 ,   0 . 0 5 1 0 ,   0 . 0 0 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   n e a r E q u a l ( 0 . 0 5 0 ,   0 . 0 5 1 0 0 0 0 0 1 ,   0 . 0 0 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   n e a r E q u a l ( 0 . 0 5 0 0 1 1 ,   0 . 0 4 9 9 9 9 ,   0 . 0 0 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   n e a r E q u a l ( 0 . 0 5 1 ,   0 . 0 5 0 ,   0 . 0 0 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   n e a r E q u a l ( 0 . 0 5 0 9 ,   0 . 0 5 0 ,   0 . 0 0 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   n e a r E q u a l ( 0 . 0 5 1 0 ,   0 . 0 5 0 ,   0 . 0 0 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   n e a r E q u a l ( 0 . 0 5 1 0 0 0 0 1 ,   0 . 0 5 0 ,   0 . 0 0 1 ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( f a l s e ,   n e a r E q u a l ( { 
                     v a l u e 1 :   0 . 0 5 0 , 
                     v a l u e 2 :   0 . 0 5 1 0 0 0 0 0 1 , 
                     d i f f :   0 . 0 0 1 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   n e a r E q u a l ( { 
                     v a l u e 1 :   0 . 0 5 0 0 1 1 , 
                     v a l u e 2 :   0 . 0 4 9 9 9 9 , 
                     d i f f :   0 . 0 0 1 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     n e a r E q u a l ( 0 . 5 0 ,   0 . 5 1 ,   0 . 0 0 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     n e a r E q u a l ( ' 0 . 5 0 ' ,   0 . 5 1 ,   0 . 0 0 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     n e a r E q u a l ( 0 . 5 0 ,   ' 0 . 5 1 ' ,   0 . 0 0 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     n e a r E q u a l ( 0 . 5 0 ,   0 . 5 1 ,   ' 0 . 0 0 1 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     n e a r E q u a l ( 0 . 5 0 ,   0 . 5 1 ,   - 0 . 0 0 1 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n R a n g e   =   f u n c t i o n   t e s t _ i n R a n g e ( )   { 
             i t ( ' t e s t _ i n R a n g e ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i n R a n g e ( 2 0 ,   1 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n R a n g e ( 1 0 ,   1 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n R a n g e ( 3 0 ,   1 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n R a n g e ( 9 ,   1 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n R a n g e ( 3 1 ,   1 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n R a n g e ( 9 . 9 9 ,   1 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n R a n g e ( 3 0 . 0 1 ,   1 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n R a n g e ( 1 0 ,   1 0 ,   1 0 ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( t r u e ,   i n R a n g e ( { 
                     v a l u e :   3 0 , 
                     f r o m :   1 0 , 
                     t o :   3 0 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n R a n g e ( { 
                     v a l u e :   9 , 
                     f r o m :   1 0 , 
                     t o :   3 0 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n R a n g e ( 2 0 ,   1 0 ,   3 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n R a n g e ( ' 2 0 ' ,   1 0 ,   3 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n R a n g e ( 2 0 ,   ' 1 0 ' ,   3 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n R a n g e ( 2 0 ,   1 0 ,   ' 3 0 ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ r a n d o m I n t   =   f u n c t i o n   t e s t _ r a n d o m I n t ( )   { 
             i t ( ' t e s t _ r a n d o m I n t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 5 ,   r a n d o m I n t ( 5 ,   5 ) ) ; 
                 v a r   r e s u l t   =   r a n d o m I n t ( 1 ,   1 0 ) ; 
                 c h e c k E q u a l ( t r u e ,   i n R a n g e ( r e s u l t ,   1 ,   1 0 ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( 1 0 ,   r a n d o m I n t ( { 
                     m i n :   1 0 , 
                     m a x :   1 0 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r a n d o m I n t ( 1 0 ,   1 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r a n d o m I n t ( ' 1 0 ' ,   1 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r a n d o m I n t ( 1 0 ,   ' 1 0 ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         t e s t _ i s M u l t i p l e s ( ) ; 
         t e s t _ M a t h _ r o u n d ( ) ; 
         t e s t _ r o u n d ( ) ; 
         t e s t _ r o u n d U p ( ) ; 
         t e s t _ r o u n d D o w n ( ) ; 
         t e s t _ n e a r E q u a l ( ) ; 
         t e s t _ i n R a n g e ( ) ; 
         t e s t _ r a n d o m I n t ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ n u m b e r   =   t e s t _ e x e c u t e _ n u m b e r ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ n u m b e r :   t e s t _ e x e c u t e _ n u m b e r 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) 
 
 } ] ) ; 