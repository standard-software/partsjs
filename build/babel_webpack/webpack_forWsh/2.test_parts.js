( t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   =   t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   | |   [ ] ) . p u s h ( [ [ 2 ] , { 
 
 / * * * /   1 3 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ c o n s o l e H o o k   =   v o i d   0 ; 
 
 / *   e s l i n t - d i s a b l e   m a x - l e n   * / 
 
 / *   e s l i n t - d i s a b l e   n o - v a r   * / 
 v a r   t e s t _ e x e c u t e _ c o n s o l e H o o k   =   f u n c t i o n   t e s t _ e x e c u t e _ c o n s o l e H o o k ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ c o n s o l e H o o k ' ,   f u n c t i o n   ( )   { 
         v a r   _ p a r t s $ t e s t 2   =   p a r t s . t e s t , 
                 c h e c k E q u a l   =   _ p a r t s $ t e s t 2 . c h e c k E q u a l , 
                 i s T h r o w n   =   _ p a r t s $ t e s t 2 . i s T h r o w n ; 
         v a r   c o n s o l e H o o k   =   p a r t s . s y s t e m . c o n s o l e H o o k ; 
 
         v a r   t e s t _ c o n s o l e H o o k   =   f u n c t i o n   t e s t _ c o n s o l e H o o k ( m e t h o d N a m e )   { 
             i t ( ' t e s t _ c o n s o l e H o o k '   +   '   '   +   m e t h o d N a m e ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s G o o g l e A p p s S c r i p t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 v a r   c o n s o l e O u t p u t   =   ' ' ; 
 
                 v a r   c o n s o l e H o o k _ h o o k   =   f u n c t i o n   c o n s o l e H o o k _ h o o k ( )   { 
                     c o n s o l e H o o k . h o o k ( m e t h o d N a m e ,   f u n c t i o n   ( a r g s )   { 
                         c o n s o l e O u t p u t   + =   a r g s   +   ' ; ' ; 
                     } ) ; 
                 } ; 
 
                 v a r   c o n s o l e M e t h o d   =   c o n s o l e . l o g ; 
 
                 v a r   t e s t C o n s o l e M e t h o d   =   f u n c t i o n   t e s t C o n s o l e M e t h o d ( )   { 
                     c o n s o l e [ m e t h o d N a m e ] ( ' d e b u g 1 ' ) ; 
                     c o n s o l e [ m e t h o d N a m e ] ( ' d e b u g 2 ' ) ; 
                     c o n s o l e [ m e t h o d N a m e ] ( ' r e l e a s e 1 ' ) ; 
                     c o n s o l e [ m e t h o d N a m e ] ( ' r e l e a s e 2 ' ) ; 
                 } ; 
 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 1 ; d e b u g 2 ; r e l e a s e 1 ; r e l e a s e 2 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ ' d e b u g 1 ' ] ,   [ ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 1 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ ' d e b u g ' ] ,   [ ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 1 ; d e b u g 2 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ ' d e b u g 1 ' ,   ' r e l e a s e 1 ' ] ,   [ ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 1 ; r e l e a s e 1 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ / d e b u g ? / ] ,   [ ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 1 ; d e b u g 2 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ / d e b u g ? / ] ,   [ ' d e b u g 1 ' ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 2 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ ] ,   [ ' r e l e a s e 1 ' ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 1 ; d e b u g 2 ; r e l e a s e 2 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ ] ,   [ / d e b u g ? / ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' r e l e a s e 1 ; r e l e a s e 2 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ ' d e b u g 1 ' ,   ' d e b u g 2 ' ] ,   [ ' d e b u g 1 ' ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 2 ; ' ,   c o n s o l e O u t p u t ) ; 
 
                 v a r   t e s t C o n s o l e M e t h o d   =   f u n c t i o n   t e s t C o n s o l e M e t h o d ( )   { 
                     c o n s o l e [ m e t h o d N a m e ] ( ' d e b u g 1 ' ,   ' a ' ,   ' m e s s a g e A ' ) ; 
                     c o n s o l e [ m e t h o d N a m e ] ( ' d e b u g 2 ' ,   ' b ' ,   ' m e s s a g e B ' ) ; 
                     c o n s o l e [ m e t h o d N a m e ] ( ' r e l e a s e 1 ' ,   ' a ' ,   ' m e s s a g e C ' ) ; 
                     c o n s o l e [ m e t h o d N a m e ] ( ' r e l e a s e 2 ' ,   ' b ' ,   ' m e s s a g e D ' ) ; 
                 } ; 
 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ ' d e b u g ' ,   '   a   ' ] ,   [ ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 1 ; d e b u g 2 ; r e l e a s e 1 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ ' d e b u g ' ] ,   [ '   a   ' ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' d e b u g 2 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ '   b   ' ] ,   [ ' m e s s a g e B ' ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' r e l e a s e 2 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e O u t p u t   =   ' ' ; 
                 c o n s o l e H o o k _ h o o k ( ) ; 
                 c o n s o l e H o o k . a c c e p t ( m e t h o d N a m e ,   [ ' m e s s a g e D ' ] ,   [ ] ,   c o n s o l e [ m e t h o d N a m e ] ) ; 
                 t e s t C o n s o l e M e t h o d ( ) ; 
                 c o n s o l e H o o k . u n H o o k ( m e t h o d N a m e ) ; 
                 c h e c k E q u a l ( ' r e l e a s e 2 ; ' ,   c o n s o l e O u t p u t ) ; 
                 c o n s o l e H o o k . h o o k ( m e t h o d N a m e ,   c o n s o l e M e t h o d ) ; 
             } ) ; 
         } ; 
 
         t e s t _ c o n s o l e H o o k ( ' l o g ' ) ; 
         t e s t _ c o n s o l e H o o k ( ' i n f o ' ) ; 
         t e s t _ c o n s o l e H o o k ( ' w a r n ' ) ; 
         t e s t _ c o n s o l e H o o k ( ' e r r o r ' ) ; 
         t e s t _ c o n s o l e H o o k ( ' d e b u g ' ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ c o n s o l e H o o k   =   t e s t _ e x e c u t e _ c o n s o l e H o o k ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ c o n s o l e H o o k :   t e s t _ e x e c u t e _ c o n s o l e H o o k 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) , 
 
 / * * * /   4 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ s y n t a x   =   v o i d   0 ; 
 
 f u n c t i o n   _ t y p e o f ( o b j )   {   " @ b a b e l / h e l p e r s   -   t y p e o f " ;   i f   ( t y p e o f   S y m b o l   = = =   " f u n c t i o n "   & &   t y p e o f   S y m b o l . i t e r a t o r   = = =   " s y m b o l " )   {   _ t y p e o f   =   f u n c t i o n   _ t y p e o f ( o b j )   {   r e t u r n   t y p e o f   o b j ;   } ;   }   e l s e   {   _ t y p e o f   =   f u n c t i o n   _ t y p e o f ( o b j )   {   r e t u r n   o b j   & &   t y p e o f   S y m b o l   = = =   " f u n c t i o n "   & &   o b j . c o n s t r u c t o r   = = =   S y m b o l   & &   o b j   ! = =   S y m b o l . p r o t o t y p e   ?   " s y m b o l "   :   t y p e o f   o b j ;   } ;   }   r e t u r n   _ t y p e o f ( o b j ) ;   } 
 
 f u n c t i o n   _ c r e a t e F o r O f I t e r a t o r H e l p e r ( o ,   a l l o w A r r a y L i k e )   {   v a r   i t ;   i f   ( t y p e o f   S y m b o l   = = =   " u n d e f i n e d "   | |   o [ S y m b o l . i t e r a t o r ]   = =   n u l l )   {   i f   ( A r r a y . i s A r r a y ( o )   | |   ( i t   =   _ u n s u p p o r t e d I t e r a b l e T o A r r a y ( o ) )   | |   a l l o w A r r a y L i k e   & &   o   & &   t y p e o f   o . l e n g t h   = = =   " n u m b e r " )   {   i f   ( i t )   o   =   i t ;   v a r   i   =   0 ;   v a r   F   =   f u n c t i o n   F ( )   { } ;   r e t u r n   {   s :   F ,   n :   f u n c t i o n   n ( )   {   i f   ( i   > =   o . l e n g t h )   r e t u r n   {   d o n e :   t r u e   } ;   r e t u r n   {   d o n e :   f a l s e ,   v a l u e :   o [ i + + ]   } ;   } ,   e :   f u n c t i o n   e ( _ e )   {   t h r o w   _ e ;   } ,   f :   F   } ;   }   t h r o w   n e w   T y p e E r r o r ( " I n v a l i d   a t t e m p t   t o   i t e r a t e   n o n - i t e r a b l e   i n s t a n c e . \ n I n   o r d e r   t o   b e   i t e r a b l e ,   n o n - a r r a y   o b j e c t s   m u s t   h a v e   a   [ S y m b o l . i t e r a t o r ] ( )   m e t h o d . " ) ;   }   v a r   n o r m a l C o m p l e t i o n   =   t r u e ,   d i d E r r   =   f a l s e ,   e r r ;   r e t u r n   {   s :   f u n c t i o n   s ( )   {   i t   =   o [ S y m b o l . i t e r a t o r ] ( ) ;   } ,   n :   f u n c t i o n   n ( )   {   v a r   s t e p   =   i t . n e x t ( ) ;   n o r m a l C o m p l e t i o n   =   s t e p . d o n e ;   r e t u r n   s t e p ;   } ,   e :   f u n c t i o n   e ( _ e 2 )   {   d i d E r r   =   t r u e ;   e r r   =   _ e 2 ;   } ,   f :   f u n c t i o n   f ( )   {   t r y   {   i f   ( ! n o r m a l C o m p l e t i o n   & &   i t [ " r e t u r n " ]   ! =   n u l l )   i t [ " r e t u r n " ] ( ) ;   }   f i n a l l y   {   i f   ( d i d E r r )   t h r o w   e r r ;   }   }   } ;   } 
 
 f u n c t i o n   _ u n s u p p o r t e d I t e r a b l e T o A r r a y ( o ,   m i n L e n )   {   i f   ( ! o )   r e t u r n ;   i f   ( t y p e o f   o   = = =   " s t r i n g " )   r e t u r n   _ a r r a y L i k e T o A r r a y ( o ,   m i n L e n ) ;   v a r   n   =   O b j e c t . p r o t o t y p e . t o S t r i n g . c a l l ( o ) . s l i c e ( 8 ,   - 1 ) ;   i f   ( n   = = =   " O b j e c t "   & &   o . c o n s t r u c t o r )   n   =   o . c o n s t r u c t o r . n a m e ;   i f   ( n   = = =   " M a p "   | |   n   = = =   " S e t " )   r e t u r n   A r r a y . f r o m ( o ) ;   i f   ( n   = = =   " A r g u m e n t s "   | |   / ^ ( ? : U i | I ) n t ( ? : 8 | 1 6 | 3 2 ) ( ? : C l a m p e d ) ? A r r a y $ / . t e s t ( n ) )   r e t u r n   _ a r r a y L i k e T o A r r a y ( o ,   m i n L e n ) ;   } 
 
 f u n c t i o n   _ a r r a y L i k e T o A r r a y ( a r r ,   l e n )   {   i f   ( l e n   = =   n u l l   | |   l e n   >   a r r . l e n g t h )   l e n   =   a r r . l e n g t h ;   f o r   ( v a r   i   =   0 ,   a r r 2   =   n e w   A r r a y ( l e n ) ;   i   <   l e n ;   i + + )   {   a r r 2 [ i ]   =   a r r [ i ] ;   }   r e t u r n   a r r 2 ;   } 
 
 / *   e s l i n t - d i s a b l e   m a x - l e n   * / 
 
 / *   e s l i n t - d i s a b l e   n o - v a r   * / 
 v a r   t e s t _ e x e c u t e _ s y n t a x   =   f u n c t i o n   t e s t _ e x e c u t e _ s y n t a x ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             c h e c k E q u a l   =   _ p a r t s $ t e s t . c h e c k E q u a l , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t , 
             t e s t   =   _ p a r t s $ t e s t . t e s t , 
             e x p e c t   =   _ p a r t s $ t e s t . e x p e c t ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ s y n t a x ' ,   f u n c t i o n   ( )   { 
         v a r   _ p a r t s $ t e s t 2   =   p a r t s . t e s t , 
                 i s T h r o w n   =   _ p a r t s $ t e s t 2 . i s T h r o w n , 
                 i s T h r o w n V a l u e   =   _ p a r t s $ t e s t 2 . i s T h r o w n V a l u e , 
                 i s T h r o w n E x c e p t i o n   =   _ p a r t s $ t e s t 2 . i s T h r o w n E x c e p t i o n , 
                 i s N o t T h r o w n   =   _ p a r t s $ t e s t 2 . i s N o t T h r o w n ; 
         v a r   _ p a r t s $ t y p e   =   p a r t s . t y p e , 
                 i s U n d e f i n e d   =   _ p a r t s $ t y p e . i s U n d e f i n e d , 
                 i s N u l l   =   _ p a r t s $ t y p e . i s N u l l , 
                 i s B o o l e a n   =   _ p a r t s $ t y p e . i s B o o l e a n , 
                 i s N u m b e r   =   _ p a r t s $ t y p e . i s N u m b e r , 
                 i s I n t e g e r   =   _ p a r t s $ t y p e . i s I n t e g e r , 
                 i s S t r i n g   =   _ p a r t s $ t y p e . i s S t r i n g , 
                 i s F u n c t i o n   =   _ p a r t s $ t y p e . i s F u n c t i o n , 
                 i s O b j e c t   =   _ p a r t s $ t y p e . i s O b j e c t , 
                 i s A r r a y   =   _ p a r t s $ t y p e . i s A r r a y , 
                 i s D a t e   =   _ p a r t s $ t y p e . i s D a t e , 
                 i s R e g E x p   =   _ p a r t s $ t y p e . i s R e g E x p , 
                 i s E x c e p t i o n   =   _ p a r t s $ t y p e . i s E x c e p t i o n , 
                 i s U n d e f i n e d A l l   =   _ p a r t s $ t y p e . i s U n d e f i n e d A l l , 
                 i s N u l l A l l   =   _ p a r t s $ t y p e . i s N u l l A l l , 
                 i s B o o l e a n A l l   =   _ p a r t s $ t y p e . i s B o o l e a n A l l , 
                 i s N u m b e r A l l   =   _ p a r t s $ t y p e . i s N u m b e r A l l , 
                 i s I n t e g e r A l l   =   _ p a r t s $ t y p e . i s I n t e g e r A l l , 
                 i s S t r i n g A l l   =   _ p a r t s $ t y p e . i s S t r i n g A l l , 
                 i s F u n c t i o n A l l   =   _ p a r t s $ t y p e . i s F u n c t i o n A l l , 
                 i s O b j e c t A l l   =   _ p a r t s $ t y p e . i s O b j e c t A l l , 
                 i s A r r a y A l l   =   _ p a r t s $ t y p e . i s A r r a y A l l , 
                 i s D a t e A l l   =   _ p a r t s $ t y p e . i s D a t e A l l , 
                 i s R e g E x p A l l   =   _ p a r t s $ t y p e . i s R e g E x p A l l , 
                 i s E x c e p t i o n A l l   =   _ p a r t s $ t y p e . i s E x c e p t i o n A l l ; 
         v a r   _ p a r t s $ s y n t a x   =   p a r t s . s y n t a x , 
                 a s s e r t   =   _ p a r t s $ s y n t a x . a s s e r t , 
                 g u a r d   =   _ p a r t s $ s y n t a x . g u a r d , 
                 s c   =   _ p a r t s $ s y n t a x . s c , 
                 i f _   =   _ p a r t s $ s y n t a x . i f _ , 
                 s w i t c h _   =   _ p a r t s $ s y n t a x . s w i t c h _ , 
                 c a n U s e M a p   =   _ p a r t s $ s y n t a x . c a n U s e M a p , 
                 c a n U s e W e a k M a p   =   _ p a r t s $ s y n t a x . c a n U s e W e a k M a p , 
                 c a n U s e S e t   =   _ p a r t s $ s y n t a x . c a n U s e S e t , 
                 c a n U s e W e a k S e t   =   _ p a r t s $ s y n t a x . c a n U s e W e a k S e t , 
                 E n u m   =   _ p a r t s $ s y n t a x . E n u m , 
                 r e c u r s i v e   =   _ p a r t s $ s y n t a x . r e c u r s i v e , 
                 p a r t i a l   =   _ p a r t s $ s y n t a x . p a r t i a l ; 
         v a r   _ p a r t s $ c o m p a r e   =   p a r t s . c o m p a r e , 
                 e q u a l   =   _ p a r t s $ c o m p a r e . e q u a l , 
                 o r   =   _ p a r t s $ c o m p a r e . o r ; 
 
         v a r   t e s t _ a s s e r t   =   f u n c t i o n   t e s t _ a s s e r t ( )   { 
             i t ( ' t e s t _ a s s e r t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( t r u e ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( t r u e ,   ' t e s t ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( f a l s e ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( f a l s e ,   ' t e s t ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( f a l s e ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     / /   c o n s o l e . l o g ( e ) ; 
                     r e t u r n   e . n a m e   = = =   ' E r r o r '   & &   e . m e s s a g e   = = =   ' a s s e r t   e r r o r   v a l u e : f a l s e ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( f a l s e ,   ' t e s t ' ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     / /   c o n s o l e . l o g ( e ) ; 
                     r e t u r n   e . n a m e   = = =   ' E r r o r '   & &   e . m e s s a g e   = = =   ' a s s e r t   e r r o r   v a l u e : f a l s e   m e s s a g e : t e s t ' ; 
                 } ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( { 
                         v a l u e :   t r u e 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( { 
                         v a l u e :   t r u e , 
                         m e s s a g e :   ' t e s t ' 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( { 
                         v a l u e :   f a l s e 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( { 
                         v a l u e :   f a l s e , 
                         m e s s a g e :   ' t e s t ' 
                     } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( { 
                         v a l u e :   f a l s e 
                     } ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     / /   c o n s o l e . l o g ( e ) ; 
                     r e t u r n   e . n a m e   = = =   ' E r r o r '   & &   e . m e s s a g e   = = =   ' a s s e r t   e r r o r   v a l u e : f a l s e ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( { 
                         v a l u e :   f a l s e , 
                         m e s s a g e :   ' t e s t ' 
                     } ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     / /   c o n s o l e . l o g ( e ) ; 
                     r e t u r n   e . n a m e   = = =   ' E r r o r '   & &   e . m e s s a g e   = = =   ' a s s e r t   e r r o r   v a l u e : f a l s e   m e s s a g e : t e s t ' ; 
                 } ) ) ;   / /   e x c e p t i o n   T y p e E r r o r 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( 0 ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     / /   c o n s o l e . l o g ( e ) ; 
                     r e t u r n   e . n a m e   = = =   n e w   T y p e E r r o r ( ) . n a m e   & &   e . m e s s a g e   = = =   ' a s s e r t   a r g s ( v a l u e )   i s   n o t   b o o l e a n .   v a l u e : 0 ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( 0 ,   ' a b c ' ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     / /   c o n s o l e . l o g ( e ) ; 
                     r e t u r n   e . n a m e   = = =   n e w   T y p e E r r o r ( ) . n a m e   & &   e . m e s s a g e   = = =   ' a s s e r t   a r g s ( v a l u e )   i s   n o t   b o o l e a n .   v a l u e : 0   m e s s a g e : a b c ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     a s s e r t ( f a l s e ,   1 0 0 ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     / /   c o n s o l e . l o g ( e ) ; 
                     r e t u r n   e . n a m e   = = =   n e w   T y p e E r r o r ( ) . n a m e   & &   e . m e s s a g e   = = =   ' a s s e r t   a r g s ( m e s s a g e )   i s   n o t   s t r i n g .   v a l u e : f a l s e   m e s s a g e : 1 0 0 ' ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ g u a r d   =   f u n c t i o n   t e s t _ g u a r d ( )   { 
             i t ( ' t e s t _ g u a r d ' ,   f u n c t i o n   ( )   { 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ i s I n t e g e r A l l ( v a l u e 1 ) ,   [ i s I n t e g e r A l l ( v a l u e 2 ) ,   ' t e s t m e s s a g e ' ] ] ; 
                 } ; 
 
                 { 
                     / /   n o   g u a r d 
                     { 
                         v a r   r e s u l t 1   =   f a l s e ; 
                         v a r   v a l u e 1   =   1 ; 
                         v a r   v a l u e 2   =   2 ; 
 
                         i f   ( g u a r d ( g u a r d F u n c ) )   { 
                             r e s u l t 1   =   t r u e ; 
                         } 
 
                         c h e c k E q u a l ( f a l s e ,   r e s u l t 1 ,   ' n o   g u a r d ' ) ; 
                         c h e c k E q u a l ( ' ' ,   g u a r d . m e s s a g e ( ) ) ; 
                     }   / /   g u a r d 
 
                     { 
                         v a r   r e s u l t 1   =   f a l s e ; 
                         v a r   v a l u e 1   =   ' 1 ' ; 
                         v a r   v a l u e 2   =   2 ; 
 
                         i f   ( g u a r d ( g u a r d F u n c ) )   { 
                             r e s u l t 1   =   t r u e ; 
                         } 
 
                         c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   1 ' ) ; 
                         c h e c k E q u a l ( ' ' ,   g u a r d . m e s s a g e ( ) ) ; 
                         v a r   r e s u l t 1   =   f a l s e ; 
                         v a r   v a l u e 1   =   1 ; 
                         v a r   v a l u e 2   =   ' 2 ' ; 
 
                         i f   ( g u a r d ( g u a r d F u n c ) )   { 
                             r e s u l t 1   =   t r u e ; 
                         } 
 
                         c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   2 ' ) ; 
                         c h e c k E q u a l ( ' t e s t m e s s a g e ' ,   g u a r d . m e s s a g e ( ) ) ; 
                     }   / /   g u a r d   n o   r u n 
 
                     g u a r d . o f f ( ) ; 
                     { 
                         v a r   r e s u l t 1   =   f a l s e ; 
                         v a r   v a l u e 1   =   ' 1 ' ; 
                         v a r   v a l u e 2   =   2 ; 
 
                         i f   ( g u a r d ( g u a r d F u n c ) )   { 
                             r e s u l t 1   =   t r u e ; 
                         } 
 
                         c h e c k E q u a l ( f a l s e ,   r e s u l t 1 ,   ' g u a r d   o f f   1 ' ) ; 
                         c h e c k E q u a l ( ' ' ,   g u a r d . m e s s a g e ( ) ) ; 
                         v a r   r e s u l t 1   =   f a l s e ; 
                         v a r   v a l u e 1   =   1 ; 
                         v a r   v a l u e 2   =   ' 2 ' ; 
 
                         i f   ( g u a r d ( g u a r d F u n c ) )   { 
                             r e s u l t 1   =   t r u e ; 
                         } 
 
                         c h e c k E q u a l ( f a l s e ,   r e s u l t 1 ,   ' g u a r d   o f f   2 ' ) ; 
                         c h e c k E q u a l ( ' ' ,   g u a r d . m e s s a g e ( ) ) ; 
                     } 
                     g u a r d . o n ( ) ; 
                 }   / /   g u a r d   a r r a y   l e n g t h 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ i s I n t e g e r A l l ( v a l u e 1 ) ,   i s A r r a y A l l ( v a l u e 2 ) ,   1   < =   v a l u e 2 . l e n g t h ] ; 
                 } ; 
 
                 { 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   1 ; 
                     v a r   v a l u e 2   =   [ 1 ] ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( f a l s e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   l e n g t h   1 ' ) ; 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   1 ; 
                     v a r   v a l u e 2   =   [ ] ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   l e n g t h   2 ' ) ; 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   [ 1 ] ; 
                     v a r   v a l u e 2   =   [ 1 ] ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   l e n g t h   3 ' ) ; 
                 }   / /   g u a r d   a r r a y   v a l u e   e t c 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ i s A r r a y A l l ( v a l u e 1 ) ,   [ 1   < =   v a l u e 1 . l e n g t h ] ,   [ v a l u e 1 [ 0 ]   = = =   1 ,   ' v a l u e 1 [ 0 ] e r r o r ' ] ,   f u n c t i o n   ( )   { 
                         r e t u r n   i s A r r a y A l l ( v a l u e 2 ) ; 
                     } ,   [ f u n c t i o n   ( )   { 
                         r e t u r n   2   < =   v a l u e 2 . l e n g t h ; 
                     } ] ,   [ f u n c t i o n   ( )   { 
                         r e t u r n   v a l u e 2 [ 0 ]   = = =   1 ; 
                     } ,   ' v a l u e 2 [ 0 ] e r r o r ' ] ] ; 
                 } ; 
 
                 { 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   [ 1 ] ; 
                     v a r   v a l u e 2   =   [ 1 ,   2 ] ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( f a l s e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   v a l u e   e t c   1 ' ) ; 
                     c h e c k E q u a l ( ' ' ,   g u a r d . m e s s a g e ( ) ) ; 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   1 ; 
                     v a r   v a l u e 2   =   [ 1 ,   2 ] ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   v a l u e   e t c   2 ' ) ; 
                     c h e c k E q u a l ( ' ' ,   g u a r d . m e s s a g e ( ) ) ; 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   [ ] ; 
                     v a r   v a l u e 2   =   [ 1 ,   2 ] ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   v a l u e   e t c   3 ' ) ; 
                     c h e c k E q u a l ( ' ' ,   g u a r d . m e s s a g e ( ) ) ; 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   [ 2 ] ; 
                     v a r   v a l u e 2   =   [ 1 ,   2 ] ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   v a l u e   e t c   4 ' ) ; 
                     c h e c k E q u a l ( ' v a l u e 1 [ 0 ] e r r o r ' ,   g u a r d . m e s s a g e ( ) ) ; 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   [ 1 ] ; 
                     v a r   v a l u e 2   =   ' [ 1 , 2 ] ' ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   v a l u e   e t c   5 ' ) ; 
                     c h e c k E q u a l ( ' ' ,   g u a r d . m e s s a g e ( ) ) ; 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   [ 1 ] ; 
                     v a r   v a l u e 2   =   [ 1 ] ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   v a l u e   e t c   6 ' ) ; 
                     c h e c k E q u a l ( ' ' ,   g u a r d . m e s s a g e ( ) ) ; 
                     v a r   r e s u l t 1   =   f a l s e ; 
                     v a r   v a l u e 1   =   [ 1 ] ; 
                     v a r   v a l u e 2   =   [ 2 ,   2 ] ; 
 
                     i f   ( g u a r d ( g u a r d F u n c ) )   { 
                         r e s u l t 1   =   t r u e ; 
                     } 
 
                     c h e c k E q u a l ( t r u e ,   r e s u l t 1 ,   ' g u a r d   a r r a y   v a l u e   e t c   7 ' ) ; 
                     c h e c k E q u a l ( ' v a l u e 2 [ 0 ] e r r o r ' ,   g u a r d . m e s s a g e ( ) ) ; 
                 }   / /   g u r a d   e x c e p t i o n   a r g s 1 
 
                 { 
                     c h e c k E q u a l ( t r u e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                         r e t u r n   g u a r d ( f u n c t i o n   ( )   { 
                             r e t u r n   [ ] ; 
                         } ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                         r e t u r n   g u a r d ( 1 2 3 ) ; 
                     } ,   n e w   T y p e E r r o r ( ) . n a m e ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         r e t u r n   g u a r d ( 1 2 3 ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         r e t u r n   g u a r d ( 1 2 3 ) ; 
                     } ,   f u n c t i o n   ( e )   { 
                         r e t u r n   e . m e s s a g e   = = =   ' g u a r d   a r g s ( g u a r d F u n c )   i s   n o t   f u n c t i o n ' ; 
                     } ) ,   ' g u r a d   e x c e p t i o n   a r g s 1   4 ' ) ; 
                 }   / /   ( n e w   S y n t a x E r r o r ) . n a m e 
                 / /   e n v i r o n m e n t 
                 / /     n o r m a l :   ' S y n t a x E r r o r ' 
                 / /     w s h :         ' E r r o r ' 
                 / /   g u r a d   e x c e p t i o n   a r g s 1   r e s u l t 
 
                 { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                         r e t u r n   g u a r d ( f u n c t i o n   ( )   { 
                             r e t u r n   1 2 3 ; 
                         } ) ; 
                     } ,   n e w   T y p e E r r o r ( ) . n a m e ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         r e t u r n   g u a r d ( f u n c t i o n   ( )   { 
                             r e t u r n   1 2 3 ; 
                         } ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         r e t u r n   g u a r d ( f u n c t i o n   ( )   { 
                             r e t u r n   1 2 3 ; 
                         } ) ; 
                     } ,   f u n c t i o n   ( e )   { 
                         r e t u r n   e . m e s s a g e   = = =   ' g u a r d   a r g s ( g u a r d F u n c   r e s u l t )   i s   n o t   a r r a y ' ; 
                     } ) ) ; 
                 }   / /   g u r a d   e x c e p t i o n   a r g s 1   f u n c t i o n   r e s u l t   a r r a y 
 
                 v a r   v a l u e 1   =   1 ; 
                 v a r   v a l u e 2   =   2 ; 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ i s I n t e g e r A l l ( v a l u e 1 ) ,   [ i s I n t e g e r A l l ( v a l u e 2 ) ,   ' t e s t m e s s a g e ' ] ] ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 1   f u n c t i o n   r e s u l t   a r r a y   1 ' ) ; 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ i s I n t e g e r A l l ( v a l u e 1 ) ,   [ i s I n t e g e r A l l ( v a l u e 2 ) ] ] ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 1   f u n c t i o n   r e s u l t   a r r a y   2 ' ) ; 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ i s I n t e g e r A l l ( v a l u e 1 ) ,   [ ] ] ; 
                 } ; 
 
                 c h e c k E q u a l ( f a l s e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 1   f u n c t i o n   r e s u l t   a r r a y   3 ' ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     r e t u r n   e . m e s s a g e   = = =   ' g u a r d   a r g s ( g u a r d F u n c   r e s u l t A r r a y   e l e m e n t )   i s   n o t   a r r a y . l e n g t h   > =   1 ' ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 1   f u n c t i o n   r e s u l t   a r r a y   3 - 2 ' ) ; 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ [ i s I n t e g e r A l l ( v a l u e 2 ) ,   ' t e s t m e s s a g e ' ] ,   i s I n t e g e r A l l ( v a l u e 1 ) ] ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 1   f u n c t i o n   r e s u l t   a r r a y   4 ' ) ; 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ [ i s I n t e g e r A l l ( v a l u e 2 ) ] ,   i s I n t e g e r A l l ( v a l u e 1 ) ] ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 1   f u n c t i o n   r e s u l t   a r r a y   5 ' ) ; 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ [ ] ,   i s I n t e g e r A l l ( v a l u e 1 ) ] ; 
                 } ; 
 
                 c h e c k E q u a l ( f a l s e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 1   f u n c t i o n   r e s u l t   a r r a y   6 ' ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     r e t u r n   e . m e s s a g e   = = =   ' g u a r d   a r g s ( g u a r d F u n c   r e s u l t A r r a y   e l e m e n t )   i s   n o t   a r r a y . l e n g t h   > =   1 ' ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 1   f u n c t i o n   r e s u l t   a r r a y   6 - 2 ' ) ;   / /   g u r a d   e x c e p t i o n   f u n c t i o n   r e s u l t   a r r a y   f u n c t i o n   r e s u l t 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ f u n c t i o n   ( )   { 
                         r e t u r n   t r u e ; 
                     } ,   [ f u n c t i o n   ( )   { 
                         r e t u r n   t r u e ; 
                     } ] ] ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   f u n c t i o n   r e s u l t   a r r a y   f u n c t i o n   r e s u l t   1 ' ) ; 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ f u n c t i o n   ( )   { 
                         r e t u r n   1 2 3 ; 
                     } ,   [ f u n c t i o n   ( )   { 
                         r e t u r n   t r u e ; 
                     } ] ] ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     r e t u r n   e . m e s s a g e   = = =   ' g u a r d   a r g s ( g u a r d F u n c   r e s u l t A r r a y   e l e m e n t   v a l u e )   i s   n o t   b o o l e a n ' ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   f u n c t i o n   r e s u l t   a r r a y   f u n c t i o n   r e s u l t   2 ' ) ; 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ f u n c t i o n   ( )   { 
                         r e t u r n   t r u e ; 
                     } ,   [ f u n c t i o n   ( )   { 
                         r e t u r n   1 2 3 ; 
                     } ] ] ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ) ; 
                 } ,   f u n c t i o n   ( e )   { 
                     r e t u r n   e . m e s s a g e   = = =   ' g u a r d   a r g s ( g u a r d F u n c   r e s u l t A r r a y   e l e m e n t   v a l u e )   i s   n o t   b o o l e a n ' ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   f u n c t i o n   r e s u l t   a r r a y   f u n c t i o n   r e s u l t   3 ' ) ;   / /   g u r a d   e x c e p t i o n   a r g s 2 
 
                 v a r   g u a r d F u n c   =   f u n c t i o n   g u a r d F u n c ( )   { 
                     r e t u r n   [ f u n c t i o n   ( )   { 
                         r e t u r n   f a l s e ; 
                     } ,   [ f u n c t i o n   ( )   { 
                         r e t u r n   t r u e ; 
                     } ] ] ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ,   f u n c t i o n   ( )   { } ) ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 2 ( r u n F u n c )   1 ' ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g u a r d ( g u a r d F u n c ,   ' t e s t ' ) ; 
                 } ) ,   ' g u r a d   e x c e p t i o n   a r g s 2 ( r u n F u n c )   2 ' ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s c   =   f u n c t i o n   t e s t _ s c ( )   { 
             i t ( ' t e s t _ s c ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   s c ( 1 ,   e q u a l ,   1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   s c ( 1 ,   e q u a l ,   2 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   s c ( ' 1 ' ,   e q u a l ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   s c ( 1 ,   e q u a l ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   s c ( ' 1 ' ,   e q u a l ,   1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   s c ( 1 ,   o r ,   [ 1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   s c ( 0 ,   o r ,   [ 1 ,   2 ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i f _   =   f u n c t i o n   t e s t _ i f _ ( )   { 
             i t ( ' t e s t _ i f _ ' ,   f u n c t i o n   ( )   { 
                 / /   {   t h e n :   v a l u e ,   e l s e :   v a l u e   } 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) ( { 
                     t h e n :   ' T H E N ' , 
                     " e l s e " :   ' E L S E ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) ( { 
                     t h e n :   ' T H E N ' , 
                     " e l s e " :   ' E L S E ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) ( { 
                     t h e n :   ' T H E N ' 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( f a l s e ) ( { 
                     t h e n :   ' E L S E ' 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( t r u e ) ( { 
                     " e l s e " :   ' E L S E ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) ( { 
                     " e l s e " :   ' E L S E ' 
                 } ) ) ;   / /   {   t h e n :   f u n c t i o n ,   e l s e :   f u n c t i o n   } 
 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) ( { 
                     t h e n :   f u n c t i o n   t h e n ( )   { 
                         r e t u r n   ' T H E N ' ; 
                     } , 
                     " e l s e " :   f u n c t i o n   _ e l s e ( )   { 
                         r e t u r n   ' E L S E ' ; 
                     } 
                 } ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) ( { 
                     t h e n :   f u n c t i o n   t h e n ( )   { 
                         r e t u r n   ' T H E N ' ; 
                     } , 
                     " e l s e " :   f u n c t i o n   _ e l s e ( )   { 
                         r e t u r n   ' E L S E ' ; 
                     } 
                 } ) ) ; 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) ( { 
                     t h e n :   f u n c t i o n   t h e n ( )   { 
                         r e t u r n   ' T H E N ' ; 
                     } 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( f a l s e ) ( { 
                     t h e n :   f u n c t i o n   t h e n ( )   { 
                         r e t u r n   ' T H E N ' ; 
                     } 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( t r u e ) ( { 
                     " e l s e " :   f u n c t i o n   _ e l s e ( )   { 
                         r e t u r n   ' E L S E ' ; 
                     } 
                 } ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) ( { 
                     " e l s e " :   f u n c t i o n   _ e l s e ( )   { 
                         r e t u r n   ' E L S E ' ; 
                     } 
                 } ) ) ;   / /   ( v a l u e ,   v a l u e ) 
 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) ( ' T H E N ' ,   ' E L S E ' ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) ( ' T H E N ' ,   ' E L S E ' ) ) ; 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) ( ' T H E N ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( f a l s e ) ( ' T H E N ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( t r u e ) ( u n d e f i n e d ,   ' E L S E ' ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) ( u n d e f i n e d ,   ' E L S E ' ) ) ;   / /   ( f u n c t i o n ,   f u n c t i o n ) 
 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ,   f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ,   f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( f a l s e ) ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( t r u e ) ( u n d e f i n e d ,   f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) ( u n d e f i n e d ,   f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) ) ;   / /   . t h e n ( v a l u e ) . e l s e ( v a l u e ) 
 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) . t h e n ( ' T H E N ' ) [ " e l s e " ] ( ' E L S E ' ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) . t h e n ( ' T H E N ' ) [ " e l s e " ] ( ' E L S E ' ) ) ; 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) . t h e n ( ' T H E N ' ) [ " e l s e " ] ( ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( f a l s e ) . t h e n ( ' T H E N ' ) [ " e l s e " ] ( ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( t r u e ) . t h e n ( ) [ " e l s e " ] ( ' E L S E ' ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) . t h e n ( ) [ " e l s e " ] ( ' E L S E ' ) ) ;   / /   . t h e n ( f u n c t i o n ) . e l s e ( f u n c t i o n ) 
 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) . t h e n ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) [ " e l s e " ] ( f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) . t h e n ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) [ " e l s e " ] ( f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) . t h e n ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) [ " e l s e " ] ( ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( f a l s e ) . t h e n ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) [ " e l s e " ] ( ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( t r u e ) . t h e n ( ) [ " e l s e " ] ( f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) . t h e n ( ) [ " e l s e " ] ( f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) ) ;   / /   . e l s e ( v a l u e ) . t h e n ( v a l u e ) 
 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) [ " e l s e " ] ( ' E L S E ' ) . t h e n ( ' T H E N ' ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) [ " e l s e " ] ( ' E L S E ' ) . t h e n ( ' T H E N ' ) ) ; 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) [ " e l s e " ] ( ) . t h e n ( ' T H E N ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( f a l s e ) [ " e l s e " ] ( ) . t h e n ( ' T H E N ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( t r u e ) [ " e l s e " ] ( ' E L S E ' ) . t h e n ( ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) [ " e l s e " ] ( ' E L S E ' ) . t h e n ( ) ) ;   / /   . e l s e ( f u n c t i o n ) . t h e n ( f u n c t i o n ) 
 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) [ " e l s e " ] ( f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) . t h e n ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) [ " e l s e " ] ( f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) . t h e n ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' T H E N ' ,   i f _ ( t r u e ) [ " e l s e " ] ( ) . t h e n ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( f a l s e ) [ " e l s e " ] ( ) . t h e n ( f u n c t i o n   ( )   { 
                     r e t u r n   ' T H E N ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   i f _ ( t r u e ) [ " e l s e " ] ( f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) . t h e n ( ) ) ; 
                 c h e c k E q u a l ( ' E L S E ' ,   i f _ ( f a l s e ) [ " e l s e " ] ( f u n c t i o n   ( )   { 
                     r e t u r n   ' E L S E ' ; 
                 } ) . t h e n ( ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s w i t c h _   =   f u n c t i o n   t e s t _ s w i t c h _ ( )   { 
             i t ( ' t e s t _ s w i t c h _ ' ,   f u n c t i o n   ( )   { 
                 v a r   s w i t c h R e s u l t V a l u e 1   =   [ [ 1 ,   ' n u m b e r   1 ' ] ,   [ ' 1 ' ,   ' s t r i n g   1 ' ] ] ; 
                 c h e c k E q u a l ( ' n u m b e r   1 ' ,   s w i t c h _ ( 1 ) ( s w i t c h R e s u l t V a l u e 1 ) ) ; 
                 c h e c k E q u a l ( ' s t r i n g   1 ' ,   s w i t c h _ ( ' 1 ' ) ( s w i t c h R e s u l t V a l u e 1 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s w i t c h _ ( 2 ) ( s w i t c h R e s u l t V a l u e 1 ) ) ; 
                 v a r   s w i t c h R e s u l t V a l u e 2   =   [ [ 1 ,   ' n u m b e r   1 ' ] ,   [ ' 1 ' ,   ' s t r i n g   1 ' ] ,   [ ' d e f a u l t ' ] ] ; 
                 c h e c k E q u a l ( ' n u m b e r   1 ' ,   s w i t c h _ ( 1 ) ( s w i t c h R e s u l t V a l u e 2 ) ) ; 
                 c h e c k E q u a l ( ' s t r i n g   1 ' ,   s w i t c h _ ( ' 1 ' ) ( s w i t c h R e s u l t V a l u e 2 ) ) ; 
                 c h e c k E q u a l ( ' d e f a u l t ' ,   s w i t c h _ ( 2 ) ( s w i t c h R e s u l t V a l u e 2 ) ) ; 
                 v a r   s w i t c h R e s u l t V a l u e 3   =   [ [ 1 ,   ' n u m b e r   1 ' ] ,   [ ' 1 ' ,   ' s t r i n g   1 ' ] ,   [ ] ] ; 
                 c h e c k E q u a l ( ' n u m b e r   1 ' ,   s w i t c h _ ( 1 ) ( s w i t c h R e s u l t V a l u e 3 ) ) ; 
                 c h e c k E q u a l ( ' s t r i n g   1 ' ,   s w i t c h _ ( ' 1 ' ) ( s w i t c h R e s u l t V a l u e 3 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s w i t c h _ ( 2 ) ( s w i t c h R e s u l t V a l u e 3 ) ) ;   / /   E r r o r 
 
                 v a r   s w i t c h R e s u l t V a l u e 4   =   [ [ 1 ,   ' 1 ' ] ,   ' d e f a u l t ' ] ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s w i t c h _ ( 1 ) ( s w i t c h R e s u l t V a l u e 4 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     s w i t c h _ ( 2 ) ( s w i t c h R e s u l t V a l u e 4 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ) ; 
                 v a r   s w i t c h R e s u l t F u n c 1   =   [ [ 1 ,   f u n c t i o n   ( )   { 
                     r e t u r n   ' n u m b e r   1 ' ; 
                 } ] ,   [ ' 1 ' ,   f u n c t i o n   ( )   { 
                     r e t u r n   ' s t r i n g   1 ' ; 
                 } ] ] ; 
                 c h e c k E q u a l ( ' n u m b e r   1 ' ,   s w i t c h _ ( 1 ) ( s w i t c h R e s u l t F u n c 1 ) ) ; 
                 c h e c k E q u a l ( ' s t r i n g   1 ' ,   s w i t c h _ ( ' 1 ' ) ( s w i t c h R e s u l t F u n c 1 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s w i t c h _ ( 2 ) ( s w i t c h R e s u l t F u n c 1 ) ) ; 
                 v a r   s w i t c h R e s u l t F u n c 2   =   [ [ 1 ,   f u n c t i o n   ( )   { 
                     r e t u r n   ' n u m b e r   1 ' ; 
                 } ] ,   [ ' 1 ' ,   f u n c t i o n   ( )   { 
                     r e t u r n   ' s t r i n g   1 ' ; 
                 } ] ,   [ f u n c t i o n   ( )   { 
                     r e t u r n   ' d e f a u l t ' ; 
                 } ] ] ; 
                 c h e c k E q u a l ( ' n u m b e r   1 ' ,   s w i t c h _ ( 1 ) ( s w i t c h R e s u l t F u n c 2 ) ) ; 
                 c h e c k E q u a l ( ' s t r i n g   1 ' ,   s w i t c h _ ( ' 1 ' ) ( s w i t c h R e s u l t F u n c 2 ) ) ; 
                 c h e c k E q u a l ( ' d e f a u l t ' ,   s w i t c h _ ( 2 ) ( s w i t c h R e s u l t F u n c 2 ) ) ; 
                 v a r   s w i t c h R e s u l t F u n c 3   =   [ [ 1 ,   ' n u m b e r   1 ' ] ,   [ ' 1 ' ,   ' s t r i n g   1 ' ] ,   [ f u n c t i o n   ( )   { } ] ] ; 
                 c h e c k E q u a l ( ' n u m b e r   1 ' ,   s w i t c h _ ( 1 ) ( s w i t c h R e s u l t F u n c 3 ) ) ; 
                 c h e c k E q u a l ( ' s t r i n g   1 ' ,   s w i t c h _ ( ' 1 ' ) ( s w i t c h R e s u l t F u n c 3 ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   s w i t c h _ ( 2 ) ( s w i t c h R e s u l t F u n c 3 ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ l o o p   =   f u n c t i o n   t e s t _ l o o p ( )   { 
             i t ( ' t e s t _ l o o p ' ,   f u n c t i o n   ( )   { 
                 v a r   o u t p u t C o n s o l e T e x t   =   ' ' ; 
 
                 v a r   c o n s o l e _ l o g   =   f u n c t i o n   c o n s o l e _ l o g ( )   { 
                     f o r   ( v a r   _ l e n   =   a r g u m e n t s . l e n g t h ,   a r g s   =   n e w   A r r a y ( _ l e n ) ,   _ k e y   =   0 ;   _ k e y   <   _ l e n ;   _ k e y + + )   { 
                         a r g s [ _ k e y ]   =   a r g u m e n t s [ _ k e y ] ; 
                     } 
 
                     f o r   ( v a r   _ i   =   0 ,   _ a r g s   =   a r g s ;   _ i   <   _ a r g s . l e n g t h ;   _ i + + )   { 
                         v a r   a r g   =   _ a r g s [ _ i ] ; 
 
                         i f   ( i s A r r a y ( a r g ) )   { 
                             v a r   a r g s T e x t   =   ' ' ; 
 
                             v a r   _ i t e r a t o r   =   _ c r e a t e F o r O f I t e r a t o r H e l p e r ( a r g ) , 
                                     _ s t e p ; 
 
                             t r y   { 
                                 f o r   ( _ i t e r a t o r . s ( ) ;   ! ( _ s t e p   =   _ i t e r a t o r . n ( ) ) . d o n e ; )   { 
                                     v a r   e l e m e n t   =   _ s t e p . v a l u e ; 
 
                                     i f   ( i s A r r a y ( e l e m e n t ) )   { 
                                         a r g s T e x t   + =   " [ " . c o n c a t ( e l e m e n t ,   " ] , " ) ; 
                                     }   e l s e   { 
                                         a r g s T e x t   + =   " " . c o n c a t ( e l e m e n t ,   " , " ) ; 
                                     } 
                                 } 
                             }   c a t c h   ( e r r )   { 
                                 _ i t e r a t o r . e ( e r r ) ; 
                             }   f i n a l l y   { 
                                 _ i t e r a t o r . f ( ) ; 
                             } 
 
                             a r g s T e x t   =   p a r t s . s t r i n g . d e l e t e L a s t ( a r g s T e x t ,   1 ) ; 
                             o u t p u t C o n s o l e T e x t   + =   " [ " . c o n c a t ( a r g s T e x t ,   " ]   " ) ; 
                         }   e l s e   { 
                             o u t p u t C o n s o l e T e x t   + =   " " . c o n c a t ( a r g ,   "   " ) ; 
                         } 
                     } 
 
                     o u t p u t C o n s o l e T e x t   + =   ' \ n ' ; 
                 } ; 
 
                 o u t p u t C o n s o l e T e x t   =   ' ' ; 
                 { 
                     / /   3   t i m e s   l o o p 
                     p a r t s . l o o p ( 3 ) ( f u n c t i o n   ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t )   { 
                         c o n s o l e _ l o g ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t ) ; 
                     } ) ; 
                 } 
                 e x p e c t ( o u t p u t C o n s o l e T e x t ) . t o E q u a l ( ' 0   0   [ 0 , 1 , 2 ]   t r u e   f a l s e   \ n '   +   ' 1   1   [ 0 , 1 , 2 ]   f a l s e   f a l s e   \ n '   +   ' 2   2   [ 0 , 1 , 2 ]   f a l s e   t r u e   \ n '   +   ' ' ) ; 
                 o u t p u t C o n s o l e T e x t   =   ' ' ; 
                 { 
                     / /   1   t o   3   l o o p 
                     p a r t s . l o o p ( 1 ,   3 ) ( f u n c t i o n   ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t )   { 
                         c o n s o l e _ l o g ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t ) ; 
                     } ) ; 
                 } 
                 e x p e c t ( o u t p u t C o n s o l e T e x t ) . t o E q u a l ( ' 1   0   [ 1 , 2 , 3 ]   t r u e   f a l s e   \ n '   +   ' 2   1   [ 1 , 2 , 3 ]   f a l s e   f a l s e   \ n '   +   ' 3   2   [ 1 , 2 , 3 ]   f a l s e   t r u e   \ n '   +   ' ' ) ; 
                 o u t p u t C o n s o l e T e x t   =   ' ' ; 
                 { 
                     / /   1   t i m e s   l o o p   :   f i r s t   l a s t   f l a g 
                     p a r t s . l o o p ( 1 ) ( f u n c t i o n   ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t )   { 
                         c o n s o l e _ l o g ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t ) ; 
                     } ) ; 
                 } 
                 e x p e c t ( o u t p u t C o n s o l e T e x t ) . t o E q u a l ( ' 0   0   [ 0 ]   t r u e   t r u e   \ n '   +   ' ' ) ; 
                 o u t p u t C o n s o l e T e x t   =   ' ' ; 
                 { 
                     / /   1   t o   1 0   s t e p   2   l o o p   a n d   c o n t i n u e   a n d   b r e a k 
                     p a r t s . l o o p ( 1 ,   1 0 ,   2 ) ( f u n c t i o n   ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t )   { 
                         i f   ( i   = = =   1 )   { 
                             r e t u r n ; 
                         } 
 
                         c o n s o l e _ l o g ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t ) ; 
 
                         i f   ( i   = = =   3 )   { 
                             r e t u r n   { 
                                 " b r e a k " :   t r u e 
                             } ; 
                         } 
                     } ) ; 
                 } 
                 e x p e c t ( o u t p u t C o n s o l e T e x t ) . t o E q u a l ( ' 1   0   [ 1 , 3 , 5 , 7 , 9 ]   t r u e   f a l s e   \ n '   +   ' 5   2   [ 1 , 3 , 5 , 7 , 9 ]   f a l s e   f a l s e   \ n '   +   ' 7   3   [ 1 , 3 , 5 , 7 , 9 ]   f a l s e   f a l s e   \ n '   +   ' ' ) ; 
                 o u t p u t C o n s o l e T e x t   =   ' ' ; 
                 { 
                     / /   d o u b l e   l o o p 
                     p a r t s . l o o p ( 3 ) ( f u n c t i o n   ( e ,   j ,   a r r a y ,   f i r s t ,   l a s t )   { 
                         p a r t s . l o o p ( 3 ) ( f u n c t i o n   ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t )   { 
                             c o n s o l e _ l o g ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t ,   j ) ; 
                         } ) ; 
                     } ) ; 
                 } 
                 e x p e c t ( o u t p u t C o n s o l e T e x t ) . t o E q u a l ( ' 0   0   [ 0 , 1 , 2 ]   t r u e   f a l s e   0   \ n '   +   ' 1   1   [ 0 , 1 , 2 ]   f a l s e   f a l s e   0   \ n '   +   ' 2   2   [ 0 , 1 , 2 ]   f a l s e   t r u e   0   \ n '   +   ' 0   0   [ 0 , 1 , 2 ]   t r u e   f a l s e   1   \ n '   +   ' 1   1   [ 0 , 1 , 2 ]   f a l s e   f a l s e   1   \ n '   +   ' 2   2   [ 0 , 1 , 2 ]   f a l s e   t r u e   1   \ n '   +   ' 0   0   [ 0 , 1 , 2 ]   t r u e   f a l s e   2   \ n '   +   ' 1   1   [ 0 , 1 , 2 ]   f a l s e   f a l s e   2   \ n '   +   ' 2   2   [ 0 , 1 , 2 ]   f a l s e   t r u e   2   \ n '   +   ' ' ) ; 
                 o u t p u t C o n s o l e T e x t   =   ' ' ; 
                 { 
                     / /   B r e a k   f r o m   a   d o u b l e   l o o p 
                     p a r t s . l o o p ( 3 ) ( f u n c t i o n   ( e ,   j ,   a r r a y ,   f i r s t ,   l a s t )   { 
                         v a r   l o o p R e s u l t   =   p a r t s . l o o p ( 3 ) ( f u n c t i o n   ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t )   { 
                             c o n s o l e _ l o g ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t ,   j ) ; 
 
                             i f   ( i   = = =   0 )   { 
                                 c o n s o l e _ l o g ( ' c o n t i n u e ' ) ; 
                                 r e t u r n ; 
                             } 
 
                             i f   ( i   = = =   1 )   { 
                                 c o n s o l e _ l o g ( ' b r e a k ' ) ; 
                                 r e t u r n   { 
                                     " b r e a k " :   t r u e , 
                                     p a r e n t L o o p C o u n t e r :   j 
                                 } ; 
                             } 
                         } ) ; 
 
                         i f   ( l o o p R e s u l t [ " b r e a k " ]   = = =   t r u e )   { 
                             c o n s o l e _ l o g ( ' r e t u r n   b r e a k ' ) ; 
 
                             i f   ( l o o p R e s u l t . p a r e n t L o o p C o u n t e r   = = =   1 )   { 
                                 c o n s o l e _ l o g ( ' b r e a k   t h e   d o u b l e   l o o p ' ) ; 
                                 r e t u r n   { 
                                     " b r e a k " :   t r u e 
                                 } ; 
                             }   e l s e   { 
                                 c o n s o l e _ l o g ( ' c o n t i n u e   t h e   d o u b l e   l o o p ' ) ; 
                             } 
                         } 
                     } ) ; 
                 } 
                 e x p e c t ( o u t p u t C o n s o l e T e x t ) . t o E q u a l ( ' 0   0   [ 0 , 1 , 2 ]   t r u e   f a l s e   0   \ n '   +   ' c o n t i n u e   \ n '   +   ' 1   1   [ 0 , 1 , 2 ]   f a l s e   f a l s e   0   \ n '   +   ' b r e a k   \ n '   +   ' r e t u r n   b r e a k   \ n '   +   ' c o n t i n u e   t h e   d o u b l e   l o o p   \ n '   +   ' 0   0   [ 0 , 1 , 2 ]   t r u e   f a l s e   1   \ n '   +   ' c o n t i n u e   \ n '   +   ' 1   1   [ 0 , 1 , 2 ]   f a l s e   f a l s e   1   \ n '   +   ' b r e a k   \ n '   +   ' r e t u r n   b r e a k   \ n '   +   ' b r e a k   t h e   d o u b l e   l o o p   \ n '   +   ' ' ) ; 
                 o u t p u t C o n s o l e T e x t   =   ' ' ; 
                 { 
                     / /   l o o p   a r r a y 
                     p a r t s . l o o p ( [ ' A ' ,   ' B ' ,   ' C ' ] ) ( f u n c t i o n   ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t )   { 
                         c o n s o l e _ l o g ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t ) ; 
                     } ) ; 
                 } 
                 e x p e c t ( o u t p u t C o n s o l e T e x t ) . t o E q u a l ( ' A   0   [ A , B , C ]   t r u e   f a l s e   \ n '   +   ' B   1   [ A , B , C ]   f a l s e   f a l s e   \ n '   +   ' C   2   [ A , B , C ]   f a l s e   t r u e   \ n '   +   ' ' ) ; 
                 o u t p u t C o n s o l e T e x t   =   ' ' ; 
                 { 
                     / /   l o o p   o b j e c t 
                     p a r t s . l o o p ( { 
                         a :   ' A ' , 
                         b :   ' B ' , 
                         c :   ' C ' 
                     } ) ( f u n c t i o n   ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t )   { 
                         c o n s o l e _ l o g ( e ,   i ,   a r r a y ,   f i r s t ,   l a s t ) ; 
                     } ) ; 
                 } 
                 e x p e c t ( o u t p u t C o n s o l e T e x t ) . t o E q u a l ( ' [ a , A ]   0   [ [ a , A ] , [ b , B ] , [ c , C ] ]   t r u e   f a l s e   \ n '   +   ' [ b , B ]   1   [ [ a , A ] , [ b , B ] , [ c , C ] ]   f a l s e   f a l s e   \ n '   +   ' [ c , C ]   2   [ [ a , A ] , [ b , B ] , [ c , C ] ]   f a l s e   t r u e   \ n '   +   ' ' ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c a n U s e M a p   =   f u n c t i o n   t e s t _ c a n U s e M a p ( )   { 
             i t ( ' t e s t _ c a n U s e M a p ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   c a n U s e M a p ( ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   c a n U s e M a p ( ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   c a n U s e M a p ( ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   c a n U s e M a p ( ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c a n U s e W e a k M a p   =   f u n c t i o n   t e s t _ c a n U s e W e a k M a p ( )   { 
             i t ( ' t e s t _ c a n U s e W e a k M a p ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   c a n U s e W e a k M a p ( ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   c a n U s e W e a k M a p ( ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   c a n U s e W e a k M a p ( ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   c a n U s e W e a k M a p ( ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c a n U s e S e t   =   f u n c t i o n   t e s t _ c a n U s e S e t ( )   { 
             i t ( ' t e s t _ c a n U s e S e t ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   c a n U s e S e t ( ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   c a n U s e S e t ( ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   c a n U s e S e t ( ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   c a n U s e S e t ( ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c a n U s e W e a k S e t   =   f u n c t i o n   t e s t _ c a n U s e W e a k S e t ( )   { 
             i t ( ' t e s t _ c a n U s e W e a k S e t ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   c a n U s e W e a k S e t ( ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   c a n U s e W e a k S e t ( ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   c a n U s e W e a k S e t ( ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   c a n U s e W e a k S e t ( ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ E n u m   =   f u n c t i o n   t e s t _ E n u m ( )   { 
             i t ( ' t e s t _ E n u m ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( { 
                     a :   ' a ' , 
                     b :   ' b ' , 
                     c :   ' c ' 
                 } ,   E n u m ( [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ; 
                 c h e c k E q u a l ( { 
                     a :   0 , 
                     b :   1 , 
                     c :   2 
                 } ,   E n u m ( [ ' a ' ,   ' b ' ,   ' c ' ] ,   t r u e ) ) ; 
                 c h e c k E q u a l ( { 
                     a :   2 , 
                     b :   1 , 
                     c :   0 
                 } ,   E n u m ( [ ' c ' ,   ' b ' ,   ' a ' ] ,   t r u e ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( { 
                     a :   ' a ' , 
                     b :   ' b ' , 
                     c :   ' c ' 
                 } ,   E n u m ( { 
                     v a l u e s :   [ ' a ' ,   ' b ' ,   ' c ' ] 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     a :   0 , 
                     b :   1 , 
                     c :   2 
                 } ,   E n u m ( { 
                     v a l u e s :   [ ' a ' ,   ' b ' ,   ' c ' ] , 
                     u s e I n d e x :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     a :   0 , 
                     b :   1 , 
                     c :   2 
                 } ,   E n u m ( [ ' a ' ,   ' b ' ,   ' c ' ] ,   { 
                     u s e I n d e x :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     a :   ' a ' , 
                     b :   ' b ' , 
                     c :   ' c ' 
                 } ,   n e w   E n u m ( [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ; 
                 c h e c k E q u a l ( { 
                     a :   0 , 
                     b :   1 , 
                     c :   2 
                 } ,   n e w   E n u m ( [ ' a ' ,   ' b ' ,   ' c ' ] ,   t r u e ) ) ; 
                 c h e c k E q u a l ( { 
                     a :   ' a ' , 
                     b :   ' b ' , 
                     c :   ' c ' 
                 } ,   n e w   E n u m ( { 
                     v a l u e s :   [ ' a ' ,   ' b ' ,   ' c ' ] 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     a :   0 , 
                     b :   1 , 
                     c :   2 
                 } ,   n e w   E n u m ( { 
                     v a l u e s :   [ ' a ' ,   ' b ' ,   ' c ' ] , 
                     u s e I n d e x :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     a :   0 , 
                     b :   1 , 
                     c :   2 
                 } ,   n e w   E n u m ( [ ' a ' ,   ' b ' ,   ' c ' ] ,   { 
                     u s e I n d e x :   t r u e 
                 } ) ) ;   / /   e x c e p t i o n   T y p e E r r o r 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     E n u m ( [ ' a ' ,   ' b ' ,   ' c ' ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     E n u m ( [ 0 ,   ' b ' ,   ' c ' ] ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ r e c u r s i v e   =   f u n c t i o n   t e s t _ r e c u r s i v e ( )   { 
             i t ( ' t e s t _ r e c u r s i v e ' ,   f u n c t i o n   ( )   { 
                 v a r   d a t a   =   [ { 
                     ' i d ' :   1 , 
                     ' n a m e ' :   ' f o l d e r A ' , 
                     ' f o l d e r ' :   [ { 
                         ' i d ' :   2 , 
                         ' n a m e ' :   ' f o l d e r A - 2 ' 
                     } ,   { 
                         ' i d ' :   3 , 
                         ' n a m e ' :   ' f o l d e r A - 3 ' 
                     } ] 
                 } ,   { 
                     ' i d ' :   4 , 
                     ' n a m e ' :   ' f o l d e r B ' 
                 } ,   { 
                     ' i d ' :   5 , 
                     ' n a m e ' :   ' f o l d e r C ' , 
                     ' f o l d e r ' :   [ { 
                         ' i d ' :   6 , 
                         ' n a m e ' :   ' f o l d e r C - 1 ' , 
                         ' f o l d e r ' :   [ { 
                             ' i d ' :   7 , 
                             ' n a m e ' :   ' f o l d e r C - 1 - 1 ' 
                         } ] 
                     } ] 
                 } ] ; 
                 v a r   m e s s a g e   =   ' ' ; 
                 r e c u r s i v e ( d a t a ,   f u n c t i o n   ( v a l u e ,   k e y ,   l e v e l ,   p a t h ,   s o u r c e )   { 
                     c h e c k E q u a l ( d a t a ,   s o u r c e ) ; 
                     m e s s a g e   + =   " " . c o n c a t ( k e y ,   " : " ) . c o n c a t ( v a l u e . n a m e ,   "   " ) ; 
 
                     i f   ( ' f o l d e r '   i n   v a l u e )   { 
                         r e t u r n   v a l u e . f o l d e r ; 
                     } 
                 } ) ; 
                 c h e c k E q u a l ( ' 0 : f o l d e r A   0 : f o l d e r A - 2   1 : f o l d e r A - 3   '   +   ' 1 : f o l d e r B   2 : f o l d e r C   0 : f o l d e r C - 1   0 : f o l d e r C - 1 - 1   ' ,   m e s s a g e ) ; 
                 v a r   t e s t O b j e c t   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   { 
                         d :   3 , 
                         e :   { 
                             f :   4 
                         } 
                     } , 
                     g :   [ 5 ,   [ { 
                         h :   6 
                     } ] ] 
                 } ; 
                 v a r   m e s s a g e   =   ' ' ; 
                 r e c u r s i v e ( t e s t O b j e c t ,   f u n c t i o n   ( v a l u e ,   k e y )   { 
                     m e s s a g e   + =   " " . c o n c a t ( k e y ,   " : " ) . c o n c a t ( _ t y p e o f ( v a l u e ) ,   "   " ) ; 
 
                     i f   ( i s O b j e c t ( v a l u e ) )   { 
                         r e t u r n   v a l u e ; 
                     } 
                 } ) ; 
                 c h e c k E q u a l ( ' a : n u m b e r   b : n u m b e r   c : o b j e c t   d : n u m b e r   e : o b j e c t   f : n u m b e r   g : o b j e c t   ' ,   m e s s a g e ) ; 
                 v a r   m e s s a g e   =   ' ' ; 
                 r e c u r s i v e ( t e s t O b j e c t ,   f u n c t i o n   ( v a l u e ,   k e y )   { 
                     m e s s a g e   + =   " " . c o n c a t ( k e y ,   " : " ) . c o n c a t ( _ t y p e o f ( v a l u e ) ,   "   " ) ; 
 
                     i f   ( i s O b j e c t ( v a l u e ) )   { 
                         r e t u r n   v a l u e ; 
                     }   e l s e   i f   ( A r r a y . i s A r r a y ( v a l u e ) )   { 
                         r e t u r n   v a l u e ; 
                     } 
                 } ) ; 
                 c h e c k E q u a l ( ' a : n u m b e r   b : n u m b e r   c : o b j e c t   d : n u m b e r   e : o b j e c t   f : n u m b e r   '   +   ' g : o b j e c t   0 : n u m b e r   1 : o b j e c t   0 : o b j e c t   h : n u m b e r   ' ,   m e s s a g e ) ; 
                 v a r   m e s s a g e   =   ' ' ; 
                 r e c u r s i v e ( t e s t O b j e c t ,   f u n c t i o n   ( v a l u e ,   k e y ,   l e v e l )   { 
                     m e s s a g e   + =   " " . c o n c a t ( k e y ,   " : " ) . c o n c a t ( _ t y p e o f ( v a l u e ) ,   "   " ) ; 
 
                     i f   ( 1   < =   l e v e l )   { 
                         r e t u r n ; 
                     } 
 
                     i f   ( i s O b j e c t ( v a l u e ) )   { 
                         r e t u r n   v a l u e ; 
                     }   e l s e   i f   ( A r r a y . i s A r r a y ( v a l u e ) )   { 
                         r e t u r n   v a l u e ; 
                     } 
                 } ) ; 
                 c h e c k E q u a l ( ' a : n u m b e r   b : n u m b e r   c : o b j e c t   d : n u m b e r   e : o b j e c t   '   +   ' g : o b j e c t   0 : n u m b e r   1 : o b j e c t   ' ,   m e s s a g e ) ; 
                 v a r   d a t a   =   { 
                     ' c h i l d r e n ' :   [ { 
                         ' c o n t e n t s ' :   { 
                             ' A ' :   0 , 
                             ' B ' :   1 , 
                             ' C ' :   2 
                         } , 
                         ' c h i l d r e n ' :   [ { 
                             ' c h i l d r e n ' :   [ ] , 
                             ' n a m e ' :   ' t e s t 0 3 ' , 
                             ' i d ' :   3 
                         } ,   { 
                             ' c h i l d r e n ' :   [ ] , 
                             ' n a m e ' :   ' t e s t 0 4 ' , 
                             ' i d ' :   4 
                         } ] , 
                         ' n a m e ' :   ' t e s t 0 1 ' , 
                         ' i d ' :   1 
                     } ,   { 
                         ' c o n t e n t s ' :   { 
                             ' A ' :   0 , 
                             ' B ' :   1 , 
                             ' C ' :   2 
                         } , 
                         ' c h i l d r e n ' :   [ { 
                             ' c h i l d r e n ' :   [ ] , 
                             ' n a m e ' :   ' t e s t 0 5 ' , 
                             ' i d ' :   5 
                         } ,   { 
                             ' c h i l d r e n ' :   [ ] , 
                             ' n a m e ' :   ' t e s t 0 6 ' , 
                             ' i d ' :   6 
                         } ] , 
                         ' n a m e ' :   ' t e s t 0 2 ' , 
                         ' i d ' :   2 
                     } ] 
                 } ; 
                 v a r   m e s s a g e s   =   [ ] ; 
                 r e c u r s i v e ( d a t a . c h i l d r e n ,   f u n c t i o n   ( v a l u e ,   k e y ,   l e v e l )   { 
                     m e s s a g e s . p u s h ( { 
                         n a m e :   v a l u e . n a m e , 
                         l e v e l :   l e v e l 
                     } ) ; 
 
                     i f   ( ' c h i l d r e n '   i n   v a l u e )   { 
                         r e t u r n   v a l u e . c h i l d r e n ; 
                     } 
                 } ) ; 
                 v a r   S o r t F u n c   =   p a r t s . a r r a y . S o r t F u n c ; 
                 m e s s a g e s . s o r t ( S o r t F u n c ( [ [ S o r t F u n c . o r d e r . n o r m a l . a s c e n d i n g ,   f u n c t i o n   ( v )   { 
                     r e t u r n   v . l e v e l ; 
                 } ] ] ) ) ; 
                 v a r   m e s s a g e   =   p a r t s . a r r a y . m a p ( m e s s a g e s ,   f u n c t i o n   ( v )   { 
                     r e t u r n   " n a m e : " . c o n c a t ( v . n a m e ) ; 
                 } ) . j o i n ( '   ' ) ; 
                 c h e c k E q u a l ( ' n a m e : t e s t 0 1   n a m e : t e s t 0 2   n a m e : t e s t 0 3   n a m e : t e s t 0 4   n a m e : t e s t 0 5   n a m e : t e s t 0 6 ' ,   m e s s a g e ) ; 
                 v a r   d a t a   =   [ { 
                     i d :   0 , 
                     p a r e n t :   n u l l 
                 } ,   { 
                     i d :   1 , 
                     p a r e n t :   0 
                 } ,   { 
                     i d :   2 , 
                     p a r e n t :   0 
                 } ,   { 
                     i d :   3 , 
                     p a r e n t :   1 
                 } ,   { 
                     i d :   4 , 
                     p a r e n t :   1 
                 } ,   { 
                     i d :   5 , 
                     p a r e n t :   2 
                 } ] ; 
                 v a r   o u t p u t   =   [ { 
                     i d :   0 , 
                     c h i l d r e n :   [ { 
                         i d :   1 , 
                         c h i l d r e n :   [ { 
                             i d :   3 , 
                             c h i l d r e n :   [ ] 
                         } ,   { 
                             i d :   4 , 
                             c h i l d r e n :   [ ] 
                         } ] 
                     } ,   { 
                         i d :   2 , 
                         c h i l d r e n :   [ { 
                             i d :   5 , 
                             c h i l d r e n :   [ ] 
                         } ] 
                     } ] 
                 } ] ; 
                 v a r   r e s u l t   =   [ ] ; 
                 r e s u l t . p u s h ( { 
                     i d :   d a t a [ 0 ] . i d , 
                     c h i l d r e n :   [ ] 
                 } ) ; 
 
                 v a r   _ i t e r a t o r 2   =   _ c r e a t e F o r O f I t e r a t o r H e l p e r ( d a t a ) , 
                         _ s t e p 2 ; 
 
                 t r y   { 
                     v a r   _ l o o p   =   f u n c t i o n   _ l o o p ( )   { 
                         v a r   d a t a I t e m   =   _ s t e p 2 . v a l u e ; 
                         p a r t s . s y n t a x . r e c u r s i v e ( r e s u l t ,   f u n c t i o n   ( i t e m )   { 
                             i f   ( i t e m . i d   = = =   d a t a I t e m . p a r e n t )   { 
                                 i t e m . c h i l d r e n . p u s h ( { 
                                     i d :   d a t a I t e m . i d , 
                                     c h i l d r e n :   [ ] 
                                 } ) ; 
                             }   e l s e   { 
                                 r e t u r n   i t e m . c h i l d r e n ; 
                             } 
                         } ) ; 
                     } ; 
 
                     f o r   ( _ i t e r a t o r 2 . s ( ) ;   ! ( _ s t e p 2   =   _ i t e r a t o r 2 . n ( ) ) . d o n e ; )   { 
                         _ l o o p ( ) ; 
                     } 
                 }   c a t c h   ( e r r )   { 
                     _ i t e r a t o r 2 . e ( e r r ) ; 
                 }   f i n a l l y   { 
                     _ i t e r a t o r 2 . f ( ) ; 
                 } 
 
                 c h e c k E q u a l ( o u t p u t ,   r e s u l t ) ;   / /   s a m e   l o g i c   n o   u s e   p a r t s . s y n t a x . r e c u r s i v e 
 
                 v a r   r e s u l t   =   [ ] ; 
                 r e s u l t . p u s h ( { 
                     i d :   d a t a [ 0 ] . i d , 
                     c h i l d r e n :   [ ] 
                 } ) ; 
 
                 v a r   _ i t e r a t o r 3   =   _ c r e a t e F o r O f I t e r a t o r H e l p e r ( d a t a ) , 
                         _ s t e p 3 ; 
 
                 t r y   { 
                     v a r   _ l o o p 2   =   f u n c t i o n   _ l o o p 2 ( )   { 
                         v a r   d a t a I t e m   =   _ s t e p 3 . v a l u e ; 
 
                         v a r   f   =   f u n c t i o n   f ( a r r a y )   { 
                             v a r   _ i t e r a t o r 4   =   _ c r e a t e F o r O f I t e r a t o r H e l p e r ( a r r a y ) , 
                                     _ s t e p 4 ; 
 
                             t r y   { 
                                 f o r   ( _ i t e r a t o r 4 . s ( ) ;   ! ( _ s t e p 4   =   _ i t e r a t o r 4 . n ( ) ) . d o n e ; )   { 
                                     v a r   i t e m   =   _ s t e p 4 . v a l u e ; 
 
                                     i f   ( i t e m . i d   = = =   d a t a I t e m . p a r e n t )   { 
                                         i t e m . c h i l d r e n . p u s h ( { 
                                             i d :   d a t a I t e m . i d , 
                                             c h i l d r e n :   [ ] 
                                         } ) ; 
                                     }   e l s e   { 
                                         f ( i t e m . c h i l d r e n ) ; 
                                     } 
                                 } 
                             }   c a t c h   ( e r r )   { 
                                 _ i t e r a t o r 4 . e ( e r r ) ; 
                             }   f i n a l l y   { 
                                 _ i t e r a t o r 4 . f ( ) ; 
                             } 
                         } ; 
 
                         f ( r e s u l t ) ; 
                     } ; 
 
                     f o r   ( _ i t e r a t o r 3 . s ( ) ;   ! ( _ s t e p 3   =   _ i t e r a t o r 3 . n ( ) ) . d o n e ; )   { 
                         _ l o o p 2 ( ) ; 
                     } 
                 }   c a t c h   ( e r r )   { 
                     _ i t e r a t o r 3 . e ( e r r ) ; 
                 }   f i n a l l y   { 
                     _ i t e r a t o r 3 . f ( ) ; 
                 } 
 
                 c h e c k E q u a l ( o u t p u t ,   r e s u l t ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ p a r t i a l   =   f u n c t i o n   t e s t _ p a r t i a l ( )   { 
             i t ( ' t e s t _ p a r t i a l ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t F u n c   =   f u n c t i o n   t e s t F u n c ( v a l u e 1 ,   v a l u e 2 ,   v a l u e 3 )   { 
                     r e t u r n   " 1 : " . c o n c a t ( v a l u e 1 ,   "   2 : " ) . c o n c a t ( v a l u e 2 ,   "   3 : " ) . c o n c a t ( v a l u e 3 ) ; 
                 } ; 
 
                 v a r   p a r t i a l T e s t F u n c   =   p a r t i a l ( t e s t F u n c ,   [ p a r t i a l . e m p t y ,   ' B 1 ' ,   p a r t i a l . e m p t y ] ) ; 
                 c h e c k E q u a l ( ' 1 : a   2 : B 1   3 : c ' ,   p a r t i a l T e s t F u n c ( ' a ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( ' 1 : a   2 : B 1   3 : u n d e f i n e d ' ,   p a r t i a l T e s t F u n c ( ' a ' ) ) ; 
                 v a r   p a r t i a l T e s t F u n c   =   p a r t i a l ( t e s t F u n c ,   [ p a r t i a l . e m p t y ,   ' B 2 ' ] ) ; 
                 c h e c k E q u a l ( ' 1 : a   2 : B 2   3 : c ' ,   p a r t i a l T e s t F u n c ( ' a ' ,   ' c ' ) ) ; 
                 v a r   p a r t i a l T e s t F u n c   =   p a r t i a l ( t e s t F u n c ,   [ ' A 3 ' ,   ' B 3 ' ] ) ; 
                 c h e c k E q u a l ( ' 1 : A 3   2 : B 3   3 : u n d e f i n e d ' ,   p a r t i a l T e s t F u n c ( ) ) ; 
                 c h e c k E q u a l ( ' 1 : A 3   2 : B 3   3 : c ' ,   p a r t i a l T e s t F u n c ( ' c ' ) ) ; 
                 v a r   p a r t i a l T e s t F u n c   =   p a r t i a l ( t e s t F u n c ,   [ ' A 4 ' ,   ' B 4 ' ,   ' C 4 ' ] ) ; 
                 c h e c k E q u a l ( ' 1 : A 4   2 : B 4   3 : C 4 ' ,   p a r t i a l T e s t F u n c ( ) ) ; 
                 c h e c k E q u a l ( ' 1 : A 4   2 : B 4   3 : C 4 ' ,   p a r t i a l T e s t F u n c ( ' a ' ) ) ; 
             } ) ; 
         } ; 
 
         t e s t _ a s s e r t ( ) ; 
         t e s t _ g u a r d ( ) ; 
         t e s t _ s c ( ) ; 
         t e s t _ i f _ ( ) ; 
         t e s t _ s w i t c h _ ( ) ; 
         t e s t _ l o o p ( ) ; 
         t e s t _ c a n U s e M a p ( ) ; 
         t e s t _ c a n U s e W e a k M a p ( ) ; 
         t e s t _ c a n U s e S e t ( ) ; 
         t e s t _ c a n U s e W e a k S e t ( ) ; 
         t e s t _ E n u m ( ) ; 
         t e s t _ r e c u r s i v e ( ) ; 
         t e s t _ p a r t i a l ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ s y n t a x   =   t e s t _ e x e c u t e _ s y n t a x ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ s y n t a x :   t e s t _ e x e c u t e _ s y n t a x 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) , 
 
 / * * * /   5 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ t e s t   =   v o i d   0 ; 
 
 / *   e s l i n t - d i s a b l e   n o - t h r o w - l i t e r a l   * / 
 v a r   t e s t _ e x e c u t e _ t e s t   =   f u n c t i o n   t e s t _ e x e c u t e _ t e s t ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             c h e c k E q u a l   =   _ p a r t s $ t e s t . c h e c k E q u a l , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t , 
             t e s t   =   _ p a r t s $ t e s t . t e s t , 
             e x p e c t   =   _ p a r t s $ t e s t . e x p e c t ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ t e s t ' ,   f u n c t i o n   ( )   { 
         v a r   _ p a r t s $ t e s t 2   =   p a r t s . t e s t , 
                 c h e c k E q u a l   =   _ p a r t s $ t e s t 2 . c h e c k E q u a l , 
                 i s T h r o w n   =   _ p a r t s $ t e s t 2 . i s T h r o w n ; 
 
         v a r   t e s t _ i s T h r o w n   =   f u n c t i o n   t e s t _ i s T h r o w n ( )   { 
             i t ( ' t e s t _ i s T h r o w n ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   1 ; 
                 } ,   f u n c t i o n   ( t h r o w V a l u e )   { 
                     r e t u r n   t h r o w V a l u e   = = =   1 ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   1 ; 
                 } ,   f u n c t i o n   ( t h r o w V a l u e )   { 
                     r e t u r n   t h r o w V a l u e   ! = =   1 ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   2 ; 
                 } ,   f u n c t i o n   ( t h r o w V a l u e )   { 
                     r e t u r n   t h r o w V a l u e   = = =   1 ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   1 ; 
                 } ,   f u n c t i o n   ( t h r o w V a l u e )   { 
                     r e t u r n   t h r o w V a l u e   = = =   ' 1 ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   ' 1 ' ; 
                 } ,   f u n c t i o n   ( t h r o w V a l u e )   { 
                     r e t u r n   t h r o w V a l u e   = = =   ' 1 ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   ' ' ; 
                 } ,   f u n c t i o n   ( t h r o w V a l u e )   { 
                     r e t u r n   t h r o w V a l u e   = = =   ' ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   { 
                         t e s t :   ' T E S T ' 
                     } ; 
                 } ,   f u n c t i o n   ( t h r o w V a l u e )   { 
                     r e t u r n   t h r o w V a l u e . t e s t   = = =   ' T E S T ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   { 
                         t e s t :   ' T E S T ' 
                     } ; 
                 } ,   f u n c t i o n   ( t h r o w V a l u e )   { 
                     r e t u r n   t h r o w V a l u e . t e s t   = = =   ' t e s t ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { } ,   f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   1 ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t h r o w   ' 1 ' ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ e x p e c t   =   f u n c t i o n   t e s t _ e x p e c t ( )   { 
             i t ( ' t e s t _ e x p e c t ' ,   f u n c t i o n   ( )   { 
                 e x p e c t ( 1 2 3 ) . t o B e ( 1 2 3 ) ; 
                 e x p e c t ( [ 1 ,   2 ,   3 ] ) . n o t . t o B e ( [ 1 ,   2 ,   3 ] ) ; 
                 e x p e c t ( [ 1 ,   2 ,   3 ] ) . t o E q u a l ( [ 1 ,   2 ,   3 ] ) ; 
                 e x p e c t ( [ 1 ,   2 ,   3 ] ) . n o t . t o E q u a l ( [ 1 ,   2 ,   2 ] ) ; 
             } ) ; 
         } ; 
 
         t e s t _ i s T h r o w n ( ) ; 
         t e s t _ e x p e c t ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ t e s t   =   t e s t _ e x e c u t e _ t e s t ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ t e s t :   t e s t _ e x e c u t e _ t e s t 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) 
 
 } ] ) ; 