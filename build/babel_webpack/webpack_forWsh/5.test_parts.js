( t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   =   t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   | |   [ ] ) . p u s h ( [ [ 5 ] , { 
 
 / * * * /   1 0 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ o b j e c t   =   v o i d   0 ; 
 
 / *   e s l i n t - d i s a b l e   s p a c e - i n - p a r e n s   * / 
 
 / *   e s l i n t - d i s a b l e   m a x - l e n   * / 
 
 / *   e s l i n t - d i s a b l e   n o - v a r   * / 
 v a r   t e s t _ e x e c u t e _ o b j e c t   =   f u n c t i o n   t e s t _ e x e c u t e _ o b j e c t ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t , 
             t e s t C o u n t e r   =   _ p a r t s $ t e s t . t e s t C o u n t e r ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ o b j e c t ' ,   f u n c t i o n   ( )   { 
         v a r   _ p a r t s $ t e s t 2   =   p a r t s . t e s t , 
                 c h e c k E q u a l   =   _ p a r t s $ t e s t 2 . c h e c k E q u a l , 
                 i s T h r o w n   =   _ p a r t s $ t e s t 2 . i s T h r o w n ; 
         v a r   _ p a r t s $ o b j e c t   =   p a r t s . o b j e c t , 
                 c o p y P r o p e r t y   =   _ p a r t s $ o b j e c t . c o p y P r o p e r t y , 
                 i n P r o p e r t y   =   _ p a r t s $ o b j e c t . i n P r o p e r t y , 
                 f i x P r o p e r t y   =   _ p a r t s $ o b j e c t . f i x P r o p e r t y , 
                 p r o p e r t y C o u n t   =   _ p a r t s $ o b j e c t . p r o p e r t y C o u n t , 
                 g e t P r o p e r t y   =   _ p a r t s $ o b j e c t . g e t P r o p e r t y , 
                 s e t P r o p e r t y   =   _ p a r t s $ o b j e c t . s e t P r o p e r t y , 
                 i s E m p t y O b j e c t A l l   =   _ p a r t s $ o b j e c t . i s E m p t y O b j e c t A l l , 
                 i s O b j e c t P a r a m e t e r   =   _ p a r t s $ o b j e c t . i s O b j e c t P a r a m e t e r , 
                 o b j e c t E n t r i e s   =   _ p a r t s $ o b j e c t . o b j e c t E n t r i e s , 
                 o b j e c t F r o m E n t r i e s   =   _ p a r t s $ o b j e c t . o b j e c t F r o m E n t r i e s , 
                 o b j e c t K e y s   =   _ p a r t s $ o b j e c t . o b j e c t K e y s , 
                 o b j e c t V a l u e s   =   _ p a r t s $ o b j e c t . o b j e c t V a l u e s , 
                 h a s   =   _ p a r t s $ o b j e c t . h a s , 
                 h a s O w n   =   _ p a r t s $ o b j e c t . h a s O w n , 
                 h a s P r o t o t y p e   =   _ p a r t s $ o b j e c t . h a s P r o t o t y p e , 
                 p r o p e r t y L i s t   =   _ p a r t s $ o b j e c t . p r o p e r t y L i s t ; 
 
         v a r   t e s t _ h a s   =   f u n c t i o n   t e s t _ h a s ( )   { 
             i t ( ' t e s t _ h a s ' ,   f u n c t i o n   ( )   { 
                 v a r   o b j e c t 1   =   { 
                     a :   ' 1 ' 
                 } ; 
                 c h e c k E q u a l ( t r u e ,   h a s ( o b j e c t 1 ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   h a s ( o b j e c t 1 ,   ' a ' ,   t r u e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   h a s O w n ( o b j e c t 1 ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s P r o t o t y p e ( o b j e c t 1 ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s ( o b j e c t 1 ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s ( o b j e c t 1 ,   ' b ' ,   t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s O w n ( o b j e c t 1 ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s P r o t o t y p e ( o b j e c t 1 ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   h a s ( o b j e c t 1 ,   ' c o n s t r u c t o r ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s ( o b j e c t 1 ,   ' c o n s t r u c t o r ' ,   t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s O w n ( o b j e c t 1 ,   ' c o n s t r u c t o r ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   h a s P r o t o t y p e ( o b j e c t 1 ,   ' c o n s t r u c t o r ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( t r u e ,   h a s ( { 
                     o b j e c t :   o b j e c t 1 , 
                     p r o p e r t y N a m e :   ' c o n s t r u c t o r ' 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s ( { 
                     o b j e c t :   o b j e c t 1 , 
                     p r o p e r t y N a m e :   ' c o n s t r u c t o r ' , 
                     h a s O w n :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   h a s ( o b j e c t 1 ,   { 
                     p r o p e r t y N a m e :   ' c o n s t r u c t o r ' 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s ( o b j e c t 1 ,   { 
                     p r o p e r t y N a m e :   ' c o n s t r u c t o r ' , 
                     h a s O w n :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   h a s ( o b j e c t 1 ,   ' c o n s t r u c t o r ' ,   { 
                     h a s O w n :   f a l s e 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s ( o b j e c t 1 ,   ' c o n s t r u c t o r ' ,   { 
                     h a s O w n :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s O w n ( { 
                     o b j e c t :   o b j e c t 1 , 
                     p r o p e r t y N a m e :   ' c o n s t r u c t o r ' 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   h a s O w n ( o b j e c t 1 ,   { 
                     p r o p e r t y N a m e :   ' c o n s t r u c t o r ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   h a s P r o t o t y p e ( { 
                     o b j e c t :   o b j e c t 1 , 
                     p r o p e r t y N a m e :   ' c o n s t r u c t o r ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   h a s P r o t o t y p e ( o b j e c t 1 ,   { 
                     p r o p e r t y N a m e :   ' c o n s t r u c t o r ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ c o p y P r o p e r t y   =   f u n c t i o n   t e s t _ c o p y P r o p e r t y ( )   { 
             i t ( ' t e s t _ c o p y P r o p e r t y ' ,   f u n c t i o n   ( )   { 
                 v a r   s o u r c e O b j e c t   =   { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' , 
                     c :   ' 3 ' 
                 } ; 
                 v a r   d e s t O b j e c t   =   { } ; 
                 c o p y P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ,   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( t r u e ,   ' a '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' b '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' c '   i n   d e s t O b j e c t ) ; 
                 v a r   d e s t O b j e c t   =   { } ; 
                 c o p y P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b ' ,   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( t r u e ,   ' a '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( t r u e ,   ' b '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' c '   i n   d e s t O b j e c t ) ; 
                 v a r   d e s t O b j e c t   =   { } ; 
                 c o p y P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c , ' ,   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( t r u e ,   ' a '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' b '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( t r u e ,   ' c '   i n   d e s t O b j e c t ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 v a r   d e s t O b j e c t   =   { } ; 
                 c o p y P r o p e r t y ( { 
                     f r o m O b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y N a m e s :   ' a ' , 
                     t o O b j e c t :   d e s t O b j e c t 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   ' a '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' b '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' c '   i n   d e s t O b j e c t ) ; 
                 v a r   d e s t O b j e c t   =   { } ; 
                 c o p y P r o p e r t y ( s o u r c e O b j e c t ,   { 
                     p r o p e r t y N a m e s :   ' a ' , 
                     t o O b j e c t :   d e s t O b j e c t 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   ' a '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' b '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' c '   i n   d e s t O b j e c t ) ; 
                 v a r   d e s t O b j e c t   =   { } ; 
                 c o p y P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ,   { 
                     t o O b j e c t :   d e s t O b j e c t 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   ' a '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' b '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' c '   i n   d e s t O b j e c t ) ; 
                 v a r   d e s t O b j e c t   =   c o p y P r o p e r t y ( { 
                     f r o m O b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y N a m e s :   ' a ' 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   ' a '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' b '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' c '   i n   d e s t O b j e c t ) ; 
                 v a r   d e s t O b j e c t   =   c o p y P r o p e r t y ( s o u r c e O b j e c t ,   { 
                     p r o p e r t y N a m e s :   ' a ' 
                 } ) ; 
                 c h e c k E q u a l ( t r u e ,   ' a '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' b '   i n   d e s t O b j e c t ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' c '   i n   d e s t O b j e c t ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     c o p y P r o p e r t y ( { } ,   ' a ' ,   { } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     c o p y P r o p e r t y ( 1 ,   ' a ' ,   { } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     c o p y P r o p e r t y ( { } ,   1 ,   { } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     c o p y P r o p e r t y ( { } ,   ' a ' ,   1 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n P r o p e r t y   =   f u n c t i o n   t e s t _ i n P r o p e r t y ( )   { 
             i t ( ' t e s t _ i n P r o p e r t y ' ,   f u n c t i o n   ( )   { 
                 v a r   s o u r c e O b j e c t   =   { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' 
                 } ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' d ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c , ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d , ' ) ) ;   / /   o t h e r   o b j e c t   f u n c t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( t e s t _ i n P r o p e r t y ,   ' c o n s t r u c t o r ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( t e s t _ i n P r o p e r t y ,   ' c o n s t r u c t o r ' ,   f a l s e ) ) ;   / /   o t h e r   o b j e c t   M o d u l e 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( p a r t s ,   ' V E R S I O N ' ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( p a r t s ,   ' V E R S I O N ' ,   f a l s e ) ) ; 
                 }   / /   a r r a y 
 
 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   [ ' a ' ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   [ ' a ' ,   ' b ' ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y P a t h s :   ' b , a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y P a t h s :   ' d ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y P a t h s :   [ ' b ' ,   ' a ' ] 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y P a t h s :   [ ' d ' ] 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n P r o p e r t y ( { } ,   ' a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n P r o p e r t y ( 1 ,   ' a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n P r o p e r t y ( { } ,   1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n P r o p e r t y ( { } ,   [ ' a ' ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n P r o p e r t y ( { } ,   [ 1 ] ) ; 
                 } ) ) ;   / /   p r o p e r t y   e x i s t   v a l u e   u n d e f i n e d 
 
                 v a r   s o u r c e O b j e c t   =   { 
                     a :   ' 1 ' , 
                     b :   u n d e f i n e d 
                 } ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' d ' ) ) ; 
                 v a r   s o u r c e O b j e c t   =   { 
                     a :   ' 1 ' 
                 } ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' d ' ) ) ;   / /   h a s O w n 
 
                 f u n c t i o n   F i r s t ( )   { 
                     t h i s . a   =   ' 1 ' ; 
                     t h i s . b   =   ' 2 ' ; 
                 } 
 
                 f u n c t i o n   S e c o n d ( )   { 
                     t h i s . c   =   ' 3 ' ; 
                 } 
 
                 F i r s t . p r o t o t y p e   =   n e w   S e c o n d ( ) ; 
                 S e c o n d . p r o t o t y p e . d   =   ' 4 ' ; 
                 v a r   s o u r c e O b j e c t   =   n e w   F i r s t ( ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   s o u r c e O b j e c t . a ) ; 
                 c h e c k E q u a l ( ' 2 ' ,   s o u r c e O b j e c t . b ) ; 
                 c h e c k E q u a l ( ' 3 ' ,   s o u r c e O b j e c t . c ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   s o u r c e O b j e c t . d ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' d ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d ' ) ) ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c , ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d , ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' c ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' d ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b , ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c , ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c , ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a , ' ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d , ' ,   f a l s e ) ) ;   / /   p r o p e r t y   p a t h 
 
                 v a r   s o u r c e O b j e c t 2   =   { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' , 
                     c :   { 
                         d :   { 
                             e :   ' E ' 
                         } 
                     } 
                 } ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . e ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . f ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . . e ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , . d ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . e , ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( f a l s e ,   i n P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y P a t h s :   ' b , c ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y P a t h s :   ' b , c ' , 
                     h a s O w n :   f a l s e 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   { 
                     p r o p e r t y P a t h s :   ' b , c ' , 
                     h a s O w n :   f a l s e 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i n P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c ' ,   { 
                     h a s O w n :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ f i x P r o p e r t y   =   f u n c t i o n   t e s t _ f i x P r o p e r t y ( )   { 
             i t ( ' t e s t _ f i x P r o p e r t y ' ,   f u n c t i o n   ( )   { 
                 v a r   s o u r c e O b j e c t   =   { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' 
                 } ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' d ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c , ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d , ' ) ) ;   / /   o t h e r   o b j e c t   f u n c t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( t e s t _ f i x P r o p e r t y ,   ' c o n s t r u c t o r ' ) ) ;   / /   a r r a y 
 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   [ ' a ' ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   [ ' a ' ,   ' b ' ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y N a m e s :   ' b , a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y N a m e s :   ' d ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y N a m e s :   [ ' b ' ,   ' a ' ] 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y N a m e s :   [ ' d ' ] 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     f i x P r o p e r t y ( { } ,   ' a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     f i x P r o p e r t y ( 1 ,   ' a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     f i x P r o p e r t y ( { } ,   1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     f i x P r o p e r t y ( { } ,   [ ' a ' ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     f i x P r o p e r t y ( { } ,   [ 1 ] ) ; 
                 } ) ) ;   / /   p r o p e r t y   e x i s t   v a l u e   u n d e f i n e d 
 
                 v a r   s o u r c e O b j e c t   =   { 
                     a :   ' 1 ' , 
                     b :   u n d e f i n e d 
                 } ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b ' ) ) ; 
                 v a r   s o u r c e O b j e c t   =   { 
                     a :   ' 1 ' 
                 } ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b ' ) ) ;   / /   h a s O w n 
 
                 f u n c t i o n   F i r s t ( )   { 
                     t h i s . a   =   ' 1 ' ; 
                     t h i s . b   =   ' 2 ' ; 
                 } 
 
                 f u n c t i o n   S e c o n d ( )   { 
                     t h i s . c   =   ' 3 ' ; 
                 } 
 
                 F i r s t . p r o t o t y p e   =   n e w   S e c o n d ( ) ; 
                 S e c o n d . p r o t o t y p e . d   =   ' 4 ' ; 
                 v a r   s o u r c e O b j e c t   =   n e w   F i r s t ( ) ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   s o u r c e O b j e c t . a ) ; 
                 c h e c k E q u a l ( ' 2 ' ,   s o u r c e O b j e c t . b ) ; 
                 c h e c k E q u a l ( ' 3 ' ,   s o u r c e O b j e c t . c ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   s o u r c e O b j e c t . d ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' d ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d ' ) ) ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , b , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b , c , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , c , ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' b , a , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   ' a , d , ' ) ) ;   / /   p r o p e r t y   p a t h 
 
                 v a r   s o u r c e O b j e c t 2   =   { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' , 
                     c :   { 
                         d :   { 
                             e :   ' E ' 
                         } 
                     } 
                 } ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . e ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . f ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . . e ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , . d ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c , ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( s o u r c e O b j e c t 2 ,   ' a , b , c . d . e , ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( f a l s e ,   f i x P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y N a m e s :   ' b , c ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( { 
                     o b j e c t :   s o u r c e O b j e c t , 
                     p r o p e r t y N a m e s :   ' a , b ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   f i x P r o p e r t y ( s o u r c e O b j e c t ,   { 
                     p r o p e r t y N a m e s :   ' a , b , ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ p r o p e r t y C o u n t   =   f u n c t i o n   t e s t _ p r o p e r t y C o u n t ( )   { 
             i t ( ' t e s t _ p r o p e r t y C o u n t ' ,   f u n c t i o n   ( )   { 
                 v a r   o b j e c t 1   =   { 
                     a :   1 , 
                     b :   2 , 
                     c :   3 
                 } ; 
 
                 f u n c t i o n   O b j e c t 2 ( )   { 
                     t h i s . d   =   ' r e d ' ; 
                 } 
 
                 O b j e c t 2 . p r o t o t y p e   =   o b j e c t 1 ; 
                 v a r   o b j e c t 2   =   n e w   O b j e c t 2 ( ) ; 
                 c h e c k E q u a l ( 3 ,   p r o p e r t y C o u n t ( o b j e c t 1 ) ) ; 
                 c h e c k E q u a l ( 3 ,   p r o p e r t y C o u n t ( o b j e c t 1 ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( 1 ,   p r o p e r t y C o u n t ( o b j e c t 2 ) ) ; 
                 c h e c k E q u a l ( 4 ,   p r o p e r t y C o u n t ( o b j e c t 2 ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( 0 ,   p r o p e r t y C o u n t ( { } ) ) ; 
                 c h e c k E q u a l ( 0 ,   p r o p e r t y C o u n t ( { } ,   f a l s e ) ) ;   / /   o t h e r   o b j e c t   f u n c t i o n 
 
                 c h e c k E q u a l ( 0 ,   p r o p e r t y C o u n t ( t e s t _ p r o p e r t y C o u n t ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( 0 ,   p r o p e r t y C o u n t ( t e s t _ p r o p e r t y C o u n t ,   f a l s e ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( 1 ,   p r o p e r t y C o u n t ( t e s t _ p r o p e r t y C o u n t ,   f a l s e ) ) ; 
                 }   / /   o t h e r   o b j e c t   M o d u l e 
 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( t r u e ,   0   ! = =   p r o p e r t y C o u n t ( p a r t s ) ) ; 
                     c h e c k E q u a l ( t r u e ,   0   ! = =   p r o p e r t y C o u n t ( p a r t s ,   f a l s e ) ) ; 
                 }   / /   e x c e p t i o n 
 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     p r o p e r t y C o u n t ( { } ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     p r o p e r t y C o u n t ( [ ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     p r o p e r t y C o u n t ( 1 0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     p r o p e r t y C o u n t ( ' a b c ' ) ; 
                 } ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( 1 ,   p r o p e r t y C o u n t ( { 
                     o b j e c t :   o b j e c t 2 
                 } ) ) ; 
                 c h e c k E q u a l ( 4 ,   p r o p e r t y C o u n t ( { 
                     o b j e c t :   o b j e c t 2 , 
                     h a s O w n :   f a l s e 
                 } ) ) ; 
                 c h e c k E q u a l ( 4 ,   p r o p e r t y C o u n t ( o b j e c t 2 ,   { 
                     h a s O w n :   f a l s e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ g e t P r o p e r t y   =   f u n c t i o n   t e s t _ g e t P r o p e r t y ( )   { 
             i t ( ' t e s t _ g e t P r o p e r t y ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t O b j 1   =   { 
                     a :   { 
                         b :   { 
                             c :   f a l s e 
                         } 
                     } 
                 } ; 
                 c h e c k E q u a l ( f a l s e ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' a ' ) . b . c ) ; 
                 c h e c k E q u a l ( f a l s e ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' a . b ' ) . c ) ; 
                 c h e c k E q u a l ( f a l s e ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' a . b . c ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' a . b . c . d ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' a . b . b ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g e t P r o p e r t y ( t e s t O b j 1 ,   ' . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g e t P r o p e r t y ( t e s t O b j 1 ,   ' . . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g e t P r o p e r t y ( t e s t O b j 1 ,   ' a . b . c . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g e t P r o p e r t y ( t e s t O b j 1 ,   ' a . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' . a ' ) . b . c ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' a . c ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 1 ,   ' b . c ' ) ) ; 
                 v a r   t e s t O b j 2   =   { 
                     a :   { 
                         b :   { 
                             c :   u n d e f i n e d 
                         } 
                     } 
                 } ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a ' ) . b . c ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b ' ) . c ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . c ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . c . d ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . b ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g e t P r o p e r t y ( t e s t O b j 2 ,   ' . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g e t P r o p e r t y ( t e s t O b j 2 ,   ' . . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . c . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' . a ' ) . b . c ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . c ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' b . c ' ) ) ; 
                 / *   e s l i n t - d i s a b l e   c o m m a - s p a c i n g   * / 
 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a ' ,   t r u e ,   f a l s e ) . b . c ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b ' ,   t r u e ,   f a l s e ) . c ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . c ' ,   t r u e ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . c . d ' ,   t r u e ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . b ' ,   t r u e ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( { 
                     b :   { 
                         c :   u n d e f i n e d 
                     } 
                 } ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a ' ,   t r u e ,   t r u e ) . v a l u e ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b ' ,   t r u e ,   t r u e ) . v a l u e . c ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . c ' ,   t r u e ,   t r u e ) . v a l u e ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . c . d ' ,   t r u e ,   t r u e ) . v a l u e ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . b ' ,   t r u e ,   t r u e ) . v a l u e ) ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( t r u e ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a ' ,   t r u e ,   t r u e ) . e x i s t ) ; 
                 c h e c k E q u a l ( t r u e ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b ' ,   t r u e ,   t r u e ) . e x i s t ) ; 
                 c h e c k E q u a l ( t r u e ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . c ' ,   t r u e ,   t r u e ) . e x i s t ) ; 
                 c h e c k E q u a l ( f a l s e ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . c . d ' ,   t r u e ,   t r u e ) . e x i s t ) ; 
                 c h e c k E q u a l ( f a l s e ,   g e t P r o p e r t y ( t e s t O b j 2 ,   ' a . b . b ' ,   t r u e ,   t r u e ) . e x i s t ) ; 
                 / *   e s l i n t - e n a b l e   c o m m a - s p a c i n g   * / 
                 / /   i n c l u d e   a r r a y 
 
                 v a r   t e s t O b j 3   =   { 
                     a :   [ { 
                         b :   ' B ' 
                     } ,   { 
                         c :   ' C ' 
                     } ] 
                 } ; 
                 c h e c k E q u a l ( [ { 
                     b :   ' B ' 
                 } ,   { 
                     c :   ' C ' 
                 } ] ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( { 
                     b :   ' B ' 
                 } ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a . 0 ' ) ) ; 
                 c h e c k E q u a l ( { 
                     c :   ' C ' 
                 } ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a . 1 ' ) ) ; 
                 c h e c k E q u a l ( ' B ' ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a . 0 . b ' ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a . 1 . c ' ) ) ;   / /   s a m e   t e s t   i n c l u d e   a r r a y 
 
                 v a r   t e s t O b j 3   =   { 
                     a :   { 
                         0 :   { 
                             b :   ' B ' 
                         } , 
                         1 :   { 
                             c :   ' C ' 
                         } 
                     } 
                 } ; 
                 c h e c k E q u a l ( { 
                     0 :   { 
                         b :   ' B ' 
                     } , 
                     1 :   { 
                         c :   ' C ' 
                     } 
                 } ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( { 
                     b :   ' B ' 
                 } ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a . 0 ' ) ) ; 
                 c h e c k E q u a l ( { 
                     c :   ' C ' 
                 } ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a . 1 ' ) ) ; 
                 c h e c k E q u a l ( ' B ' ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a . 0 . b ' ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   g e t P r o p e r t y ( t e s t O b j 3 ,   ' a . 1 . c ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 v a r   o b j e c t 1   =   { 
                     a :   { 
                         b :   { 
                             c :   f a l s e 
                         } 
                     } 
                 } ; 
 
                 f u n c t i o n   O b j e c t 2 ( )   { 
                     t h i s . d   =   t r u e ; 
                 } 
 
                 O b j e c t 2 . p r o t o t y p e   =   o b j e c t 1 ; 
                 v a r   o b j e c t 2   =   n e w   O b j e c t 2 ( ) ; 
                 c h e c k E q u a l ( u n d e f i n e d ,   g e t P r o p e r t y ( { 
                     o b j e c t :   o b j e c t 2 , 
                     p r o p e r t y P a t h :   ' a . b . c ' , 
                     h a s O w n :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   g e t P r o p e r t y ( { 
                     o b j e c t :   o b j e c t 2 , 
                     p r o p e r t y P a t h :   ' a . b . c ' , 
                     h a s O w n :   f a l s e 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   g e t P r o p e r t y ( o b j e c t 2 ,   { 
                     p r o p e r t y P a t h :   ' a . b . c ' , 
                     h a s O w n :   f a l s e 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   g e t P r o p e r t y ( o b j e c t 2 ,   ' a . b . c ' ,   { 
                     h a s O w n :   f a l s e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     e x i s t :   f a l s e 
                 } ,   g e t P r o p e r t y ( { 
                     o b j e c t :   o b j e c t 2 , 
                     p r o p e r t y P a t h :   ' a . b . c ' , 
                     h a s O w n :   t r u e , 
                     d e t a i l :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     e x i s t :   t r u e , 
                     v a l u e :   f a l s e 
                 } ,   g e t P r o p e r t y ( { 
                     o b j e c t :   o b j e c t 2 , 
                     p r o p e r t y P a t h :   ' a . b . c ' , 
                     h a s O w n :   f a l s e , 
                     d e t a i l :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     e x i s t :   t r u e , 
                     v a l u e :   f a l s e 
                 } ,   g e t P r o p e r t y ( o b j e c t 2 ,   { 
                     p r o p e r t y P a t h :   ' a . b . c ' , 
                     h a s O w n :   f a l s e , 
                     d e t a i l :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     e x i s t :   t r u e , 
                     v a l u e :   f a l s e 
                 } ,   g e t P r o p e r t y ( o b j e c t 2 ,   ' a . b . c ' ,   { 
                     h a s O w n :   f a l s e , 
                     d e t a i l :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     e x i s t :   t r u e , 
                     v a l u e :   f a l s e 
                 } ,   g e t P r o p e r t y ( o b j e c t 2 ,   ' a . b . c ' ,   f a l s e ,   { 
                     d e t a i l :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     e x i s t :   f a l s e 
                 } ,   g e t P r o p e r t y ( { 
                     o b j e c t :   o b j e c t 2 , 
                     p r o p e r t y P a t h :   ' a . b . c ' , 
                     d e t a i l :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     e x i s t :   f a l s e 
                 } ,   g e t P r o p e r t y ( o b j e c t 2 ,   { 
                     p r o p e r t y P a t h :   ' a . b . c ' , 
                     d e t a i l :   t r u e 
                 } ) ) ; 
                 c h e c k E q u a l ( { 
                     e x i s t :   f a l s e 
                 } ,   g e t P r o p e r t y ( o b j e c t 2 ,   ' a . b . c ' ,   { 
                     d e t a i l :   t r u e 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s e t P r o p e r t y   =   f u n c t i o n   t e s t _ s e t P r o p e r t y ( )   { 
             i t ( ' t e s t _ s e t P r o p e r t y ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t O b j 1   =   { } ; 
                 s e t P r o p e r t y ( t e s t O b j 1 ,   ' a . b ' ,   t r u e ) ; 
                 c h e c k E q u a l ( t r u e ,   t e s t O b j 1 . a . b ) ; 
                 s e t P r o p e r t y ( t e s t O b j 1 ,   ' a ' ,   t r u e ) ; 
                 c h e c k E q u a l ( t r u e ,   t e s t O b j 1 . a ) ; 
                 s e t P r o p e r t y ( t e s t O b j 1 ,   ' . a ' ,   ' A ' ) ; 
                 c h e c k E q u a l ( ' A ' ,   t e s t O b j 1 . a ) ; 
                 s e t P r o p e r t y ( t e s t O b j 1 ,   ' a . b . c ' ,   t r u e ) ; 
                 c h e c k E q u a l ( t r u e ,   t e s t O b j 1 . a . b . c ) ; 
                 s e t P r o p e r t y ( t e s t O b j 1 ,   ' a . c ' ,   t r u e ) ; 
                 c h e c k E q u a l ( t r u e ,   t e s t O b j 1 . a . c ) ; 
                 s e t P r o p e r t y ( t e s t O b j 1 ,   ' b ' ,   t r u e ) ; 
                 c h e c k E q u a l ( t r u e ,   t e s t O b j 1 . b ) ; 
                 s e t P r o p e r t y ( t e s t O b j 1 ,   ' b . c ' ,   t r u e ) ; 
                 c h e c k E q u a l ( t r u e ,   t e s t O b j 1 . b . c ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s e t P r o p e r t y ( t e s t O b j 1 ,   ' ' ,   t r u e ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s e t P r o p e r t y ( t e s t O b j 1 ,   ' a . ' ,   t r u e ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s e t P r o p e r t y ( t e s t O b j 1 ,   ' . a ' ,   t r u e ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s e t P r o p e r t y ( t e s t O b j 1 ,   ' a ' ,   t r u e ) ; 
                 } ) ) ; 
                 v a r   t e s t O b j 1   =   { 
                     a :   [ ' a b c ' ,   { 
                         b :   ' b ' 
                     } ] 
                 } ; 
                 c h e c k E q u a l ( ' a b c ' ,   t e s t O b j 1 . a [ 0 ] ) ; 
                 s e t P r o p e r t y ( t e s t O b j 1 ,   ' a . 0 ' ,   ' d e f ' ) ; 
                 c h e c k E q u a l ( ' d e f ' ,   t e s t O b j 1 . a [ 0 ] ) ; 
                 c h e c k E q u a l ( ' b ' ,   t e s t O b j 1 . a [ 1 ] . b ) ; 
                 s e t P r o p e r t y ( t e s t O b j 1 ,   ' a . 1 . b ' ,   ' c ' ) ; 
                 c h e c k E q u a l ( ' c ' ,   t e s t O b j 1 . a [ 1 ] . b ) ;   / /   a r r a y 
 
                 v a r   a r r a y 1   =   [ ] ; 
                 s e t P r o p e r t y ( a r r a y 1 ,   ' 1 . a ' ,   ' A ' ) ; 
                 c h e c k E q u a l ( [ ,   { 
                     a :   ' A ' 
                 } ] ,   a r r a y 1 ) ; 
                 c h e c k E q u a l ( [ u n d e f i n e d ,   { 
                     a :   ' A ' 
                 } ] ,   a r r a y 1 ) ; 
                 v a r   a r r a y 1   =   [ ] ; 
                 s e t P r o p e r t y ( a r r a y 1 ,   ' a . 1 ' ,   ' o n e ' ) ; 
                 v a r   a r r a y 2   =   [ ] ; 
                 a r r a y 2 . a   =   { 
                     ' 1 ' :   ' o n e ' 
                 } ; 
                 c h e c k E q u a l ( a r r a y 2 ,   a r r a y 1 ) ; 
                 v a r   a r r a y 1   =   [ ] ; 
                 a r r a y 1 . a   =   [ ] ; 
                 s e t P r o p e r t y ( a r r a y 1 ,   ' a . 1 ' ,   ' o n e ' ) ; 
                 v a r   a r r a y 2   =   [ ] ; 
                 a r r a y 2 . a   =   [ ,   ' o n e ' ] ; 
                 c h e c k E q u a l ( a r r a y 2 ,   a r r a y 1 ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s O b j e c t P a r a m e t e r   =   f u n c t i o n   t e s t _ i s O b j e c t P a r a m e t e r ( )   { 
             i t ( ' t e s t _ i s O b j e c t P a r a m e t e r ' ,   f u n c t i o n   ( )   { 
                 v a r   t e s t F u n c t i o n 0 1   =   f u n c t i o n   t e s t F u n c t i o n 0 1 ( a ,   b )   { 
                     v a r   c   =   a r g u m e n t s . l e n g t h   >   2   & &   a r g u m e n t s [ 2 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 2 ]   :   ' ' ; 
                     v a r   d   =   a r g u m e n t s . l e n g t h   >   3   & &   a r g u m e n t s [ 3 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 3 ]   :   ' ' ; 
 
                     i f   ( i s O b j e c t P a r a m e t e r ( a ,   ' a ,   b ' ,   ' c ,   d ' ) )   { 
                         v a r   _ a   =   a ; 
                         a   =   _ a . a ; 
                         b   =   _ a . b ; 
                         v a r   _ a $ c   =   _ a . c ; 
                         c   =   _ a $ c   = = =   v o i d   0   ?   ' '   :   _ a $ c ; 
                         v a r   _ a $ d   =   _ a . d ; 
                         d   =   _ a $ d   = = =   v o i d   0   ?   ' '   :   _ a $ d ; 
                     } 
 
                     r e t u r n   a   +   b   +   c   +   d ; 
                 } ; 
 
                 c h e c k E q u a l ( ' A B C D ' ,   t e s t F u n c t i o n 0 1 ( ' A ' ,   ' B ' ,   ' C ' ,   ' D ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t e s t F u n c t i o n 0 1 ( ' A ' ,   ' B ' ,   ' C ' ) ) ; 
                 c h e c k E q u a l ( ' A B ' ,   t e s t F u n c t i o n 0 1 ( ' A ' ,   ' B ' ) ) ; 
                 c h e c k E q u a l ( ' A B C D ' ,   t e s t F u n c t i o n 0 1 ( { 
                     a :   ' A ' , 
                     b :   ' B ' , 
                     c :   ' C ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t e s t F u n c t i o n 0 1 ( { 
                     a :   ' A ' , 
                     b :   ' B ' , 
                     c :   ' C ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B D ' ,   t e s t F u n c t i o n 0 1 ( { 
                     a :   ' A ' , 
                     b :   ' B ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B ' ,   t e s t F u n c t i o n 0 1 ( { 
                     a :   ' A ' , 
                     b :   ' B ' 
                 } ) ) ; 
 
                 v a r   t e s t F u n c t i o n 0 2   =   f u n c t i o n   t e s t F u n c t i o n 0 2 ( a ,   b )   { 
                     v a r   c   =   a r g u m e n t s . l e n g t h   >   2   & &   a r g u m e n t s [ 2 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 2 ]   :   ' ' ; 
                     v a r   d   =   a r g u m e n t s . l e n g t h   >   3   & &   a r g u m e n t s [ 3 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 3 ]   :   ' ' ; 
 
                     i f   ( i s O b j e c t P a r a m e t e r ( a ,   ' a ,   b ' ,   ' c ,   d ' ) )   { 
                         v a r   _ a 2   =   a ; 
                         a   =   _ a 2 . a ; 
                         b   =   _ a 2 . b ; 
                         v a r   _ a 2 $ c   =   _ a 2 . c ; 
                         c   =   _ a 2 $ c   = = =   v o i d   0   ?   ' '   :   _ a 2 $ c ; 
                         v a r   _ a 2 $ d   =   _ a 2 . d ; 
                         d   =   _ a 2 $ d   = = =   v o i d   0   ?   ' '   :   _ a 2 $ d ; 
                     }   e l s e   i f   ( i s O b j e c t P a r a m e t e r ( b ,   ' b ' ,   ' c ,   d ' ) )   { 
                         v a r   _ b   =   b ; 
                         b   =   _ b . b ; 
                         v a r   _ b $ c   =   _ b . c ; 
                         c   =   _ b $ c   = = =   v o i d   0   ?   ' '   :   _ b $ c ; 
                         v a r   _ b $ d   =   _ b . d ; 
                         d   =   _ b $ d   = = =   v o i d   0   ?   ' '   :   _ b $ d ; 
                     }   e l s e   i f   ( i s O b j e c t P a r a m e t e r ( c ,   ' ' ,   ' c ,   d ' ,   1 ) )   { 
                         v a r   _ c   =   c ; 
                         v a r   _ c $ c   =   _ c . c ; 
                         c   =   _ c $ c   = = =   v o i d   0   ?   ' '   :   _ c $ c ; 
                         v a r   _ c $ d   =   _ c . d ; 
                         d   =   _ c $ d   = = =   v o i d   0   ?   ' '   :   _ c $ d ; 
                     }   e l s e   i f   ( i s O b j e c t P a r a m e t e r ( d ,   ' ' ,   ' d ' ,   1 ) )   { 
                         v a r   _ d   =   d ; 
                         v a r   _ d $ d   =   _ d . d ; 
                         d   =   _ d $ d   = = =   v o i d   0   ?   ' '   :   _ d $ d ; 
                     } 
 
                     r e t u r n   a   +   b   +   c   +   d ; 
                 } ; 
 
                 c h e c k E q u a l ( ' A B C D ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   ' C ' ,   ' D ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   ' C ' ) ) ; 
                 c h e c k E q u a l ( ' A B ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ) ) ;   / /   o b j e c t   p a r a m e t e r   a 
 
                 c h e c k E q u a l ( ' A B C D ' ,   t e s t F u n c t i o n 0 2 ( { 
                     a :   ' A ' , 
                     b :   ' B ' , 
                     c :   ' C ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t e s t F u n c t i o n 0 2 ( { 
                     a :   ' A ' , 
                     b :   ' B ' , 
                     c :   ' C ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B D ' ,   t e s t F u n c t i o n 0 2 ( { 
                     a :   ' A ' , 
                     b :   ' B ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B ' ,   t e s t F u n c t i o n 0 2 ( { 
                     a :   ' A ' , 
                     b :   ' B ' 
                 } ) ) ;   / /   o b j e c t   p a r a m e t e r   b 
 
                 c h e c k E q u a l ( ' A B C D ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   { 
                     b :   ' B ' , 
                     c :   ' C ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   { 
                     b :   ' B ' , 
                     c :   ' C ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B D ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   { 
                     b :   ' B ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   { 
                     b :   ' B ' 
                 } ) ) ;   / /   o b j e c t   p a r a m e t e r   c 
 
                 c h e c k E q u a l ( ' A B C D ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   { 
                     c :   ' C ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   { 
                     c :   ' C ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B D ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   { 
                     d :   ' D ' 
                 } ) ) ;   / /   o b j e c t   p a r a m e t e r   c 
 
                 c h e c k E q u a l ( ' A B C D ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   ' C ' ,   { 
                     d :   ' D ' 
                 } ) ) ;   / /   m i s s   p a t e r n 
 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] u n d e f i n e d ' ,   t e s t F u n c t i o n 0 2 ( { 
                     a :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] u n d e f i n e d ' ,   t e s t F u n c t i o n 0 2 ( { 
                     b :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] u n d e f i n e d ' ,   t e s t F u n c t i o n 0 2 ( { 
                     a :   ' A ' , 
                     c :   ' C ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] u n d e f i n e d ' ,   t e s t F u n c t i o n 0 2 ( { 
                     a :   ' A ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] u n d e f i n e d ' ,   t e s t F u n c t i o n 0 2 ( { 
                     b :   ' B ' , 
                     c :   ' C ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] u n d e f i n e d ' ,   t e s t F u n c t i o n 0 2 ( { 
                     b :   ' B ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] u n d e f i n e d ' ,   t e s t F u n c t i o n 0 2 ( { 
                     a :   ' A ' , 
                     b :   ' B ' , 
                     c :   ' C ' , 
                     d :   ' D ' , 
                     e :   ' E ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' [ o b j e c t   O b j e c t ] u n d e f i n e d ' ,   t e s t F u n c t i o n 0 2 ( { 
                     a :   ' A ' , 
                     b :   ' B ' , 
                     e :   ' E ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   { } ) ) ; 
                 c h e c k E q u a l ( ' A [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   { 
                     b :   ' B ' , 
                     e :   ' E ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   { 
                     a :   ' A ' , 
                     b :   ' B ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   { 
                     c :   ' C ' , 
                     d :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   { } ) ) ; 
                 c h e c k E q u a l ( ' A B [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   { 
                     a :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   { 
                     b :   ' B ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   { 
                     e :   ' D ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B C [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   ' C ' ,   { 
                     c :   ' C ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B C [ o b j e c t   O b j e c t ] ' ,   t e s t F u n c t i o n 0 2 ( ' A ' ,   ' B ' ,   ' C ' ,   { 
                     e :   ' E ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ O b j e c t E n t r i e s _ s t a n d a r d   =   f u n c t i o n   t e s t _ O b j e c t E n t r i e s _ s t a n d a r d ( )   { 
             i t ( ' t e s t _ O b j e c t E n t r i e s _ s t a n d a r d ' ,   f u n c t i o n   ( )   { 
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
                 c h e c k E q u a l ( [ [ ' a ' ,   ' 1 ' ] ,   [ ' b ' ,   ' 2 ' ] ,   [ ' c ' ,   ' 3 ' ] ] ,   O b j e c t . e n t r i e s ( { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' , 
                     c :   ' 3 ' 
                 } ) ) ; 
                 c h e c k E q u a l ( [ [ ' 0 ' ,   ' a ' ] ,   [ ' 1 ' ,   ' b ' ] ,   [ ' 2 ' ,   ' c ' ] ] ,   O b j e c t . e n t r i e s ( [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ o b j e c t E n t r i e s   =   f u n c t i o n   t e s t _ o b j e c t E n t r i e s ( )   { 
             i t ( ' t e s t _ o b j e c t E n t r i e s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( [ [ ' a ' ,   ' 1 ' ] ,   [ ' b ' ,   ' 2 ' ] ,   [ ' c ' ,   ' 3 ' ] ] ,   o b j e c t E n t r i e s ( { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' , 
                     c :   ' 3 ' 
                 } ) ) ;   / /   a r r a y   o k 
 
                 c h e c k E q u a l ( [ [ ' 0 ' ,   ' a ' ] ,   [ ' 1 ' ,   ' b ' ] ,   [ ' 2 ' ,   ' c ' ] ] ,   o b j e c t E n t r i e s ( [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t E n t r i e s ( ' A B C ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ o b j e c t F r o m E n t r i e s   =   f u n c t i o n   t e s t _ o b j e c t F r o m E n t r i e s ( )   { 
             i t ( ' t e s t _ o b j e c t F r o m E n t r i e s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' , 
                     c :   ' 3 ' 
                 } ,   o b j e c t F r o m E n t r i e s ( [ [ ' a ' ,   ' 1 ' ] ,   [ ' b ' ,   ' 2 ' ] ,   [ ' c ' ,   ' 3 ' ] ] ) ) ; 
                 c h e c k E q u a l ( { } ,   o b j e c t F r o m E n t r i e s ( [ ] ) ) ; 
                 c h e c k E q u a l ( { 
                     ' 0 ' :   ' a ' , 
                     ' 1 ' :   ' b ' , 
                     ' 2 ' :   ' c ' 
                 } ,   o b j e c t F r o m E n t r i e s ( [ [ ' 0 ' ,   ' a ' ] ,   [ ' 1 ' ,   ' b ' ] ,   [ ' 2 ' ,   ' c ' ] ] ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t F r o m E n t r i e s ( ' A B C ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t F r o m E n t r i e s ( [ ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t F r o m E n t r i e s ( [ [ ' a ' ,   1 ] ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t F r o m E n t r i e s ( [ [ ' a ' ,   1 ] ,   [ ] ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t F r o m E n t r i e s ( [ [ ' a ' ,   1 ] ,   [ ' b ' ] ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t F r o m E n t r i e s ( [ [ ' a ' ,   1 ] ,   [ ' b ' ,   2 ] ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t F r o m E n t r i e s ( [ [ ' a ' ,   1 ] ,   [ ' b ' ,   2 ,   3 ] ] ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ o b j e c t K e y s   =   f u n c t i o n   t e s t _ o b j e c t K e y s ( )   { 
             i t ( ' t e s t _ o b j e c t K e y s ' ,   f u n c t i o n   ( )   { 
                 v a r   a r r a y 1   =   [ ' a ' ,   ' b ' ,   ' c ' ] ; 
                 v a r   o b j e c t 1   =   { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' , 
                     c :   ' 3 ' 
                 } ; 
                 c h e c k E q u a l ( a r r a y 1 ,   o b j e c t K e y s ( o b j e c t 1 ) ) ;   / /   o n l y   o b j e c t   t y p e 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t K e y s ( a r r a y 1 ) ; 
                 } ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( a r r a y 1 ,   o b j e c t K e y s ( { 
                     o b j e c t :   o b j e c t 1 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ o b j e c t V a l u e s   =   f u n c t i o n   t e s t _ o b j e c t V a l u e s ( )   { 
             i t ( ' t e s t _ o b j e c t V a l u e s ' ,   f u n c t i o n   ( )   { 
                 v a r   a r r a y 1   =   [ ' 1 ' ,   ' 2 ' ,   ' 3 ' ] ; 
                 v a r   o b j e c t 1   =   { 
                     a :   ' 1 ' , 
                     b :   ' 2 ' , 
                     c :   ' 3 ' 
                 } ; 
                 c h e c k E q u a l ( a r r a y 1 ,   o b j e c t V a l u e s ( o b j e c t 1 ) ) ;   / /   o n l y   o b j e c t   t y p e 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   o b j e c t V a l u e s ( a r r a y 1 ) ; 
                 } ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( a r r a y 1 ,   o b j e c t V a l u e s ( { 
                     o b j e c t :   o b j e c t 1 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ p r o p e r t y L i s t   =   f u n c t i o n   t e s t _ p r o p e r t y L i s t ( )   { 
             i t ( ' t e s t _ p r o p e r t y L i s t ' ,   f u n c t i o n   ( )   { 
                 / /   c h e c k E q u a l ( ' a \ n   b \ n   c ' ,   p a r t s . s t r i n g . t r i m B o t h E n d s ( ' \ n   a \ n   b \ n   c \ n     ' ,   [ ' \ n ' ,   '   ' ] ) ) ; 
                 / /   c h e c k E q u a l ( ' a \ n b \ n c ' ,   ' a \ n   b \ n   c ' . s p l i t ( ' \ n ' ) . m a p ( v   = >   p a r t s . s t r i n g . t r i m F i r s t ( v ,   [ '   ' ] ) ) . j o i n ( ' \ n ' ) ) ; 
                 v a r   o b j e c t 1   =   { 
                     a :   ' A ' , 
                     b :   { 
                         b 1 :   ' B 1 ' , 
                         b 2 :   ' B 2 ' 
                     } , 
                     c :   { 
                         c 1 :   { 
                             c 1 1 :   ' C 1 1 ' 
                         } , 
                         c 2 :   ' C 2 ' 
                     } , 
                     d :   ' D ' 
                 } ; 
                 v a r   t e s t P a t t e r n   =   p a r t s . s t r i n g . t r i m B o t h E n d s ( " \ n                     . a : [ o b j e c t   S t r i n g ] : s t r i n g \ n                     . b . b 1 : [ o b j e c t   S t r i n g ] : s t r i n g \ n                     . b . b 2 : [ o b j e c t   S t r i n g ] : s t r i n g \ n                     . c . c 1 . c 1 1 : [ o b j e c t   S t r i n g ] : s t r i n g \ n                     . c . c 2 : [ o b j e c t   S t r i n g ] : s t r i n g \ n                     . d : [ o b j e c t   S t r i n g ] : s t r i n g \ n                 " ,   [ ' \ n ' ,   '   ' ] ) ;   / /   c h e c k E q u a l ( 6 ,   t e s t P a t t e r n . s p l i t ( ' \ n ' ) . l e n g t h ) ; 
 
                 c h e c k E q u a l ( p a r t s . a r r a y . m a p ( t e s t P a t t e r n . s p l i t ( ' \ n ' ) ,   f u n c t i o n   ( v )   { 
                     r e t u r n   p a r t s . s t r i n g . t r i m F i r s t ( v ,   [ '   ' ] ) ; 
                 } ) . j o i n ( ' \ n ' )   +   ' \ n ' ,   p r o p e r t y L i s t ( o b j e c t 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   p a r t s . i s M o d u l e ( o b j e c t 1 ) ) ; 
             } ) ; 
         } ; 
 
         t e s t _ h a s ( ) ; 
         t e s t _ c o p y P r o p e r t y ( ) ; 
         t e s t _ i n P r o p e r t y ( ) ; 
         t e s t _ f i x P r o p e r t y ( ) ; 
         t e s t _ p r o p e r t y C o u n t ( ) ; 
         t e s t _ g e t P r o p e r t y ( ) ; 
         t e s t _ s e t P r o p e r t y ( ) ; 
         t e s t _ i s O b j e c t P a r a m e t e r ( ) ; 
         t e s t _ O b j e c t E n t r i e s _ s t a n d a r d ( ) ; 
         t e s t _ o b j e c t E n t r i e s ( ) ; 
         t e s t _ o b j e c t F r o m E n t r i e s ( ) ; 
         t e s t _ o b j e c t K e y s ( ) ; 
         t e s t _ o b j e c t V a l u e s ( ) ; 
         t e s t _ p r o p e r t y L i s t ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ o b j e c t   =   t e s t _ e x e c u t e _ o b j e c t ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ o b j e c t :   t e s t _ e x e c u t e _ o b j e c t 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) , 
 
 / * * * /   1 4 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ o t h e r   =   v o i d   0 ; 
 
 v a r   t e s t _ e x e c u t e _ o t h e r   =   f u n c t i o n   t e s t _ e x e c u t e _ o t h e r ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             c h e c k E q u a l   =   _ p a r t s $ t e s t . c h e c k E q u a l , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t , 
             t e s t   =   _ p a r t s $ t e s t . t e s t ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ o t h e r ' ,   f u n c t i o n   ( )   { 
         v a r   t e s t _ s p l i t   =   f u n c t i o n   t e s t _ s p l i t ( )   { 
             i t ( ' t e s t _ s p l i t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 3 ,   ' a , b , c ' . s p l i t ( ' , ' ) . l e n g t h ) ; 
                 c h e c k E q u a l ( 4 ,   ' a , b , c , ' . s p l i t ( ' , ' ) . l e n g t h ) ; 
                 c h e c k E q u a l ( ' a ' ,   ' a , b , c , ' . s p l i t ( ' , ' ) [ 0 ] ) ; 
                 c h e c k E q u a l ( ' ' ,   ' a , b , c , ' . s p l i t ( ' , ' ) [ 3 ] ) ; 
             } ) ; 
         } ; 
 
         t e s t _ s p l i t ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ o t h e r   =   t e s t _ e x e c u t e _ o t h e r ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ o t h e r :   t e s t _ e x e c u t e _ o t h e r 
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
 / * * * /   } ) , 
 
 / * * * /   9 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ s t r i n g   =   v o i d   0 ; 
 
 / *   e s l i n t - d i s a b l e   s p a c e - i n - p a r e n s   * / 
 
 / *   e s l i n t - d i s a b l e   m a x - l e n   * / 
 v a r   t e s t _ e x e c u t e _ s t r i n g   =   f u n c t i o n   t e s t _ e x e c u t e _ s t r i n g ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ s t r i n g ' ,   f u n c t i o n   ( )   { 
         v a r   _ p a r t s $ t e s t 2   =   p a r t s . t e s t , 
                 c h e c k E q u a l   =   _ p a r t s $ t e s t 2 . c h e c k E q u a l , 
                 i s T h r o w n   =   _ p a r t s $ t e s t 2 . i s T h r o w n , 
                 i s T h r o w n E x c e p t i o n   =   _ p a r t s $ t e s t 2 . i s T h r o w n E x c e p t i o n , 
                 t e s t C o u n t e r   =   _ p a r t s $ t e s t 2 . t e s t C o u n t e r ; 
         v a r   _ p a r t s $ s t r i n g   =   p a r t s . s t r i n g , 
                 m a t c h F o r m a t   =   _ p a r t s $ s t r i n g . m a t c h F o r m a t , 
                 r e p l a c e A l l   =   _ p a r t s $ s t r i n g . r e p l a c e A l l , 
                 r e p l a c e A l l R e p e a t   =   _ p a r t s $ s t r i n g . r e p l a c e A l l R e p e a t , 
                 r e p l a c e A l l A r r a y   =   _ p a r t s $ s t r i n g . r e p l a c e A l l A r r a y , 
                 i n d e x O f F i r s t   =   _ p a r t s $ s t r i n g . i n d e x O f F i r s t , 
                 i n d e x O f L a s t   =   _ p a r t s $ s t r i n g . i n d e x O f L a s t , 
                 i n c l u d e C o u n t   =   _ p a r t s $ s t r i n g . i n c l u d e C o u n t , 
                 i s F i r s t   =   _ p a r t s $ s t r i n g . i s F i r s t , 
                 i s L a s t   =   _ p a r t s $ s t r i n g . i s L a s t , 
                 i s B o t h E n d s   =   _ p a r t s $ s t r i n g . i s B o t h E n d s , 
                 i n c l u d e F i r s t   =   _ p a r t s $ s t r i n g . i n c l u d e F i r s t , 
                 i n c l u d e L a s t   =   _ p a r t s $ s t r i n g . i n c l u d e L a s t , 
                 i n c l u d e B o t h E n d s   =   _ p a r t s $ s t r i n g . i n c l u d e B o t h E n d s , 
                 e x c l u d e F i r s t   =   _ p a r t s $ s t r i n g . e x c l u d e F i r s t , 
                 e x c l u d e L a s t   =   _ p a r t s $ s t r i n g . e x c l u d e L a s t , 
                 e x c l u d e B o t h E n d s   =   _ p a r t s $ s t r i n g . e x c l u d e B o t h E n d s , 
                 t r i m F i r s t   =   _ p a r t s $ s t r i n g . t r i m F i r s t , 
                 t r i m L a s t   =   _ p a r t s $ s t r i n g . t r i m L a s t , 
                 t r i m B o t h E n d s   =   _ p a r t s $ s t r i n g . t r i m B o t h E n d s , 
                 s u b I n d e x   =   _ p a r t s $ s t r i n g . s u b I n d e x , 
                 s u b L e n g t h   =   _ p a r t s $ s t r i n g . s u b L e n g t h , 
                 s u b F i r s t   =   _ p a r t s $ s t r i n g . s u b F i r s t , 
                 s u b L a s t   =   _ p a r t s $ s t r i n g . s u b L a s t , 
                 d e l e t e I n d e x   =   _ p a r t s $ s t r i n g . d e l e t e I n d e x , 
                 d e l e t e L e n g t h   =   _ p a r t s $ s t r i n g . d e l e t e L e n g t h , 
                 d e l e t e F i r s t   =   _ p a r t s $ s t r i n g . d e l e t e F i r s t , 
                 d e l e t e L a s t   =   _ p a r t s $ s t r i n g . d e l e t e L a s t , 
                 i n s e r t   =   _ p a r t s $ s t r i n g . i n s e r t , 
                 a d d   =   _ p a r t s $ s t r i n g . a d d , 
                 s u b F i r s t D e l i m F i r s t   =   _ p a r t s $ s t r i n g . s u b F i r s t D e l i m F i r s t , 
                 s u b F i r s t D e l i m L a s t   =   _ p a r t s $ s t r i n g . s u b F i r s t D e l i m L a s t , 
                 s u b L a s t D e l i m F i r s t   =   _ p a r t s $ s t r i n g . s u b L a s t D e l i m F i r s t , 
                 s u b L a s t D e l i m L a s t   =   _ p a r t s $ s t r i n g . s u b L a s t D e l i m L a s t , 
                 t a g I n n e r F i r s t   =   _ p a r t s $ s t r i n g . t a g I n n e r F i r s t , 
                 t a g O u t e r F i r s t   =   _ p a r t s $ s t r i n g . t a g O u t e r F i r s t , 
                 t a g I n n e r L a s t   =   _ p a r t s $ s t r i n g . t a g I n n e r L a s t , 
                 t a g O u t e r L a s t   =   _ p a r t s $ s t r i n g . t a g O u t e r L a s t , 
                 s p l i t   =   _ p a r t s $ s t r i n g . s p l i t , 
                 s p l i t C o m m a I t e m s   =   _ p a r t s $ s t r i n g . s p l i t C o m m a I t e m s , 
                 s p l i t D o t I t e m s   =   _ p a r t s $ s t r i n g . s p l i t D o t I t e m s , 
                 i n d e x O f A n y F i r s t   =   _ p a r t s $ s t r i n g . i n d e x O f A n y F i r s t , 
                 i n d e x O f A n y L a s t   =   _ p a r t s $ s t r i n g . i n d e x O f A n y L a s t , 
                 p a d d i n g F i r s t   =   _ p a r t s $ s t r i n g . p a d d i n g F i r s t , 
                 p a d d i n g L a s t   =   _ p a r t s $ s t r i n g . p a d d i n g L a s t , 
                 e s c a p e R e g E x p   =   _ p a r t s $ s t r i n g . e s c a p e R e g E x p ; 
 
         v a r   t e s t _ m a t c h F o r m a t   =   f u n c t i o n   t e s t _ m a t c h F o r m a t ( )   { 
             i t ( ' t e s t _ m a t c h F o r m a t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' n u m b e r ' ,   ' 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' n u m b e r ' ,   ' 1 2 a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' n u m b e r ' ,   ' - 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' i n t e g e r ' ,   ' - 1 2 3 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y / m / d ' ,   ' 2 0 1 9 / 1 1 / 0 5 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y / m / d ' ,   ' 2 0 1 9 / 9 / 5 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y / m / d ' ,   ' 1 9 / 1 / 1 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y / m / d ' ,   ' 9 / 1 1 / 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y / m / d ' ,   ' / 1 1 / 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y / m / d ' ,   ' 9 / / 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y / m / d ' ,   ' 9 / 1 / ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y / m / d ' ,   ' 2 0 1 9 - 0 9 - 0 9 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y / m / d ' ,   ' 2 0 1 9 - 9 - 9 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m / d ' ,   ' 2 0 1 9 / 1 1 / 0 5 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m / d ' ,   ' 2 0 1 9 / 9 / 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m / d ' ,   ' 1 9 / 1 / 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m / d ' ,   ' 9 / 1 1 / 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m / d ' ,   ' / 1 1 / 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m / d ' ,   ' 9 / / 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m / d ' ,   ' 9 / 1 / ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m / d ' ,   ' 2 0 1 9 - 0 9 - 0 9 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m / d ' ,   ' 2 0 1 9 - 9 - 9 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m m / d d ' ,   ' 2 0 1 9 / 1 1 / 0 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m m / d d ' ,   ' 2 0 1 9 / 9 / 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m m / d d ' ,   ' 1 9 / 1 / 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m m / d d ' ,   ' 9 / 1 1 / 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m m / d d ' ,   ' / 1 1 / 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m m / d d ' ,   ' 9 / / 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m m / d d ' ,   ' 9 / 1 / ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m m / d d ' ,   ' 2 0 1 9 - 0 9 - 0 9 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y / m m / d d ' ,   ' 2 0 1 9 - 9 - 9 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y - m - d ' ,   ' 2 0 1 9 - 1 1 - 0 5 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y - m - d ' ,   ' 2 0 1 9 - 9 - 5 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y - m - d ' ,   ' 1 9 - 1 - 1 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y - m - d ' ,   ' 9 - 1 1 - 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y - m - d ' ,   ' - 1 1 - 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y - m - d ' ,   ' 9 - - 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y - m - d ' ,   ' 9 - 1 - ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y - m - d ' ,   ' 2 0 1 9 / 0 9 / 0 9 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y - m - d ' ,   ' 2 0 1 9 / 9 / 9 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m - d ' ,   ' 2 0 1 9 - 1 1 - 0 5 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m - d ' ,   ' 2 0 1 9 - 9 - 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m - d ' ,   ' 1 9 - 1 - 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m - d ' ,   ' 9 - 1 1 - 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m - d ' ,   ' - 1 1 - 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m - d ' ,   ' 9 - - 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m - d ' ,   ' 9 - 1 - ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m - d ' ,   ' 2 0 1 9 / 0 9 / 0 9 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m - d ' ,   ' 2 0 1 9 / 9 / 9 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m m - d d ' ,   ' 2 0 1 9 - 1 1 - 0 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m m - d d ' ,   ' 2 0 1 9 - 9 - 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m m - d d ' ,   ' 1 9 - 1 - 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m m - d d ' ,   ' 9 - 1 1 - 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m m - d d ' ,   ' - 1 1 - 1 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m m - d d ' ,   ' 9 - - 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m m - d d ' ,   ' 9 - 1 - ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m m - d d ' ,   ' 2 0 1 9 / 0 9 / 0 9 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( ' d a t e _ y y y y - m m - d d ' ,   ' 2 0 1 9 / 9 / 9 ' ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( f a l s e ,   m a t c h F o r m a t ( { 
                     f o r m a t N a m e :   ' n u m b e r ' , 
                     v a l u e :   ' - 1 2 3 ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   m a t c h F o r m a t ( { 
                     f o r m a t N a m e :   ' i n t e g e r ' , 
                     v a l u e :   ' - 1 2 3 ' 
                 } ) ) ;   / /   E x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     m a t c h F o r m a t ( ' i n t e g e r ' ,   ' a b c ' ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   ' t e s t   m a t c h F o r m a t   e x c e p t i o n ' ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     m a t c h F o r m a t ( n u l l ,   ' a b c ' ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   ' t e s t   m a t c h F o r m a t   e x c e p t i o n ' ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     m a t c h F o r m a t ( ' i n t e g e r ' ,   1 2 3 ) ; 
                 } ,   n e w   T y p e E r r o r ( ) . n a m e ) ,   ' t e s t   m a t c h F o r m a t   e x c e p t i o n ' ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n E x c e p t i o n ( f u n c t i o n   ( )   { 
                     m a t c h F o r m a t ( ' a a a ' ,   ' a b c ' ) ; 
                 } ,   n e w   R a n g e E r r o r ( ) . n a m e ) ,   ' t e s t   m a t c h F o r m a t   e x c e p t i o n ' ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ r e p l a c e A l l   =   f u n c t i o n   t e s t _ r e p l a c e A l l ( )   { 
             i t ( ' t e s t _ r e p l a c e A l l ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l ( ' a b a b ' ,   ' b ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l ( ' a b a b ' ,   ' a b ' ,   ' a a ' ) ) ; 
                 c h e c k E q u a l ( ' a b c a b c ' ,   r e p l a c e A l l ( ' a b a b ' ,   ' a b ' ,   ' a b c ' ) ) ; 
                 c h e c k E q u a l ( ' a c c c b ' ,   r e p l a c e A l l ( ' a c c c c c c b ' ,   ' c c ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( ' a c ' ,   r e p l a c e A l l ( ' a b c ' ,   ' b ' ,   ' ' ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l ( { 
                     s t r :   ' a b a b ' , 
                     b e f o r e :   ' b ' , 
                     a f t e r :   ' a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l ( ' a b a b ' ,   { 
                     b e f o r e :   ' b ' , 
                     a f t e r :   ' a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l ( ' a b a b ' ,   ' b ' ,   { 
                     a f t e r :   ' a ' 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' 1 2 1 2 ' ,   ' 2 ' ,   ' 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l ( ' 1 2 1 2 ' ,   ' 1 2 ' ,   ' 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l ( 1 2 1 2 ,   ' 1 2 ' ,   ' 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l ( ' 1 2 1 2 ' ,   1 2 ,   ' 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l ( ' 1 2 1 2 ' ,   ' 1 2 ' ,   1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l ( ' a b c ' ,   ' ' ,   ' c ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l ( ' ' ,   ' a ' ,   ' c ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ r e p l a c e A l l R e p e a t   =   f u n c t i o n   t e s t _ r e p l a c e A l l R e p e a t ( )   { 
             i t ( ' t e s t _ r e p l a c e A l l R e p e a t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l R e p e a t ( ' a b a b ' ,   ' b ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l R e p e a t ( ' a b a b ' ,   ' a b ' ,   ' a a ' ) ) ; 
                 c h e c k E q u a l ( ' a c b ' ,   r e p l a c e A l l R e p e a t ( ' a c c c c c c b ' ,   ' c c ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( ' a c ' ,   r e p l a c e A l l R e p e a t ( ' a b c ' ,   ' b ' ,   ' ' ) ) ; 
                 c h e c k E q u a l ( ' A A B B A A B B ' ,   r e p l a c e A l l R e p e a t ( ' A A A B B B ' ,   ' A B ' ,   ' B B A A ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' A B B A A B A B B A A B ' ,   r e p l a c e A l l R e p e a t ( ' A A A B B B ' ,   ' A B ' ,   ' B B A A ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' B B A A B A B B A A B B A A B A B B A A ' ,   r e p l a c e A l l R e p e a t ( ' A A A B B B ' ,   ' A B ' ,   ' B B A A ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' A           B ' ,   r e p l a c e A l l R e p e a t ( ' A                   B ' ,   '     ' ,   '   ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' A       B ' ,   r e p l a c e A l l R e p e a t ( ' A                   B ' ,   '     ' ,   '   ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' A     B ' ,   r e p l a c e A l l R e p e a t ( ' A                   B ' ,   '     ' ,   '   ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' A   B ' ,   r e p l a c e A l l R e p e a t ( ' A                   B ' ,   '     ' ,   '   ' ,   4 ) ) ; 
                 c h e c k E q u a l ( ' A   B ' ,   r e p l a c e A l l R e p e a t ( ' A                   B ' ,   '     ' ,   '   ' ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l R e p e a t ( { 
                     s t r :   ' a b a b ' , 
                     b e f o r e :   ' b ' , 
                     a f t e r :   ' a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l R e p e a t ( ' a b a b ' ,   { 
                     b e f o r e :   ' b ' , 
                     a f t e r :   ' a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l R e p e a t ( ' a b a b ' ,   ' b ' ,   { 
                     a f t e r :   ' a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A     B ' ,   r e p l a c e A l l R e p e a t ( { 
                     s t r :   ' A                   B ' , 
                     b e f o r e :   '     ' , 
                     a f t e r :   '   ' , 
                     m a x C o u n t :   3 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A     B ' ,   r e p l a c e A l l R e p e a t ( ' A                   B ' ,   { 
                     b e f o r e :   '     ' , 
                     a f t e r :   '   ' , 
                     m a x C o u n t :   3 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A     B ' ,   r e p l a c e A l l R e p e a t ( ' A                   B ' ,   '     ' ,   { 
                     a f t e r :   '   ' , 
                     m a x C o u n t :   3 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A     B ' ,   r e p l a c e A l l R e p e a t ( ' A                   B ' ,   '     ' ,   '   ' ,   { 
                     m a x C o u n t :   3 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' 1 2 1 2 ' ,   ' 2 ' ,   ' 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' 1 2 1 2 ' ,   ' 1 2 ' ,   ' 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( 1 2 1 2 ,   ' 1 2 ' ,   ' 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' 1 2 1 2 ' ,   1 2 ,   ' 1 2 3 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' 1 2 1 2 ' ,   ' 1 2 ' ,   1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' a b c ' ,   ' ' ,   ' c ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' ' ,   ' a ' ,   ' c ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' a b a b ' ,   ' a b ' ,   ' a b c ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' A                   B ' ,   '     ' ,   '   ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l R e p e a t ( ' A                   B ' ,   '     ' ,   '   ' ,   ' ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ r e p l a c e A l l A r r a y   =   f u n c t i o n   t e s t _ r e p l a c e A l l A r r a y ( )   { 
             i t ( ' t e s t _ r e p l a c e A l l A r r a y ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l A r r a y ( ' a b a b ' ,   [ [ ' b ' ,   ' a ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' a a a a ' ,   r e p l a c e A l l A r r a y ( ' a b a b ' ,   [ [ ' a b ' ,   ' a a ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' a b c a b c ' ,   r e p l a c e A l l A r r a y ( ' a b a b ' ,   [ [ ' a b ' ,   ' a b c ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' b a b a ' ,   r e p l a c e A l l A r r a y ( ' a b a b ' ,   [ [ ' b ' ,   ' a ' ] ,   [ ' a ' ,   ' b ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' b b b b ' ,   r e p l a c e A l l A r r a y ( ' a b a b ' ,   [ [ ' a ' ,   ' b ' ] ,   [ ' d ' ,   ' b ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' c b c b ' ,   r e p l a c e A l l A r r a y ( ' a b a b ' ,   [ [ ' a ' ,   ' c ' ] ,   [ ' d ' ,   ' b ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' a c a c ' ,   r e p l a c e A l l A r r a y ( ' a b a b ' ,   [ [ ' c ' ,   ' a ' ] ,   [ ' b ' ,   ' c ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' a b a b ' ,   r e p l a c e A l l A r r a y ( ' a b a b ' ,   [ [ ' c ' ,   ' a ' ] ,   [ ' d ' ,   ' b ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' a b a b ' ,   r e p l a c e A l l A r r a y ( ' a b c a b c ' ,   [ [ ' a b c ' ,   ' a b ' ] ,   [ ' b c a ' ,   ' b ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' a b a b ' ,   r e p l a c e A l l A r r a y ( ' a b c a b c ' ,   [ [ ' b c a ' ,   ' b ' ] ,   [ ' a b c ' ,   ' a b ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' a b b c ' ,   r e p l a c e A l l A r r a y ( ' a b c a b c ' ,   [ [ ' b c a ' ,   ' b ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' e c e c ' ,   r e p l a c e A l l A r r a y ( ' a b c a b c ' ,   [ [ ' a b ' ,   ' e ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' e c e c ' ,   r e p l a c e A l l A r r a y ( ' a b c a b c ' ,   [ [ ' a b ' ,   ' e ' ] ,   [ ' a b c ' ,   ' d ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' d d ' ,   r e p l a c e A l l A r r a y ( ' a b c a b c ' ,   [ [ ' a b c ' ,   ' d ' ] ,   [ ' a b ' ,   ' e ' ] ] ) ) ; 
                 c h e c k E q u a l ( ' a b c a b c a b c a b c ' ,   r e p l a c e A l l A r r a y ( ' a b c \ r \ n   a b c \ r   a b c   \ n   a   b   c \ r     \ n ' ,   [ [ '   ' ,   ' ' ] ,   [ ' \ n ' ,   ' ' ] ,   [ ' \ r ' ,   ' ' ] ] ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' a b c a b c ' ,   r e p l a c e A l l A r r a y ( { 
                     s t r :   ' a b a b ' , 
                     r e p l a c e A r r a y :   [ [ ' a b ' ,   ' a b c ' ] ] 
                 } ) ) ;   / /   e x c e p t i o n 
 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l A r r a y ( ' 1 2 1 2 ' ,   [ [ ' 1 2 ' ,   ' 1 2 3 ' ] ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l A r r a y ( ' 1 2 1 2 ' ,   ' a ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l A r r a y ( ' 1 2 1 2 ' ,   1 2 3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l A r r a y ( ' 1 2 1 2 ' ,   [ ' 1 2 ' ,   ' 1 2 3 ' ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l A r r a y ( 1 2 1 2 ,   [ [ ' 1 2 ' ,   ' 1 2 3 ' ] ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l A r r a y ( ' 1 2 1 2 ' ,   [ [ ' 1 2 3 ' ] ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l A r r a y ( ' 1 2 1 2 ' ,   [ [ 1 2 ,   ' 1 2 3 ' ] ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e p l a c e A l l A r r a y ( ' 1 2 1 2 ' ,   [ [ ' 1 2 ' ,   1 2 3 ] ] ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n d e x O f _ s t a n d a r d   =   f u n c t i o n   t e s t _ i n d e x O f _ s t a n d a r d ( )   { 
             i t ( ' t e s t _ i n d e x O f _ s t a n d a r d ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 c h e c k E q u a l ( 0 ,   ' a ' . i n d e x O f ( ' a ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   ' a ' . i n d e x O f ( ' ' ) ) ;   / /   s t r a n g e 
 
                 c h e c k E q u a l ( - 1 ,   ' ' . i n d e x O f ( ' a ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   ' ' . i n d e x O f ( ' ' ) ) ;   / /   s t r a n g e 
 
                 c h e c k E q u a l ( 0 ,   ' a b c ' . i n d e x O f ( ' a ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   ' a b c ' . i n d e x O f ( ' b ' ) ) ; 
                 c h e c k E q u a l ( 2 ,   ' a b c ' . i n d e x O f ( ' c ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c ' . i n d e x O f ( ' d ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   ' a b c ' . i n d e x O f ( ' ' ) ) ;   / /   s t r a n g e 
 
                 c h e c k E q u a l ( 0 ,   ' a b c a b c ' . i n d e x O f ( ' a ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   ' a b c a b c ' . i n d e x O f ( ' b ' ) ) ; 
                 c h e c k E q u a l ( 2 ,   ' a b c a b c ' . i n d e x O f ( ' c ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . i n d e x O f ( ' d ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   ' a b c a b c ' . i n d e x O f ( ' ' ) ) ;   / /   s t r a n g e 
                 / /   s t a r t I n d e x 
 
                 c h e c k E q u a l ( 0 ,   ' a b c a b c ' . i n d e x O f ( ' a ' ,   - 1 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 0 ,   ' a b c a b c ' . i n d e x O f ( ' a ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 3 ,   ' a b c a b c ' . i n d e x O f ( ' a ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 3 ,   ' a b c a b c ' . i n d e x O f ( ' a ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 3 ,   ' a b c a b c ' . i n d e x O f ( ' a ' ,   3 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . i n d e x O f ( ' a ' ,   4 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . i n d e x O f ( ' a ' ,   5 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . i n d e x O f ( ' a ' ,   6 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 1 ,   ' a b c a b c ' . i n d e x O f ( ' b ' ,   - 1 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 1 ,   ' a b c a b c ' . i n d e x O f ( ' b ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 1 ,   ' a b c a b c ' . i n d e x O f ( ' b ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 4 ,   ' a b c a b c ' . i n d e x O f ( ' b ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 4 ,   ' a b c a b c ' . i n d e x O f ( ' b ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 4 ,   ' a b c a b c ' . i n d e x O f ( ' b ' ,   4 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . i n d e x O f ( ' b ' ,   5 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . i n d e x O f ( ' b ' ,   6 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 2 ,   ' a b c a b c ' . i n d e x O f ( ' c ' ,   - 1 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( 2 ,   ' a b c a b c ' . i n d e x O f ( ' c ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 2 ,   ' a b c a b c ' . i n d e x O f ( ' c ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 2 ,   ' a b c a b c ' . i n d e x O f ( ' c ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 ,   ' a b c a b c ' . i n d e x O f ( ' c ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 5 ,   ' a b c a b c ' . i n d e x O f ( ' c ' ,   4 ) ) ; 
                 c h e c k E q u a l ( 5 ,   ' a b c a b c ' . i n d e x O f ( ' c ' ,   5 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . i n d e x O f ( ' c ' ,   6 ) ) ;   / /   ? 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n d e x O f F i r s t   =   f u n c t i o n   t e s t _ i n d e x O f F i r s t ( )   { 
             i t ( ' t e s t _ i n d e x O f F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 0 ,   i n d e x O f F i r s t ( ' a ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' a ' ,   ' ' ) ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' ' ,   ' ' ) ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( 0 ,   i n d e x O f F i r s t ( ' a b c ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f F i r s t ( ' a b c ' ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f F i r s t ( ' a b c ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' a b c ' ,   ' d ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' a b c ' ,   ' ' ) ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( 0 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' d ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' ' ) ) ;   / /   n o t   s t r a n g e 
                 / /   s t a r t I n d e x 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' a ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 0 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' a ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' a ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' a ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' a ' ,   3 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' a ' ,   4 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' a ' ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' a ' ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' b ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' b ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' b ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' b ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' b ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' b ' ,   4 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' b ' ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' b ' ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' c ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' c ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' c ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' c ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' c ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' c ' ,   4 ) ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' c ' ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f F i r s t ( ' a b c a b c ' ,   ' c ' ,   6 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ l a s t I n d e x O f _ s t a n d a r d   =   f u n c t i o n   t e s t _ l a s t I n d e x O f _ s t a n d a r d ( )   { 
             i t ( ' t e s t _ l a s t I n d e x O f _ s t a n d a r d ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 c h e c k E q u a l ( 0 ,   ' a ' . l a s t I n d e x O f ( ' a ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   ' a ' . l a s t I n d e x O f ( ' ' ) ) ;   / /   s t r a n g e 
 
                 c h e c k E q u a l ( - 1 ,   ' ' . l a s t I n d e x O f ( ' a ' ) ) ; 
                 c h e c k E q u a l ( 0 ,   ' ' . l a s t I n d e x O f ( ' ' ) ) ;   / /   s t r a n g e 
 
                 c h e c k E q u a l ( 0 ,   ' a b c ' . l a s t I n d e x O f ( ' a ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   ' a b c ' . l a s t I n d e x O f ( ' b ' ) ) ; 
                 c h e c k E q u a l ( 2 ,   ' a b c ' . l a s t I n d e x O f ( ' c ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c ' . l a s t I n d e x O f ( ' d ' ) ) ; 
                 c h e c k E q u a l ( 3 ,   ' a b c ' . l a s t I n d e x O f ( ' ' ) ) ;   / /   s t r a n g e 
 
                 c h e c k E q u a l ( 3 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' a ' ) ) ; 
                 c h e c k E q u a l ( 4 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' b ' ) ) ; 
                 c h e c k E q u a l ( 5 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' c ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' d ' ) ) ; 
                 c h e c k E q u a l ( 6 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' ' ) ) ;   / /   s t r a n g e 
                 / /   s t a r t I n d e x 
 
                 c h e c k E q u a l ( 0 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' a ' ,   - 1 ) ) ;   / /   ? ? 
 
                 c h e c k E q u a l ( 0 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' a ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 0 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' a ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 0 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' a ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 3 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' a ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 3 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' a ' ,   4 ) ) ; 
                 c h e c k E q u a l ( 3 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' a ' ,   5 ) ) ; 
                 c h e c k E q u a l ( 3 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' a ' ,   6 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' b ' ,   - 1 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' b ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 1 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' b ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 1 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' b ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 1 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' b ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 4 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' b ' ,   4 ) ) ; 
                 c h e c k E q u a l ( 4 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' b ' ,   5 ) ) ; 
                 c h e c k E q u a l ( 4 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' b ' ,   6 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' c ' ,   - 1 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' c ' ,   0 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' c ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 2 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' c ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 2 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' c ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 2 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' c ' ,   4 ) ) ; 
                 c h e c k E q u a l ( 5 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' c ' ,   5 ) ) ; 
                 c h e c k E q u a l ( 5 ,   ' a b c a b c ' . l a s t I n d e x O f ( ' c ' ,   6 ) ) ;   / /   ? 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n d e x O f L a s t   =   f u n c t i o n   t e s t _ i n d e x O f L a s t ( )   { 
             i t ( ' t e s t _ i n d e x O f L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 0 ,   i n d e x O f L a s t ( ' a ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' a ' ,   ' ' ) ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' ' ,   ' ' ) ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( 0 ,   i n d e x O f L a s t ( ' a b c ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f L a s t ( ' a b c ' ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f L a s t ( ' a b c ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' a b c ' ,   ' d ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' a b c ' ,   ' ' ) ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( 3 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' d ' ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' ' ) ) ;   / /   n o t   s t r a n g e 
                 / /   s t a r t I n d e x 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f L a s t ( ' a b c a b c ' ,   ' a ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 0 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' a ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 0 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' a ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 0 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' a ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' a ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' a ' ,   4 ) ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' a ' ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f L a s t ( ' a b c a b c ' ,   ' a ' ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f L a s t ( ' a b c a b c ' ,   ' b ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' b ' ,   0 ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' b ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' b ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' b ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' b ' ,   4 ) ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' b ' ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f L a s t ( ' a b c a b c ' ,   ' b ' ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f L a s t ( ' a b c a b c ' ,   ' c ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' c ' ,   0 ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' c ' ,   1 ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' c ' ,   2 ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' c ' ,   3 ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' c ' ,   4 ) ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f L a s t ( ' a b c a b c ' ,   ' c ' ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f L a s t ( ' a b c a b c ' ,   ' c ' ,   6 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n d e x O f A n y F i r s t   =   f u n c t i o n   t e s t _ i n d e x O f A n y F i r s t ( )   { 
             i t ( ' t e s t _ i n d e x O f A n y F i r s t ' ,   f u n c t i o n   ( )   { 
                 / /   e l e m e n t   1 
                 c h e c k E q u a l ( 0 ,   i n d e x O f A n y F i r s t ( ' a ' ,   [ ' a ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' a ' ,   [ ' ' ] ) . i n d e x ) ;   / /   ] n o t   s t r a n g e 
 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' ' ,   [ ' a ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' ' ,   [ ' ' ] ) . i n d e x ) ;   / /   [ n o t   s t r a n g e 
 
                 c h e c k E q u a l ( 0 ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' a ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' b ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' c ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' d ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' ' ] ) . i n d e x ) ;   / /   ] n o t   s t r a n g e 
 
                 c h e c k E q u a l ( 0 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' c ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' d ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' ' ] ) . i n d e x ) ;   / /   ] n o t   s t r a n g e 
                 / /   s t a r t I n d e x 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ] ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 0 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ] ,   0 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ] ,   1 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ] ,   2 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ] ,   3 ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ] ,   4 ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ] ,   5 ) . i n d e x ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ] ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   0 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   1 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   2 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   3 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   4 ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   5 ) . i n d e x ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' c ' ] ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' c ' ] ,   0 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' c ' ] ,   1 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' c ' ] ,   2 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' c ' ] ,   3 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' c ' ] ,   4 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' c ' ] ,   5 ) . i n d e x ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' c ' ] ,   6 ) ; 
                 } ) ) ;   / /   e l e m e n t   m a n y 
 
                 v a r   _ c h e c k E q u a l   =   f u n c t i o n   _ c h e c k E q u a l ( r e s u l t ,   f u n c t i o n R e s u l t )   { 
                     c h e c k E q u a l ( { 
                         i n d e x :   r e s u l t [ 0 ] , 
                         s e a r c h I n d e x :   r e s u l t [ 1 ] 
                     } ,   f u n c t i o n R e s u l t ) ; 
                 } ; 
 
                 _ c h e c k E q u a l ( [ - 1 ,   - 1 ] ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' d ' ,   ' e ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 0 ,   0 ] ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' a ' ,   ' c ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 0 ,   1 ] ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' c ' ,   ' a ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 1 ,   0 ] ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' b ' ,   ' c ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 1 ,   1 ] ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' c ' ,   ' b ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   1 ] ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' ' ,   ' c ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   0 ] ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' c ' ,   ' ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ - 1 ,   - 1 ] ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' ' ,   ' ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ - 1 ,   - 1 ] ,   i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ' ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 0 ,   0 ] ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   0 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   1 ] ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   1 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   1 ] ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   2 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 3 ,   0 ] ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   3 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 1 ,   0 ] ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   1 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 4 ,   0 ] ,   i n d e x O f A n y F i r s t ( ' a b c a b c ' ,   [ ' b ' ] ,   2 ) ) ;   / /   e x c e p t i o n 
 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n d e x O f A n y F i r s t ( ' a b c ' ,   ' a b ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n d e x O f A n y F i r s t ( ' a b c ' ,   [ ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n d e x O f A n y F i r s t ( ' a b c ' ,   [ 1 2 3 ] ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n d e x O f A n y L a s t   =   f u n c t i o n   t e s t _ i n d e x O f A n y L a s t ( )   { 
             i t ( ' t e s t _ i n d e x O f A n y L a s t ' ,   f u n c t i o n   ( )   { 
                 / /   e l e m e n t   1 
                 c h e c k E q u a l ( 0 ,   i n d e x O f A n y L a s t ( ' a ' ,   [ ' a ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' a ' ,   [ ' ' ] ) . i n d e x ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' ' ,   [ ' a ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' ' ,   [ ' ' ] ) . i n d e x ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( 0 ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' a ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' b ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' c ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' d ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' ' ] ) . i n d e x ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( 3 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' c ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' d ' ] ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' ' ] ) . i n d e x ) ;   / /   n o t   s t r a n g e 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ] ,   - 1 ) . i n d e x ; 
                 } ) ) ; 
                 c h e c k E q u a l ( 0 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ] ,   0 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 0 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ] ,   1 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 0 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ] ,   2 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ] ,   3 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ] ,   4 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 3 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ] ,   5 ) . i n d e x ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ] ,   6 ) . i n d e x ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   - 1 ) . i n d e x ; 
                 } ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   0 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   1 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   2 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 1 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   3 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   4 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 4 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   5 ) . i n d e x ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   6 ) . i n d e x ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' c ' ] ,   - 1 ) . i n d e x ; 
                 } ) ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' c ' ] ,   0 ) . i n d e x ) ; 
                 c h e c k E q u a l ( - 1 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' c ' ] ,   1 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' c ' ] ,   2 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' c ' ] ,   3 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 2 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' c ' ] ,   4 ) . i n d e x ) ; 
                 c h e c k E q u a l ( 5 ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' c ' ] ,   5 ) . i n d e x ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' c ' ] ,   6 ) . i n d e x ; 
                 } ) ) ;   / /   e l e m e n t   m a n y 
 
                 t e s t C o u n t e r ( ) ; 
 
                 v a r   _ c h e c k E q u a l   =   f u n c t i o n   _ c h e c k E q u a l ( r e s u l t ,   f u n c t i o n R e s u l t )   { 
                     c h e c k E q u a l ( { 
                         i n d e x :   r e s u l t [ 0 ] , 
                         s e a r c h I n d e x :   r e s u l t [ 1 ] 
                     } ,   f u n c t i o n R e s u l t ) ; 
                 } ; 
 
                 _ c h e c k E q u a l ( [ - 1 ,   - 1 ] ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' d ' ,   ' e ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   1 ] ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' a ' ,   ' c ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' c ' ,   ' a ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   1 ] ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' b ' ,   ' c ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' c ' ,   ' b ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   1 ] ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' ' ,   ' c ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' c ' ,   ' ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ - 1 ,   - 1 ] ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' ' ,   ' ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ - 1 ,   - 1 ] ,   i n d e x O f A n y L a s t ( ' a b c ' ,   [ ' ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 5 ,   1 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ) ) ; 
 
                 _ c h e c k E q u a l ( [ 5 ,   1 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   5 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 3 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   4 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 3 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   3 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 2 ,   1 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   2 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 0 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   1 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 0 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' a ' ,   ' c ' ] ,   0 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 4 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   5 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 4 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   4 ) ) ; 
 
                 _ c h e c k E q u a l ( [ 1 ,   0 ] ,   i n d e x O f A n y L a s t ( ' a b c a b c ' ,   [ ' b ' ] ,   3 ) ) ;   / /   e x c e p t i o n 
 
 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n d e x O f A n y L a s t ( ' a b c ' ,   ' a b ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n d e x O f A n y L a s t ( ' a b c ' ,   [ ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     i n d e x O f A n y L a s t ( ' a b c ' ,   [ 1 2 3 ] ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s F i r s t   =   f u n c t i o n   t e s t _ i s F i r s t ( )   { 
             i t ( ' t e s t _ i s F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s F i r s t ( ' 1 2 3 ' ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s F i r s t ( ' 1 2 3 ' ,   ' 1 2 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s F i r s t ( ' 1 2 3 ' ,   ' 1 3 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s F i r s t ( ' 1 2 3 ' ,   ' 2 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s F i r s t ( ' A B C ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s F i r s t ( ' A B C ' ,   ' A B ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s F i r s t ( ' A B C ' ,   ' A C ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s F i r s t ( ' A B C ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s F i r s t ( ' A B C ' ,   ' B ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s L a s t   =   f u n c t i o n   t e s t _ i s L a s t ( )   { 
             i t ( ' t e s t _ i s L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s L a s t ( ' 1 2 3 ' ,   ' 3 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s L a s t ( ' 1 2 3 ' ,   ' 2 3 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s L a s t ( ' 1 2 3 ' ,   ' 1 3 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s L a s t ( ' 1 2 3 ' ,   ' 2 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s L a s t ( ' A B C ' ,   ' C ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s L a s t ( ' A B C ' ,   ' B C ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s L a s t ( ' A B C ' ,   ' A C ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s L a s t ( ' A B C ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s L a s t ( ' A B C ' ,   ' B ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s L a s t ( ' 1 ' ,   ' 2 3 ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s B o t h E n d s   =   f u n c t i o n   t e s t _ i s B o t h E n d s ( )   { 
             i t ( ' t e s t _ i s B o t h E n d s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( ' 1 2 1 ' ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( ' 1 2 1 ' ,   ' 2 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( ' 1 2 1 ' ,   ' 1 2 ' ,   ' 2 1 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( ' A B A ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( ' A B A ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( ' A B A ' ,   ' B ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( ' A B A B ' ,   ' A B ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( ' A B A D ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( ' A B A D ' ,   ' A ' ,   ' D ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( ' { A B } ' ,   ' { ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( ' { { } } ' ,   ' { ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( ' A { B } ' ,   ' { ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( ' { A B } ' ,   ' } ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( ' { A B } ' ,   ' { ' ,   ' { ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( ' 1 ' ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( ' 1 1 ' ,   ' 1 ' ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     s e a r c h :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     s e a r c h :   ' a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     s e a r c h F i r s t :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o t h E n d s ( { 
                     s t r :   ' A B A D ' , 
                     s e a r c h F i r s t :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o t h E n d s ( { 
                     s t r :   ' A B A D ' , 
                     s e a r c h F i r s t :   ' A ' , 
                     s e a r c h L a s t :   ' D ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n c l u d e F i r s t   =   f u n c t i o n   t e s t _ i n c l u d e F i r s t ( )   { 
             i t ( ' t e s t _ i n c l u d e F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   i n c l u d e F i r s t ( ' 1 2 3 ' ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   i n c l u d e F i r s t ( ' 1 2 3 ' ,   ' 1 2 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 3 1 2 3 ' ,   i n c l u d e F i r s t ( ' 1 2 3 ' ,   ' 1 3 ' ) ) ; 
                 c h e c k E q u a l ( ' 2 1 2 3 ' ,   i n c l u d e F i r s t ( ' 1 2 3 ' ,   ' 2 ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   i n c l u d e F i r s t ( ' A B C ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   i n c l u d e F i r s t ( ' A B C ' ,   ' A B ' ) ) ; 
                 c h e c k E q u a l ( ' A C A B C ' ,   i n c l u d e F i r s t ( ' A B C ' ,   ' A C ' ) ) ; 
                 c h e c k E q u a l ( ' a A B C ' ,   i n c l u d e F i r s t ( ' A B C ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( ' B A B C ' ,   i n c l u d e F i r s t ( ' A B C ' ,   ' B ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n c l u d e L a s t   =   f u n c t i o n   t e s t _ i n c l u d e L a s t ( )   { 
             i t ( ' t e s t _ i n c l u d e L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   i n c l u d e L a s t ( ' 1 2 3 ' ,   ' 3 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   i n c l u d e L a s t ( ' 1 2 3 ' ,   ' 2 3 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 1 3 ' ,   i n c l u d e L a s t ( ' 1 2 3 ' ,   ' 1 3 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 2 ' ,   i n c l u d e L a s t ( ' 1 2 3 ' ,   ' 2 ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   i n c l u d e L a s t ( ' A B C ' ,   ' C ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   i n c l u d e L a s t ( ' A B C ' ,   ' B C ' ) ) ; 
                 c h e c k E q u a l ( ' A B C A C ' ,   i n c l u d e L a s t ( ' A B C ' ,   ' A C ' ) ) ; 
                 c h e c k E q u a l ( ' A B C c ' ,   i n c l u d e L a s t ( ' A B C ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( ' A B C B ' ,   i n c l u d e L a s t ( ' A B C ' ,   ' B ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n c l u d e B o t h E n d s   =   f u n c t i o n   t e s t _ i n c l u d e B o t h E n d s ( )   { 
             i t ( ' t e s t _ i n c l u d e B o t h E n d s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 1 2 1 ' ,   i n c l u d e B o t h E n d s ( ' 1 2 1 ' ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( ' 2 1 2 1 2 ' ,   i n c l u d e B o t h E n d s ( ' 1 2 1 ' ,   ' 2 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 1 ' ,   i n c l u d e B o t h E n d s ( ' 1 2 1 ' ,   ' 1 2 ' ,   ' 2 1 ' ) ) ; 
                 c h e c k E q u a l ( ' A B A ' ,   i n c l u d e B o t h E n d s ( ' A B A ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( ' a A B A a ' ,   i n c l u d e B o t h E n d s ( ' A B A ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( ' B A B A B ' ,   i n c l u d e B o t h E n d s ( ' A B A ' ,   ' B ' ) ) ; 
                 c h e c k E q u a l ( ' A B A B ' ,   i n c l u d e B o t h E n d s ( ' A B A B ' ,   ' A B ' ) ) ; 
                 c h e c k E q u a l ( ' A A B A D A ' ,   i n c l u d e B o t h E n d s ( ' A B A D ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( ' A B A D ' ,   i n c l u d e B o t h E n d s ( ' A B A D ' ,   ' A ' ,   ' D ' ) ) ; 
                 c h e c k E q u a l ( ' { A B } ' ,   i n c l u d e B o t h E n d s ( ' { A B } ' ,   ' { ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( ' { { } } ' ,   i n c l u d e B o t h E n d s ( ' { { } } ' ,   ' { ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( ' { A { B } } ' ,   i n c l u d e B o t h E n d s ( ' A { B } ' ,   ' { ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( ' } { A B } } ' ,   i n c l u d e B o t h E n d s ( ' { A B } ' ,   ' } ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( ' { { A B } { ' ,   i n c l u d e B o t h E n d s ( ' { A B } ' ,   ' { ' ,   ' { ' ) ) ; 
                 c h e c k E q u a l ( ' 1 1 1 ' ,   i n c l u d e B o t h E n d s ( ' 1 ' ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 1 ' ,   i n c l u d e B o t h E n d s ( ' 1 1 ' ,   ' 1 ' ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' A B A ' ,   i n c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' a A B A a ' ,   i n c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e :   ' a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B A ' ,   i n c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e F i r s t :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A A B A D A ' ,   i n c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A D ' , 
                     v a l u e F i r s t :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B A D ' ,   i n c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A D ' , 
                     v a l u e F i r s t :   ' A ' , 
                     v a l u e L a s t :   ' D ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ e x c l u d e F i r s t   =   f u n c t i o n   t e s t _ e x c l u d e F i r s t ( )   { 
             i t ( ' t e s t _ e x c l u d e F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 2 3 ' ,   e x c l u d e F i r s t ( ' 1 2 3 ' ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( ' 3 ' ,   e x c l u d e F i r s t ( ' 1 2 3 ' ,   ' 1 2 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   e x c l u d e F i r s t ( ' 1 2 3 ' ,   ' 1 3 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   e x c l u d e F i r s t ( ' 1 2 3 ' ,   ' 2 ' ) ) ; 
                 c h e c k E q u a l ( ' B C ' ,   e x c l u d e F i r s t ( ' A B C ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   e x c l u d e F i r s t ( ' A B C ' ,   ' A B ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   e x c l u d e F i r s t ( ' A B C ' ,   ' A C ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   e x c l u d e F i r s t ( ' A B C ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   e x c l u d e F i r s t ( ' A B C ' ,   ' B ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ e x c l u d e L a s t   =   f u n c t i o n   t e s t _ e x c l u d e L a s t ( )   { 
             i t ( ' t e s t _ e x c l u d e L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 1 2 ' ,   e x c l u d e L a s t ( ' 1 2 3 ' ,   ' 3 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   e x c l u d e L a s t ( ' 1 2 3 ' ,   ' 2 3 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   e x c l u d e L a s t ( ' 1 2 3 ' ,   ' 1 3 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   e x c l u d e L a s t ( ' 1 2 3 ' ,   ' 2 ' ) ) ; 
                 c h e c k E q u a l ( ' A B ' ,   e x c l u d e L a s t ( ' A B C ' ,   ' C ' ) ) ; 
                 c h e c k E q u a l ( ' A ' ,   e x c l u d e L a s t ( ' A B C ' ,   ' B C ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   e x c l u d e L a s t ( ' A B C ' ,   ' A C ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   e x c l u d e L a s t ( ' A B C ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   e x c l u d e L a s t ( ' A B C ' ,   ' B ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ e x c l u d e B o t h E n d s   =   f u n c t i o n   t e s t _ e x c l u d e B o t h E n d s ( )   { 
             i t ( ' t e s t _ e x c l u d e B o t h E n d s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 2 ' ,   e x c l u d e B o t h E n d s ( ' 1 2 1 ' ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 1 ' ,   e x c l u d e B o t h E n d s ( ' 1 2 1 ' ,   ' 2 ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   e x c l u d e B o t h E n d s ( ' 1 2 1 ' ,   ' 1 2 ' ,   ' 2 1 ' ) ) ; 
                 c h e c k E q u a l ( ' B ' ,   e x c l u d e B o t h E n d s ( ' A B A ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( ' A B A ' ,   e x c l u d e B o t h E n d s ( ' A B A ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( ' A B A ' ,   e x c l u d e B o t h E n d s ( ' A B A ' ,   ' B ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   e x c l u d e B o t h E n d s ( ' A B A B ' ,   ' A B ' ) ) ; 
                 c h e c k E q u a l ( ' A B A D ' ,   e x c l u d e B o t h E n d s ( ' A B A D ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( ' B A ' ,   e x c l u d e B o t h E n d s ( ' A B A D ' ,   ' A ' ,   ' D ' ) ) ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( ' A B ' ,   e x c l u d e B o t h E n d s ( ' { A B } ' ,   ' { ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( ' { } ' ,   e x c l u d e B o t h E n d s ( ' { { } } ' ,   ' { ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( ' A { B } ' ,   e x c l u d e B o t h E n d s ( ' A { B } ' ,   ' { ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( ' { A B } ' ,   e x c l u d e B o t h E n d s ( ' { A B } ' ,   ' } ' ,   ' } ' ) ) ; 
                 c h e c k E q u a l ( ' { A B } ' ,   e x c l u d e B o t h E n d s ( ' { A B } ' ,   ' { ' ,   ' { ' ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   e x c l u d e B o t h E n d s ( ' 1 ' ,   ' 1 ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   e x c l u d e B o t h E n d s ( ' 1 1 ' ,   ' 1 ' ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' B ' ,   e x c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B A ' ,   e x c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e :   ' a ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' B ' ,   e x c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e F i r s t :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B A D ' ,   e x c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A D ' , 
                     v a l u e F i r s t :   ' A ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' B A ' ,   e x c l u d e B o t h E n d s ( { 
                     s t r :   ' A B A D ' , 
                     v a l u e F i r s t :   ' A ' , 
                     v a l u e L a s t :   ' D ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t r i m F i r s t   =   f u n c t i o n   t e s t _ t r i m F i r s t ( )   { 
             i t ( ' t e s t _ t r i m F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 2 3 ' ,   t r i m F i r s t ( ' 1 2 3 ' ,   [ ' 1 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 3 ' ,   t r i m F i r s t ( ' 1 2 3 ' ,   [ ' 1 2 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   t r i m F i r s t ( ' 1 2 3 ' ,   [ ' 1 3 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   t r i m F i r s t ( ' 1 2 3 ' ,   [ ' 2 ' ] ) ) ; 
                 c h e c k E q u a l ( ' B C ' ,   t r i m F i r s t ( ' A B C ' ,   [ ' A ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' A B C ' ,   [ ' A B ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t r i m F i r s t ( ' A B C ' ,   [ ' A C ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t r i m F i r s t ( ' A B C ' ,   [ ' a ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t r i m F i r s t ( ' A B C ' ,   [ ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' A B C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' A B C ' ,   [ ' B ' ,   ' A ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' A A B B C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' A B A B C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' B A B A C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' A B B A C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' B A A B C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' A A A B C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m F i r s t ( ' A B B B C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C A B C ' ,   t r i m F i r s t ( ' C A B C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t r i m F i r s t ( ' A B C ' ,   [ ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m F i r s t ( ' A B C ' ,   [ ' A B C ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m F i r s t ( ' A B C ' ,   [ ' A ' ,   ' B ' ,   ' C ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m F i r s t ( ' ' ,   [ ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m F i r s t ( ' ' ,   [ ' A B C ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m F i r s t ( ' ' ,   [ ' A ' ,   ' B ' ,   ' C ' ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   t r i m F i r s t ( ' A B C ' ,   [ 0 ,   ' B ' ,   ' C ' ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   t r i m F i r s t ( ' ' ,   [ 0 ,   ' B ' ,   ' C ' ] ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t r i m L a s t   =   f u n c t i o n   t e s t _ t r i m L a s t ( )   { 
             i t ( ' t e s t _ t r i m L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 1 2 ' ,   t r i m L a s t ( ' 1 2 3 ' ,   [ ' 3 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   t r i m L a s t ( ' 1 2 3 ' ,   [ ' 2 3 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   t r i m L a s t ( ' 1 2 3 ' ,   [ ' 1 3 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   t r i m L a s t ( ' 1 2 3 ' ,   [ ' 2 ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B ' ,   t r i m L a s t ( ' A B C ' ,   [ ' C ' ] ) ) ; 
                 c h e c k E q u a l ( ' A ' ,   t r i m L a s t ( ' A B C ' ,   [ ' B C ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t r i m L a s t ( ' A B C ' ,   [ ' A C ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t r i m L a s t ( ' A B C ' ,   [ ' c ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t r i m L a s t ( ' A B C ' ,   [ ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m L a s t ( ' C A B ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m L a s t ( ' C A B ' ,   [ ' B ' ,   ' A ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m L a s t ( ' C A A B B ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m L a s t ( ' C A B A B ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m L a s t ( ' C B A B A ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m L a s t ( ' C A B B A ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m L a s t ( ' C B A A B ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m L a s t ( ' C A A A B ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C ' ,   t r i m L a s t ( ' C A B B B ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' C A B C ' ,   t r i m L a s t ( ' C A B C ' ,   [ ' A ' ,   ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B C ' ,   t r i m L a s t ( ' A B C ' ,   [ ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m L a s t ( ' A B C ' ,   [ ' A B C ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m L a s t ( ' A B C ' ,   [ ' A ' ,   ' B ' ,   ' C ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m L a s t ( ' ' ,   [ ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m L a s t ( ' ' ,   [ ' A B C ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m L a s t ( ' ' ,   [ ' A ' ,   ' B ' ,   ' C ' ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   t r i m L a s t ( ' A B C ' ,   [ 0 ,   ' B ' ,   ' C ' ] ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   t r i m L a s t ( ' ' ,   [ 0 ,   ' B ' ,   ' C ' ] ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t r i m B o t h E n d s   =   f u n c t i o n   t e s t _ t r i m B o t h E n d s ( )   { 
             i t ( ' t e s t _ t r i m B o t h E n d s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 2 ' ,   t r i m B o t h E n d s ( ' 1 2 1 ' ,   [ ' 1 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 1 2 1 ' ,   t r i m B o t h E n d s ( ' 1 2 1 ' ,   [ ' 2 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   t r i m B o t h E n d s ( ' 1 2 1 ' ,   [ ' 1 2 ' ] ,   [ ' 2 1 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 3 ' ,   t r i m B o t h E n d s ( ' 1 2 3 ' ,   [ ' 1 2 ' ] ,   [ ' 2 3 ' ] ) ) ; 
                 c h e c k E q u a l ( ' B ' ,   t r i m B o t h E n d s ( ' A B A ' ,   [ ' A ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B A ' ,   t r i m B o t h E n d s ( ' A B A ' ,   [ ' a ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B A ' ,   t r i m B o t h E n d s ( ' A B A ' ,   [ ' B ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m B o t h E n d s ( ' A B A B ' ,   [ ' A B ' ] ) ) ; 
                 c h e c k E q u a l ( ' B A D ' ,   t r i m B o t h E n d s ( ' A B A D ' ,   [ ' A ' ] ) ) ; 
                 c h e c k E q u a l ( ' B A ' ,   t r i m B o t h E n d s ( ' A B A D ' ,   [ ' A ' ] ,   [ ' D ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B ' ,   t r i m B o t h E n d s ( ' { A B } ' ,   [ ' { ' ] ,   [ ' } ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m B o t h E n d s ( ' { { } } ' ,   [ ' { ' ] ,   [ ' } ' ] ) ) ; 
                 c h e c k E q u a l ( ' A { B ' ,   t r i m B o t h E n d s ( ' A { B } ' ,   [ ' { ' ] ,   [ ' } ' ] ) ) ; 
                 c h e c k E q u a l ( ' { A B ' ,   t r i m B o t h E n d s ( ' { A B } ' ,   [ ' } ' ] ,   [ ' } ' ] ) ) ; 
                 c h e c k E q u a l ( ' A B } ' ,   t r i m B o t h E n d s ( ' { A B } ' ,   [ ' { ' ] ,   [ ' { ' ] ) ) ; 
                 c h e c k E q u a l ( ' 2 3 2 ' ,   t r i m B o t h E n d s ( ' 1 2 3 2 1 ' ,   [ ' 1 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 2 1 ' ,   t r i m B o t h E n d s ( ' 1 2 3 2 1 ' ,   [ ' 2 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 3 ' ,   t r i m B o t h E n d s ( ' 1 2 3 2 1 ' ,   [ ' 2 ' ,   ' 1 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 2 3 2 ' ,   t r i m B o t h E n d s ( ' 1 2 3 2 1 ' ,   [ ' ' ,   ' 1 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 3 2 ' ,   t r i m B o t h E n d s ( ' 1 2 3 2 1 ' ,   [ ' 2 ' ,   ' 1 ' ] ,   [ ' 1 ' ] ) ) ; 
                 c h e c k E q u a l ( ' 3 2 1 ' ,   t r i m B o t h E n d s ( ' 1 2 3 2 1 ' ,   [ ' 2 ' ,   ' 1 ' ] ,   [ ' 2 ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m B o t h E n d s ( ' 1 ' ,   [ ' 1 ' ] ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t r i m B o t h E n d s ( ' 1 1 ' ,   [ ' 1 ' ] ) ) ; 
                 c h e c k E q u a l ( ' a b c ' ,   t r i m B o t h E n d s ( '     a b c \ n     \ n ' ,   [ '   ' ,   ' \ n ' ] ) ) ; 
                 c h e c k E q u a l ( ' a b c ' ,   t r i m B o t h E n d s ( '     a b c \ n     \ n ' ,   [ ' \ n ' ,   '   ' ] ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' B ' ,   t r i m B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e A r r a y :   [ ' A ' ] 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B A ' ,   t r i m B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e A r r a y :   [ ' a ' ] 
                 } ) ) ; 
                 c h e c k E q u a l ( ' B ' ,   t r i m B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e F i r s t A r r a y :   [ ' A ' ] 
                 } ) ) ; 
                 c h e c k E q u a l ( ' B A ' ,   t r i m B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e F i r s t A r r a y :   [ ' A ' ] , 
                     v a l u e L a s t A r r a y :   [ ] 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A B ' ,   t r i m B o t h E n d s ( { 
                     s t r :   ' A B A ' , 
                     v a l u e F i r s t A r r a y :   [ ] , 
                     v a l u e L a s t A r r a y :   [ ' A ' ] 
                 } ) ) ; 
                 c h e c k E q u a l ( ' B A D ' ,   t r i m B o t h E n d s ( { 
                     s t r :   ' A B A D ' , 
                     v a l u e F i r s t A r r a y :   [ ' A ' ] 
                 } ) ) ; 
                 c h e c k E q u a l ( ' B A ' ,   t r i m B o t h E n d s ( { 
                     s t r :   ' A B A D ' , 
                     v a l u e F i r s t A r r a y :   [ ' A ' ] , 
                     v a l u e L a s t A r r a y :   [ ' D ' ] 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b s t r i n g _ s t a r d a r d   =   f u n c t i o n   t e s t _ s u b s t r i n g _ s t a r d a r d ( )   { 
             i t ( ' t e s t _ s u b s t r i n g _ s t a r d a r d ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 2 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 1 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 0 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 1 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 2 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 3 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 4 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 5 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 6 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 2 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 1 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 0 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 1 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 2 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 3 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 4 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 6 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 2 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 1 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 0 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 1 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 2 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 2 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 3 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 3 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 4 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 5 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 6 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 2 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 1 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 0 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 1 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 2 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 3 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 4 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 5 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 6 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 2 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( - 1 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 0 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 1 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 2 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 3 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 4 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 5 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r i n g ( 6 ,   6 ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b s t r _ s t a r d a r d   =   f u n c t i o n   t e s t _ s u b s t r _ s t a r d a r d ( )   { 
             i t ( ' t e s t _ s u b s t r _ s t a r d a r d ' ,   f u n c t i o n   ( )   { 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 2 ) ) ;   / /   ? 
 
                     c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 1 ) ) ;   / /   ? 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 2 ) ) ;   / /   ? 
 
                     c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 1 ) ) ;   / /   ? 
                 } 
 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 0 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 1 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 2 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 3 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 4 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 5 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 6 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 2 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 1 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 0 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 1 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 2 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 3 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 4 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 5 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 6 ,   0 ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 2 ,   3 ) ) ;   / /   ? 
 
                     c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 1 ,   3 ) ) ;   / /   ? 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' 0 1 2 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 2 ,   3 ) ) ;   / /   ? 
 
                     c h e c k E q u a l ( ' 0 1 2 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 1 ,   3 ) ) ;   / /   ? 
                 } 
 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 0 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 1 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 2 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 3 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 4 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 5 ,   3 ) ) ;   / /   ? 
 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 6 ,   3 ) ) ;   / /   ? 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 2 ,   5 ) ) ; 
                     c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 1 ,   5 ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 2 ,   5 ) ) ; 
                     c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 1 ,   5 ) ) ; 
                 } 
 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 0 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 1 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 2 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 3 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 4 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 5 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 6 ,   5 ) ) ; 
                 t e s t C o u n t e r ( ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 2 ,   6 ) ) ; 
                     c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 1 ,   6 ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 2 ,   6 ) ) ; 
                     c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( - 1 ,   6 ) ) ; 
                 } 
 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 0 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 1 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 2 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 3 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 4 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 5 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   ' 0 1 2 3 4 ' . s u b s t r ( 6 ,   6 ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b I n d e x   =   f u n c t i o n   t e s t _ s u b I n d e x ( )   { 
             i t ( ' t e s t _ s u b I n d e x ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 2 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 3 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   4 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   6 ) ; 
                 } ) ) ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   0 ,   0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   1 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   2 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   3 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   4 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   5 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   6 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   0 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   1 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   2 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 3 ' ,   s u b I n d e x ( ' 0 1 2 3 4 ' ,   3 ,   3 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   4 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   5 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   6 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   0 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   1 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   2 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   3 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   4 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   5 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   6 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   0 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   1 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   2 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   3 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   4 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   5 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b I n d e x ( ' 0 1 2 3 4 ' ,   6 ,   6 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b L e n g t h   =   f u n c t i o n   t e s t _ s u b L e n g t h ( )   { 
             i t ( ' t e s t _ s u b L e n g t h ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   4 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   0 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   1 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   2 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   3 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   4 ,   0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   5 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   6 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   0 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   1 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   2 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   3 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   4 ,   3 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   5 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   6 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   0 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   1 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   2 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   3 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   4 ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   5 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   6 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   0 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   1 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   2 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   3 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   4 ,   6 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   5 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L e n g t h ( ' 0 1 2 3 4 ' ,   6 ,   6 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b F i r s t   =   f u n c t i o n   t e s t _ s u b F i r s t ( )   { 
             i t ( ' t e s t _ s u b F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b F i r s t ( ' 0 1 2 3 4 ' ,   - 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b F i r s t ( ' 0 1 2 3 4 ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b F i r s t ( ' 0 1 2 3 4 ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 ' ,   s u b F i r s t ( ' 0 1 2 3 4 ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 ' ,   s u b F i r s t ( ' 0 1 2 3 4 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   s u b F i r s t ( ' 0 1 2 3 4 ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   s u b F i r s t ( ' 0 1 2 3 4 ' ,   4 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   s u b F i r s t ( ' 0 1 2 3 4 ' ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b F i r s t ( ' 0 1 2 3 4 ' ,   6 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b L a s t   =   f u n c t i o n   t e s t _ s u b L a s t ( )   { 
             i t ( ' t e s t _ s u b L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L a s t ( ' 0 1 2 3 4 ' ,   - 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L a s t ( ' 0 1 2 3 4 ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L a s t ( ' 0 1 2 3 4 ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   s u b L a s t ( ' 0 1 2 3 4 ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   s u b L a s t ( ' 0 1 2 3 4 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   s u b L a s t ( ' 0 1 2 3 4 ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   s u b L a s t ( ' 0 1 2 3 4 ' ,   4 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   s u b L a s t ( ' 0 1 2 3 4 ' ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   s u b L a s t ( ' 0 1 2 3 4 ' ,   6 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d e l e t e I n d e x   =   f u n c t i o n   t e s t _ d e l e t e I n d e x ( )   { 
             i t ( ' t e s t _ d e l e t e I n d e x ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 2 3 4 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 3 4 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 4 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   4 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   0 ,   0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   1 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   2 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   3 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   4 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   5 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   6 ,   0 ) ; 
                 } ) ) ; 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   0 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 4 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   1 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 4 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   2 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 4 ' ,   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   3 ,   3 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   4 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   5 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   6 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   0 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   1 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   2 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   3 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   4 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   5 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   6 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 2 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   - 1 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   0 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   1 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   2 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   3 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   4 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   5 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e I n d e x ( ' 0 1 2 3 4 ' ,   6 ,   6 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d e l e t e L e n g t h   =   f u n c t i o n   t e s t _ d e l e t e L e n g t h ( )   { 
             i t ( ' t e s t _ d e l e t e L e n g t h ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   4 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   0 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   1 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   2 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   3 ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   4 ,   0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   5 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   6 ,   0 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   0 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 4 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   1 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   2 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   3 ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   4 ,   3 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   5 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   6 ,   3 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   0 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 0 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   1 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   2 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   3 ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   4 ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   5 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   6 ,   5 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 2 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   - 1 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   0 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 0 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   1 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   2 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   3 ,   6 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   4 ,   6 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   5 ,   6 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L e n g t h ( ' 0 1 2 3 4 ' ,   6 ,   6 ) ; 
                 } ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' 0 3 ' ,   d e l e t e L e n g t h ( { 
                     s t r :   ' 0 1 2 3 ' , 
                     i n d e x :   1 , 
                     l e n g t h :   2 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 3 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 ' ,   { 
                     i n d e x :   1 , 
                     l e n g t h :   2 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 3 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 ' ,   1 ,   { 
                     l e n g t h :   2 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 ' ,   d e l e t e L e n g t h ( { 
                     s t r :   ' 0 1 2 3 ' , 
                     i n d e x :   2 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 ' ,   d e l e t e L e n g t h ( ' 0 1 2 3 ' ,   { 
                     i n d e x :   2 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d e l e t e F i r s t   =   f u n c t i o n   t e s t _ d e l e t e F i r s t ( )   { 
             i t ( ' t e s t _ d e l e t e F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ,   - 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 2 3 4 ' ,   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 3 4 ' ,   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 4 ' ,   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ,   4 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 4 ' ,   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e F i r s t ( ' 0 1 2 3 4 ' ,   6 ) ; 
                 } ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   d e l e t e F i r s t ( { 
                     s t r :   ' 0 1 2 3 ' , 
                     l e n g t h :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   d e l e t e F i r s t ( ' 0 1 2 3 ' ,   { 
                     l e n g t h :   1 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d e l e t e L a s t   =   f u n c t i o n   t e s t _ d e l e t e L a s t ( )   { 
             i t ( ' t e s t _ d e l e t e L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L a s t ( ' 0 1 2 3 4 ' ,   - 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L a s t ( ' 0 1 2 3 4 ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 ' ,   d e l e t e L a s t ( ' 0 1 2 3 4 ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   d e l e t e L a s t ( ' 0 1 2 3 4 ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   d e l e t e L a s t ( ' 0 1 2 3 4 ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 ' ,   d e l e t e L a s t ( ' 0 1 2 3 4 ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 ' ,   d e l e t e L a s t ( ' 0 1 2 3 4 ' ,   4 ) ) ; 
                 c h e c k E q u a l ( ' ' ,   d e l e t e L a s t ( ' 0 1 2 3 4 ' ,   5 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   d e l e t e L a s t ( ' 0 1 2 3 4 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   d e l e t e L a s t ( ' 0 1 2 3 4 ' ,   6 ) ; 
                 } ) ) ;   / /   O b j e c t   N a m e d   P a r a m e t e r 
 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   d e l e t e L a s t ( { 
                     s t r :   ' 0 1 2 3 ' , 
                     l e n g t h :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 ' ,   d e l e t e L a s t ( ' 0 1 2 3 ' ,   { 
                     l e n g t h :   1 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n s e r t   =   f u n c t i o n   t e s t _ i n s e r t ( )   { 
             i t ( ' t e s t _ i n s e r t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' A 0 1 2 3 4 ' ,   i n s e r t ( ' 0 1 2 3 4 ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n s e r t ( ' 0 1 2 3 4 ' ,   ' A ' ,   - 1 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A 0 1 2 3 4 ' ,   i n s e r t ( ' 0 1 2 3 4 ' ,   ' A ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 A 1 2 3 4 ' ,   i n s e r t ( ' 0 1 2 3 4 ' ,   ' A ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 A 2 3 4 ' ,   i n s e r t ( ' 0 1 2 3 4 ' ,   ' A ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 A 3 4 ' ,   i n s e r t ( ' 0 1 2 3 4 ' ,   ' A ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 A 4 ' ,   i n s e r t ( ' 0 1 2 3 4 ' ,   ' A ' ,   4 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 A ' ,   i n s e r t ( ' 0 1 2 3 4 ' ,   ' A ' ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   i n s e r t ( ' 0 1 2 3 4 ' ,   ' A ' ,   6 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ a d d   =   f u n c t i o n   t e s t _ a d d ( )   { 
             i t ( ' t e s t _ a d d ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 0 1 2 3 4 A ' ,   a d d ( ' 0 1 2 3 4 ' ,   ' A ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   a d d ( ' 0 1 2 3 4 ' ,   ' A ' ,   - 2 ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' A 0 1 2 3 4 ' ,   a d d ( ' 0 1 2 3 4 ' ,   ' A ' ,   - 1 ) ) ; 
                 c h e c k E q u a l ( ' 0 A 1 2 3 4 ' ,   a d d ( ' 0 1 2 3 4 ' ,   ' A ' ,   0 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 A 2 3 4 ' ,   a d d ( ' 0 1 2 3 4 ' ,   ' A ' ,   1 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 A 3 4 ' ,   a d d ( ' 0 1 2 3 4 ' ,   ' A ' ,   2 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 A 4 ' ,   a d d ( ' 0 1 2 3 4 ' ,   ' A ' ,   3 ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 4 A ' ,   a d d ( ' 0 1 2 3 4 ' ,   ' A ' ,   4 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     r e t u r n   a d d ( ' 0 1 2 3 4 ' ,   ' A ' ,   5 ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b F i r s t D e l i m F i r s t   =   f u n c t i o n   t e s t _ s u b F i r s t D e l i m F i r s t ( )   { 
             i t ( ' t e s t _ s u b F i r s t D e l i m F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m F i r s t ( ' 1 2 3 , 4 5 6 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m F i r s t ( ' 1 2 3 , 4 5 6 , 7 8 9 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m F i r s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t t t ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m F i r s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t t ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m F i r s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b F i r s t D e l i m F i r s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m F i r s t ( ' 1 2 3 , , ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b F i r s t D e l i m F i r s t ( ' , , 1 2 3 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b F i r s t D e l i m F i r s t ( ' , , 1 2 3 , , ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m F i r s t ( ' 1 2 3 , , ' ,   ' , , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b F i r s t D e l i m F i r s t ( ' , , 1 2 3 ' ,   ' , , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b F i r s t D e l i m F i r s t ( ' , , 1 2 3 , , ' ,   ' , , ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m F i r s t ( { 
                     s t r :   ' 1 2 3 , 4 5 6 ' , 
                     d e l i m i t e r :   ' , ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m F i r s t ( ' 1 2 3 , 4 5 6 ' ,   { 
                     d e l i m i t e r :   ' , ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b F i r s t D e l i m L a s t   =   f u n c t i o n   t e s t _ s u b F i r s t D e l i m L a s t ( )   { 
             i t ( ' t e s t _ s u b F i r s t D e l i m L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m L a s t ( ' 1 2 3 , 4 5 6 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 , 4 5 6 ' ,   s u b F i r s t D e l i m L a s t ( ' 1 2 3 , 4 5 6 , 7 8 9 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m L a s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t t t ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 t ' ,   s u b F i r s t D e l i m L a s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t t ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 t t ' ,   s u b F i r s t D e l i m L a s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b F i r s t D e l i m L a s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 , ' ,   s u b F i r s t D e l i m L a s t ( ' 1 2 3 , , ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' , ' ,   s u b F i r s t D e l i m L a s t ( ' , , 1 2 3 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' , , 1 2 3 , ' ,   s u b F i r s t D e l i m L a s t ( ' , , 1 2 3 , , ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m L a s t ( ' 1 2 3 , , ' ,   ' , , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b F i r s t D e l i m L a s t ( ' , , 1 2 3 ' ,   ' , , ' ) ) ; 
                 c h e c k E q u a l ( ' , , 1 2 3 ' ,   s u b F i r s t D e l i m L a s t ( ' , , 1 2 3 , , ' ,   ' , , ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m L a s t ( { 
                     s t r :   ' 1 2 3 , 4 5 6 ' , 
                     d e l i m i t e r :   ' , ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b F i r s t D e l i m L a s t ( ' 1 2 3 , 4 5 6 ' ,   { 
                     d e l i m i t e r :   ' , ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b L a s t D e l i m F i r s t   =   f u n c t i o n   t e s t _ s u b L a s t D e l i m F i r s t ( )   { 
             i t ( ' t e s t _ s u b L a s t D e l i m F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m F i r s t ( ' 1 2 3 , 4 5 6 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 4 5 6 , 7 8 9 ' ,   s u b L a s t D e l i m F i r s t ( ' 1 2 3 , 4 5 6 , 7 8 9 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m F i r s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t t t ' ) ) ; 
                 c h e c k E q u a l ( ' t 4 5 6 ' ,   s u b L a s t D e l i m F i r s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t t ' ) ) ; 
                 c h e c k E q u a l ( ' t t 4 5 6 ' ,   s u b L a s t D e l i m F i r s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L a s t D e l i m F i r s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' , ' ,   s u b L a s t D e l i m F i r s t ( ' 1 2 3 , , ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' , 1 2 3 ' ,   s u b L a s t D e l i m F i r s t ( ' , , 1 2 3 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' , 1 2 3 , , ' ,   s u b L a s t D e l i m F i r s t ( ' , , 1 2 3 , , ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L a s t D e l i m F i r s t ( ' 1 2 3 , , ' ,   ' , , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b L a s t D e l i m F i r s t ( ' , , 1 2 3 ' ,   ' , , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 , , ' ,   s u b L a s t D e l i m F i r s t ( ' , , 1 2 3 , , ' ,   ' , , ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m F i r s t ( { 
                     s t r :   ' 1 2 3 , 4 5 6 ' , 
                     d e l i m i t e r :   ' , ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m F i r s t ( ' 1 2 3 , 4 5 6 ' ,   { 
                     d e l i m i t e r :   ' , ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s u b L a s t D e l i m L a s t   =   f u n c t i o n   t e s t _ s u b L a s t D e l i m L a s t ( )   { 
             i t ( ' t e s t _ s u b L a s t D e l i m L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m L a s t ( ' 1 2 3 , 4 5 6 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 7 8 9 ' ,   s u b L a s t D e l i m L a s t ( ' 1 2 3 , 4 5 6 , 7 8 9 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m L a s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t t t ' ) ) ; 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m L a s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t t ' ) ) ; 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m L a s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' t ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L a s t D e l i m L a s t ( ' 1 2 3 t t t 4 5 6 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L a s t D e l i m L a s t ( ' 1 2 3 , , ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b L a s t D e l i m L a s t ( ' , , 1 2 3 ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L a s t D e l i m L a s t ( ' , , 1 2 3 , , ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L a s t D e l i m L a s t ( ' 1 2 3 , , ' ,   ' , , ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   s u b L a s t D e l i m L a s t ( ' , , 1 2 3 ' ,   ' , , ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   s u b L a s t D e l i m L a s t ( ' , , 1 2 3 , , ' ,   ' , , ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m L a s t ( { 
                     s t r :   ' 1 2 3 , 4 5 6 ' , 
                     d e l i m i t e r :   ' , ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 4 5 6 ' ,   s u b L a s t D e l i m L a s t ( ' 1 2 3 , 4 5 6 ' ,   { 
                     d e l i m i t e r :   ' , ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t a g I n n e r F i r s t   =   f u n c t i o n   t e s t _ t a g I n n e r F i r s t ( )   { 
             i t ( ' t e s t _ t a g I n n e r F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r F i r s t ( '     < a b a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t a g I n n e r F i r s t ( '     < a a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t a g I n n e r F i r s t ( '     < a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r F i r s t ( ' < < > > > a < < < a > > < < a b a > > < < a > > a > < < > > ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' < < < ' ,   t a g I n n e r F i r s t ( ' < < > > < a < < < a > > < < a b a > > < < a > > a > < < > > ' ,   ' < a ' ,   ' a > ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r F i r s t ( { 
                     s t r :   '     < a b a >     ' , 
                     s t a r t T a g :   ' < a ' , 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r F i r s t ( '     < a b a >     ' ,   { 
                     s t a r t T a g :   ' < a ' , 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r F i r s t ( '     < a b a >     ' ,   ' < a ' ,   { 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t a g O u t e r F i r s t   =   f u n c t i o n   t e s t _ t a g O u t e r F i r s t ( )   { 
             i t ( ' t e s t _ t a g O u t e r F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r F i r s t ( '     < a b a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' < a a > ' ,   t a g O u t e r F i r s t ( '     < a a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t a g O u t e r F i r s t ( '     < a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r F i r s t ( ' < < > > > a < < < a > > < < a b a > > < < a > > a > < < > > ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' < a < < < a > ' ,   t a g O u t e r F i r s t ( ' < < > > < a < < < a > > < < a b a > > < < a > > a > < < > > ' ,   ' < a ' ,   ' a > ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r F i r s t ( { 
                     s t r :   '     < a b a >     ' , 
                     s t a r t T a g :   ' < a ' , 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r F i r s t ( '     < a b a >     ' ,   { 
                     s t a r t T a g :   ' < a ' , 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r F i r s t ( '     < a b a >     ' ,   ' < a ' ,   { 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t a g I n n e r L a s t   =   f u n c t i o n   t e s t _ t a g I n n e r L a s t ( )   { 
             i t ( ' t e s t _ t a g I n n e r L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r L a s t ( '     < a b a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t a g I n n e r L a s t ( '     < a a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t a g I n n e r L a s t ( '     < a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r L a s t ( ' < < > > > a < < < a > > < < a b a > > < < a > > > a < < < > > ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' > > > ' ,   t a g I n n e r L a s t ( ' < < > > < a < < < a > > < < a b a > > < < a > > > a > < < > > ' ,   ' < a ' ,   ' a > ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r L a s t ( { 
                     s t r :   '     < a b a >     ' , 
                     s t a r t T a g :   ' < a ' , 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r L a s t ( '     < a b a >     ' ,   { 
                     s t a r t T a g :   ' < a ' , 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' b ' ,   t a g I n n e r L a s t ( '     < a b a >     ' ,   ' < a ' ,   { 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t a g O u t e r L a s t   =   f u n c t i o n   t e s t _ t a g O u t e r L a s t ( )   { 
             i t ( ' t e s t _ t a g O u t e r L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r L a s t ( '     < a b a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' < a a > ' ,   t a g O u t e r L a s t ( '     < a a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' ' ,   t a g O u t e r L a s t ( '     < a >     ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r L a s t ( ' < < > > > a < < < a > > < < a b a > > < < a > > > a < < < > > ' ,   ' < a ' ,   ' a > ' ) ) ; 
                 c h e c k E q u a l ( ' < a > > > a > ' ,   t a g O u t e r L a s t ( ' < < > > < a < < < a > > < < a b a > > < < a > > > a > < < > > ' ,   ' < a ' ,   ' a > ' ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r L a s t ( { 
                     s t r :   '     < a b a >     ' , 
                     s t a r t T a g :   ' < a ' , 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r L a s t ( '     < a b a >     ' ,   { 
                     s t a r t T a g :   ' < a ' , 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' < a b a > ' ,   t a g O u t e r L a s t ( '     < a b a >     ' ,   ' < a ' ,   { 
                     e n d T a g :   ' a > ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s p l i t   =   f u n c t i o n   t e s t _ s p l i t ( )   { 
             i t ( ' t e s t _ s p l i t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( [ ' A B C ' ,   ' D E F ' ,   ' G H I ' ] ,   s p l i t ( ' A B C , D E F , G H I ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( [ ' A B C ' ,   ' D E F ' ,   ' G H I ' ] ,   s p l i t ( ' A B C . D E F . G H I ' ,   ' . ' ) ) ; 
                 c h e c k E q u a l ( [ ' A B C ' ,   ' D E F ' ,   ' G H I ' ] ,   s p l i t ( ' A B C   D E F   G H I ' ,   '   ' ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   ' A B C ' ,   ' ' ,   ' D E F ' ,   ' ' ,   ' G H I ' ,   ' ' ,   ' ' ] ,   s p l i t ( ' , , A B C , , D E F , , G H I , , ' ,   ' , ' ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' A B C ' ,   ' ' ,   ' D E F ' ,   ' ' ,   ' G H I ' ,   ' ' ,   ' ' ] ,   s p l i t ( ' , , A B C , , D E F , , G H I , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . f i r s t ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   ' A B C ' ,   ' ' ,   ' D E F ' ,   ' ' ,   ' G H I ' ,   ' ' ] ,   s p l i t ( ' , , A B C , , D E F , , G H I , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . l a s t ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' A B C ' ,   ' ' ,   ' D E F ' ,   ' ' ,   ' G H I ' ,   ' ' ] ,   s p l i t ( ' , , A B C , , D E F , , G H I , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . b o t h E n d s ) ) ; 
                 c h e c k E q u a l ( [ ' A B C ' ,   ' D E F ' ,   ' G H I ' ] ,   s p l i t ( ' , , A B C , , D E F , , G H I , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . a l l ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   '   A   B   C   ' ,   ' ' ,   '   D E   F   ' ,   ' ' ,   '   G   H I   ' ,   ' ' ,   ' ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . n o n e ,   s p l i t . e x e c u t e C o n v e r t . n o n e ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   ' A   B   C ' ,   ' ' ,   ' D E   F ' ,   ' ' ,   ' G   H I ' ,   ' ' ,   ' ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . n o n e ,   s p l i t . e x e c u t e C o n v e r t . t r i m S p a c e ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   ' A B C ' ,   ' ' ,   ' D E F ' ,   ' ' ,   ' G H I ' ,   ' ' ,   ' ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . n o n e ,   s p l i t . e x e c u t e C o n v e r t . e x c l u d e S p a c e ) ) ; 
                 c h e c k E q u a l ( [ ' A B C ' ,   ' D E F ' ,   ' G H I ' ] ,   s p l i t ( '   ,   ,   A   B   C   ,   ,   D E   F   , ,   G   H I   ,   ,   ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . a l l ,   s p l i t . e x e c u t e C o n v e r t . e x c l u d e S p a c e ) ) ; 
                 c h e c k E q u a l ( [ ' ' ] ,   s p l i t ( ' ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . n o n e ) ) ; 
                 c h e c k E q u a l ( [ ] ,   s p l i t ( ' ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . f i r s t ) ) ; 
                 c h e c k E q u a l ( [ ' ' ] ,   s p l i t ( ' ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . l a s t ) ) ; 
                 c h e c k E q u a l ( [ ' ' ] ,   s p l i t ( ' ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . b o t h E n d s ) ) ; 
                 c h e c k E q u a l ( [ ] ,   s p l i t ( ' ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . a l l ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ] ,   s p l i t ( ' , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . n o n e ) ) ; 
                 c h e c k E q u a l ( [ ' ' ] ,   s p l i t ( ' , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . f i r s t ) ) ; 
                 c h e c k E q u a l ( [ ' ' ] ,   s p l i t ( ' , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . l a s t ) ) ; 
                 c h e c k E q u a l ( [ ] ,   s p l i t ( ' , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . b o t h E n d s ) ) ; 
                 c h e c k E q u a l ( [ ] ,   s p l i t ( ' , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . a l l ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   ' ' ] ,   s p l i t ( ' , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . n o n e ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ] ,   s p l i t ( ' , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . f i r s t ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ] ,   s p l i t ( ' , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . l a s t ) ) ; 
                 c h e c k E q u a l ( [ ' ' ] ,   s p l i t ( ' , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . b o t h E n d s ) ) ; 
                 c h e c k E q u a l ( [ ] ,   s p l i t ( ' , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . a l l ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' A ' ,   ' ' ] ,   s p l i t ( ' , A , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . n o n e ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ,   ' ' ] ,   s p l i t ( ' , A , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . f i r s t ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' A ' ] ,   s p l i t ( ' , A , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . l a s t ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ] ,   s p l i t ( ' , A , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . b o t h E n d s ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ] ,   s p l i t ( ' , A , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . a l l ) ) ;   / /   o b j e c t   p a r a m e t e r 
 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( [ ' A B C ' ,   ' D E F ' ,   ' G H I ' ] ,   s p l i t ( { 
                     s t r :   ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' , 
                     s e p a r a t o r :   ' , ' , 
                     e x c l u d e E m p t y S t r :   s p l i t . e x c l u d e E m p t y S t r . a l l , 
                     e x e c u t e C o n v e r t :   s p l i t . e x e c u t e C o n v e r t . e x c l u d e S p a c e 
                 } ) ) ; 
                 c h e c k E q u a l ( [ ' A B C ' ,   ' D E F ' ,   ' G H I ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   { 
                     s e p a r a t o r :   ' , ' , 
                     e x c l u d e E m p t y S t r :   s p l i t . e x c l u d e E m p t y S t r . a l l , 
                     e x e c u t e C o n v e r t :   s p l i t . e x e c u t e C o n v e r t . e x c l u d e S p a c e 
                 } ) ) ; 
                 c h e c k E q u a l ( [ ' A B C ' ,   ' D E F ' ,   ' G H I ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   ' , ' ,   { 
                     e x c l u d e E m p t y S t r :   s p l i t . e x c l u d e E m p t y S t r . a l l , 
                     e x e c u t e C o n v e r t :   s p l i t . e x e c u t e C o n v e r t . e x c l u d e S p a c e 
                 } ) ) ; 
                 c h e c k E q u a l ( [ ' A B C ' ,   ' D E F ' ,   ' G H I ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   ' , ' ,   s p l i t . e x c l u d e E m p t y S t r . a l l ,   { 
                     e x e c u t e C o n v e r t :   s p l i t . e x e c u t e C o n v e r t . e x c l u d e S p a c e 
                 } ) ) ; 
                 c h e c k E q u a l ( [ '   A   B   C   ' ,   '   D E   F   ' ,   '   G   H I   ' ] ,   s p l i t ( { 
                     s t r :   ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' , 
                     s e p a r a t o r :   ' , ' , 
                     e x c l u d e E m p t y S t r :   s p l i t . e x c l u d e E m p t y S t r . a l l 
                 } ) ) ; 
                 c h e c k E q u a l ( [ '   A   B   C   ' ,   '   D E   F   ' ,   '   G   H I   ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   { 
                     s e p a r a t o r :   ' , ' , 
                     e x c l u d e E m p t y S t r :   s p l i t . e x c l u d e E m p t y S t r . a l l 
                 } ) ) ; 
                 c h e c k E q u a l ( [ '   A   B   C   ' ,   '   D E   F   ' ,   '   G   H I   ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   ' , ' ,   { 
                     e x c l u d e E m p t y S t r :   s p l i t . e x c l u d e E m p t y S t r . a l l 
                 } ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   ' A B C ' ,   ' ' ,   ' D E F ' ,   ' ' ,   ' G H I ' ,   ' ' ,   ' ' ] ,   s p l i t ( { 
                     s t r :   ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' , 
                     s e p a r a t o r :   ' , ' , 
                     e x e c u t e C o n v e r t :   s p l i t . e x e c u t e C o n v e r t . e x c l u d e S p a c e 
                 } ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   ' A B C ' ,   ' ' ,   ' D E F ' ,   ' ' ,   ' G H I ' ,   ' ' ,   ' ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   { 
                     s e p a r a t o r :   ' , ' , 
                     e x e c u t e C o n v e r t :   s p l i t . e x e c u t e C o n v e r t . e x c l u d e S p a c e 
                 } ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   ' A B C ' ,   ' ' ,   ' D E F ' ,   ' ' ,   ' G H I ' ,   ' ' ,   ' ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   ' , ' ,   { 
                     e x e c u t e C o n v e r t :   s p l i t . e x e c u t e C o n v e r t . e x c l u d e S p a c e 
                 } ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   '   A   B   C   ' ,   ' ' ,   '   D E   F   ' ,   ' ' ,   '   G   H I   ' ,   ' ' ,   ' ' ] ,   s p l i t ( { 
                     s t r :   ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' , 
                     s e p a r a t o r :   ' , ' 
                 } ) ) ; 
                 c h e c k E q u a l ( [ ' ' ,   ' ' ,   '   A   B   C   ' ,   ' ' ,   '   D E   F   ' ,   ' ' ,   '   G   H I   ' ,   ' ' ,   ' ' ] ,   s p l i t ( ' , ,   A   B   C   , ,   D E   F   , ,   G   H I   , , ' ,   { 
                     s e p a r a t o r :   ' , ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s p l i t C o m m a I t e m s   =   f u n c t i o n   t e s t _ s p l i t C o m m a I t e m s ( )   { 
             i t ( ' t e s t _ s p l i t C o m m a I t e m s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( [ ' A ' ] ,   s p l i t C o m m a I t e m s ( ' A ' ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ] ,   s p l i t C o m m a I t e m s ( ' A , ' ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ,   ' B ' ] ,   s p l i t C o m m a I t e m s ( ' A , B ' ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ,   ' B ' ] ,   s p l i t C o m m a I t e m s ( ' A , B , ' ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ,   ' B ' ] ,   s p l i t C o m m a I t e m s ( ' A   , B   , ' ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ,   ' B ' ] ,   s p l i t C o m m a I t e m s ( ' \ r \ n   A   \ r \ n ,   B   \ r   , \ r \ n ' ) ) ; 
                 c h e c k E q u a l ( [ ' A   B ' ,   ' B ' ] ,   s p l i t C o m m a I t e m s ( ' \ r \ n   A   B \ r \ n ,   B   \ r   , \ r \ n ' ) ) ; 
                 c h e c k E q u a l ( [ ] ,   s p l i t C o m m a I t e m s ( ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t C o m m a I t e m s ( ' , A ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t C o m m a I t e m s ( ' , ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t C o m m a I t e m s ( ' , , ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t C o m m a I t e m s ( ' A , , B ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ s p l i t D o t I t e m s   =   f u n c t i o n   t e s t _ s p l i t D o t I t e m s ( )   { 
             i t ( ' t e s t _ s p l i t D o t I t e m s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( [ ' A ' ] ,   s p l i t D o t I t e m s ( ' A ' ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ] ,   s p l i t D o t I t e m s ( ' . A ' ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ,   ' B ' ] ,   s p l i t D o t I t e m s ( ' A . B ' ) ) ; 
                 c h e c k E q u a l ( [ ' A ' ,   ' B ' ] ,   s p l i t D o t I t e m s ( ' . A . B ' ) ) ; 
                 c h e c k E q u a l ( [ '   ' ] ,   s p l i t D o t I t e m s ( '   ' ) ) ; 
                 c h e c k E q u a l ( [ ] ,   s p l i t D o t I t e m s ( ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t D o t I t e m s ( ' A . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t D o t I t e m s ( ' A .   ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t D o t I t e m s ( ' . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t D o t I t e m s ( ' . . ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t D o t I t e m s ( ' A . . B ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     s p l i t D o t I t e m s ( ' A .   . B ' ) ; 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ p a d d i n g F i r s t   =   f u n c t i o n   t e s t _ p a d d i n g F i r s t ( )   { 
             i t ( ' t e s t _ p a d d i n g F i r s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   p a d d i n g F i r s t ( ' 1 2 3 ' ,   1 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   p a d d i n g F i r s t ( ' 1 2 3 ' ,   2 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   p a d d i n g F i r s t ( ' 1 2 3 ' ,   3 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( ' 0 1 2 3 ' ,   p a d d i n g F i r s t ( ' 1 2 3 ' ,   4 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( ' 0 0 1 2 3 ' ,   p a d d i n g F i r s t ( ' 1 2 3 ' ,   5 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     p a d d i n g F i r s t ( ' 1 2 3 ' ,   0 ,   ' 0 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 0 1 2 3 ' ,   p a d d i n g F i r s t ( { 
                     s t r :   ' 1 2 3 ' , 
                     l e n g t h :   5 , 
                     f i l l :   ' 0 ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 0 1 2 3 ' ,   p a d d i n g F i r s t ( ' 1 2 3 ' ,   { 
                     l e n g t h :   5 , 
                     f i l l :   ' 0 ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 0 0 1 2 3 ' ,   p a d d i n g F i r s t ( ' 1 2 3 ' ,   5 ,   { 
                     f i l l :   ' 0 ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ p a d d i n g L a s t   =   f u n c t i o n   t e s t _ p a d d i n g L a s t ( )   { 
             i t ( ' t e s t _ p a d d i n g L a s t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   p a d d i n g L a s t ( ' 1 2 3 ' ,   1 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   p a d d i n g L a s t ( ' 1 2 3 ' ,   2 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 ' ,   p a d d i n g L a s t ( ' 1 2 3 ' ,   3 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 0 ' ,   p a d d i n g L a s t ( ' 1 2 3 ' ,   4 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 0 0 ' ,   p a d d i n g L a s t ( ' 1 2 3 ' ,   5 ,   ' 0 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     p a d d i n g L a s t ( ' 1 2 3 ' ,   0 ,   ' 0 ' ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 0 0 ' ,   p a d d i n g L a s t ( { 
                     s t r :   ' 1 2 3 ' , 
                     l e n g t h :   5 , 
                     f i l l :   ' 0 ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 0 0 ' ,   p a d d i n g L a s t ( ' 1 2 3 ' ,   { 
                     l e n g t h :   5 , 
                     f i l l :   ' 0 ' 
                 } ) ) ; 
                 c h e c k E q u a l ( ' 1 2 3 0 0 ' ,   p a d d i n g L a s t ( ' 1 2 3 ' ,   5 ,   { 
                     f i l l :   ' 0 ' 
                 } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i n c l u d e C o u n t   =   f u n c t i o n   t e s t _ i n c l u d e C o u n t ( )   { 
             i t ( ' t e s t _ i n c l u d e C o u n t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( 0 ,   i n c l u d e C o u n t ( ' a ' ,   ' ' ) ) ; 
                 c h e c k E q u a l ( 3 ,   i n c l u d e C o u n t ( ' a a a ' ,   ' a ' ) ) ; 
                 c h e c k E q u a l ( 1 ,   i n c l u d e C o u n t ( ' a a a ' ,   ' a a ' ) ) ; 
                 c h e c k E q u a l ( 2 ,   i n c l u d e C o u n t ( ' a a a a ' ,   ' a a ' ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ e s c a p e R e g E x p   =   f u n c t i o n   t e s t _ e s c a p e R e g E x p ( )   { 
             i t ( ' t e s t _ e s c a p e R e g E x p ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' a ' ,   e s c a p e R e g E x p ( ' a ' ) ) ; 
                 c h e c k E q u a l ( ' \ \ \ \ \ \ ^ \ \ $ \ \ . A B C \ \ * \ \ + \ \ - \ \ ? ' ,   e s c a p e R e g E x p ( ' \ \ ^ $ . A B C * + - ? ' ) ) ; 
                 c h e c k E q u a l ( ' \ \ ( \ \ ) \ \ { \ \ } \ \ [ \ \ ] A B C \ \ | \ \ / ' ,   e s c a p e R e g E x p ( ' ( ) { } [ \ ] A B C \ | \ / ' ) ) ; 
             } ) ; 
         } ; 
 
         t e s t _ m a t c h F o r m a t ( ) ; 
         t e s t _ r e p l a c e A l l ( ) ; 
         t e s t _ r e p l a c e A l l R e p e a t ( ) ; 
         t e s t _ r e p l a c e A l l A r r a y ( ) ; 
         t e s t _ i n d e x O f _ s t a n d a r d ( ) ; 
         t e s t _ i n d e x O f F i r s t ( ) ; 
         t e s t _ l a s t I n d e x O f _ s t a n d a r d ( ) ; 
         t e s t _ i n d e x O f L a s t ( ) ; 
         t e s t _ i n d e x O f A n y F i r s t ( ) ; 
         t e s t _ i n d e x O f A n y L a s t ( ) ; 
         t e s t _ i s F i r s t ( ) ; 
         t e s t _ i s L a s t ( ) ; 
         t e s t _ i s B o t h E n d s ( ) ; 
         t e s t _ i n c l u d e F i r s t ( ) ; 
         t e s t _ i n c l u d e L a s t ( ) ; 
         t e s t _ i n c l u d e B o t h E n d s ( ) ; 
         t e s t _ e x c l u d e F i r s t ( ) ; 
         t e s t _ e x c l u d e L a s t ( ) ; 
         t e s t _ e x c l u d e B o t h E n d s ( ) ; 
         t e s t _ t r i m F i r s t ( ) ; 
         t e s t _ t r i m L a s t ( ) ; 
         t e s t _ t r i m B o t h E n d s ( ) ; 
         t e s t _ s u b s t r i n g _ s t a r d a r d ( ) ; 
         t e s t _ s u b s t r _ s t a r d a r d ( ) ; 
         t e s t _ s u b I n d e x ( ) ; 
         t e s t _ s u b L e n g t h ( ) ; 
         t e s t _ s u b F i r s t ( ) ; 
         t e s t _ s u b L a s t ( ) ; 
         t e s t _ d e l e t e I n d e x ( ) ; 
         t e s t _ d e l e t e L e n g t h ( ) ; 
         t e s t _ d e l e t e F i r s t ( ) ; 
         t e s t _ d e l e t e L a s t ( ) ; 
         t e s t _ i n s e r t ( ) ; 
         t e s t _ a d d ( ) ; 
         t e s t _ s u b F i r s t D e l i m F i r s t ( ) ; 
         t e s t _ s u b F i r s t D e l i m L a s t ( ) ; 
         t e s t _ s u b L a s t D e l i m F i r s t ( ) ; 
         t e s t _ s u b L a s t D e l i m L a s t ( ) ; 
         t e s t _ t a g I n n e r F i r s t ( ) ; 
         t e s t _ t a g O u t e r F i r s t ( ) ; 
         t e s t _ t a g I n n e r L a s t ( ) ; 
         t e s t _ t a g O u t e r L a s t ( ) ; 
         t e s t _ s p l i t ( ) ; 
         t e s t _ s p l i t C o m m a I t e m s ( ) ; 
         t e s t _ s p l i t D o t I t e m s ( ) ; 
         t e s t _ p a d d i n g F i r s t ( ) ; 
         t e s t _ p a d d i n g L a s t ( ) ; 
         t e s t _ i n c l u d e C o u n t ( ) ; 
         t e s t _ e s c a p e R e g E x p ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ s t r i n g   =   t e s t _ e x e c u t e _ s t r i n g ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ s t r i n g :   t e s t _ e x e c u t e _ s t r i n g 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) 
 
 } ] ) ; 