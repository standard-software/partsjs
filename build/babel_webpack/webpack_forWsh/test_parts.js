( f u n c t i o n   w e b p a c k U n i v e r s a l M o d u l e D e f i n i t i o n ( r o o t ,   f a c t o r y )   { 
 	 i f ( t y p e o f   e x p o r t s   = = =   ' o b j e c t '   & &   t y p e o f   m o d u l e   = = =   ' o b j e c t ' ) 
 	 	 m o d u l e . e x p o r t s   =   f a c t o r y ( ) ; 
 	 e l s e   i f ( t y p e o f   d e f i n e   = = =   ' f u n c t i o n '   & &   d e f i n e . a m d ) 
 	 	 d e f i n e ( [ ] ,   f a c t o r y ) ; 
 	 e l s e   i f ( t y p e o f   e x p o r t s   = = =   ' o b j e c t ' ) 
 	 	 e x p o r t s [ " t e s t _ p a r t s " ]   =   f a c t o r y ( ) ; 
 	 e l s e 
 	 	 r o o t [ " t e s t _ p a r t s " ]   =   f a c t o r y ( ) ; 
 } ) ( t h i s ,   f u n c t i o n ( )   { 
 r e t u r n   / * * * * * * /   ( f u n c t i o n ( m o d u l e s )   {   / /   w e b p a c k B o o t s t r a p 
 / * * * * * * /   	 / /   i n s t a l l   a   J S O N P   c a l l b a c k   f o r   c h u n k   l o a d i n g 
 / * * * * * * /   	 f u n c t i o n   w e b p a c k J s o n p C a l l b a c k ( d a t a )   { 
 / * * * * * * /   	 	 v a r   c h u n k I d s   =   d a t a [ 0 ] ; 
 / * * * * * * /   	 	 v a r   m o r e M o d u l e s   =   d a t a [ 1 ] ; 
 / * * * * * * /   	 	 v a r   e x e c u t e M o d u l e s   =   d a t a [ 2 ] ; 
 / * * * * * * / 
 / * * * * * * /   	 	 / /   a d d   " m o r e M o d u l e s "   t o   t h e   m o d u l e s   o b j e c t , 
 / * * * * * * /   	 	 / /   t h e n   f l a g   a l l   " c h u n k I d s "   a s   l o a d e d   a n d   f i r e   c a l l b a c k 
 / * * * * * * /   	 	 v a r   m o d u l e I d ,   c h u n k I d ,   i   =   0 ,   r e s o l v e s   =   [ ] ; 
 / * * * * * * /   	 	 f o r ( ; i   <   c h u n k I d s . l e n g t h ;   i + + )   { 
 / * * * * * * /   	 	 	 c h u n k I d   =   c h u n k I d s [ i ] ; 
 / * * * * * * /   	 	 	 i f ( O b j e c t . p r o t o t y p e . h a s O w n P r o p e r t y . c a l l ( i n s t a l l e d C h u n k s ,   c h u n k I d )   & &   i n s t a l l e d C h u n k s [ c h u n k I d ] )   { 
 / * * * * * * /   	 	 	 	 r e s o l v e s . p u s h ( i n s t a l l e d C h u n k s [ c h u n k I d ] [ 0 ] ) ; 
 / * * * * * * /   	 	 	 } 
 / * * * * * * /   	 	 	 i n s t a l l e d C h u n k s [ c h u n k I d ]   =   0 ; 
 / * * * * * * /   	 	 } 
 / * * * * * * /   	 	 f o r ( m o d u l e I d   i n   m o r e M o d u l e s )   { 
 / * * * * * * /   	 	 	 i f ( O b j e c t . p r o t o t y p e . h a s O w n P r o p e r t y . c a l l ( m o r e M o d u l e s ,   m o d u l e I d ) )   { 
 / * * * * * * /   	 	 	 	 m o d u l e s [ m o d u l e I d ]   =   m o r e M o d u l e s [ m o d u l e I d ] ; 
 / * * * * * * /   	 	 	 } 
 / * * * * * * /   	 	 } 
 / * * * * * * /   	 	 i f ( p a r e n t J s o n p F u n c t i o n )   p a r e n t J s o n p F u n c t i o n ( d a t a ) ; 
 / * * * * * * / 
 / * * * * * * /   	 	 w h i l e ( r e s o l v e s . l e n g t h )   { 
 / * * * * * * /   	 	 	 r e s o l v e s . s h i f t ( ) ( ) ; 
 / * * * * * * /   	 	 } 
 / * * * * * * / 
 / * * * * * * /   	 	 / /   a d d   e n t r y   m o d u l e s   f r o m   l o a d e d   c h u n k   t o   d e f e r r e d   l i s t 
 / * * * * * * /   	 	 d e f e r r e d M o d u l e s . p u s h . a p p l y ( d e f e r r e d M o d u l e s ,   e x e c u t e M o d u l e s   | |   [ ] ) ; 
 / * * * * * * / 
 / * * * * * * /   	 	 / /   r u n   d e f e r r e d   m o d u l e s   w h e n   a l l   c h u n k s   r e a d y 
 / * * * * * * /   	 	 r e t u r n   c h e c k D e f e r r e d M o d u l e s ( ) ; 
 / * * * * * * /   	 } ; 
 / * * * * * * /   	 f u n c t i o n   c h e c k D e f e r r e d M o d u l e s ( )   { 
 / * * * * * * /   	 	 v a r   r e s u l t ; 
 / * * * * * * /   	 	 f o r ( v a r   i   =   0 ;   i   <   d e f e r r e d M o d u l e s . l e n g t h ;   i + + )   { 
 / * * * * * * /   	 	 	 v a r   d e f e r r e d M o d u l e   =   d e f e r r e d M o d u l e s [ i ] ; 
 / * * * * * * /   	 	 	 v a r   f u l f i l l e d   =   t r u e ; 
 / * * * * * * /   	 	 	 f o r ( v a r   j   =   1 ;   j   <   d e f e r r e d M o d u l e . l e n g t h ;   j + + )   { 
 / * * * * * * /   	 	 	 	 v a r   d e p I d   =   d e f e r r e d M o d u l e [ j ] ; 
 / * * * * * * /   	 	 	 	 i f ( i n s t a l l e d C h u n k s [ d e p I d ]   ! = =   0 )   f u l f i l l e d   =   f a l s e ; 
 / * * * * * * /   	 	 	 } 
 / * * * * * * /   	 	 	 i f ( f u l f i l l e d )   { 
 / * * * * * * /   	 	 	 	 d e f e r r e d M o d u l e s . s p l i c e ( i - - ,   1 ) ; 
 / * * * * * * /   	 	 	 	 r e s u l t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( _ _ w e b p a c k _ r e q u i r e _ _ . s   =   d e f e r r e d M o d u l e [ 0 ] ) ; 
 / * * * * * * /   	 	 	 } 
 / * * * * * * /   	 	 } 
 / * * * * * * / 
 / * * * * * * /   	 	 r e t u r n   r e s u l t ; 
 / * * * * * * /   	 } 
 / * * * * * * / 
 / * * * * * * /   	 / /   T h e   m o d u l e   c a c h e 
 / * * * * * * /   	 v a r   i n s t a l l e d M o d u l e s   =   { } ; 
 / * * * * * * / 
 / * * * * * * /   	 / /   o b j e c t   t o   s t o r e   l o a d e d   a n d   l o a d i n g   c h u n k s 
 / * * * * * * /   	 / /   u n d e f i n e d   =   c h u n k   n o t   l o a d e d ,   n u l l   =   c h u n k   p r e l o a d e d / p r e f e t c h e d 
 / * * * * * * /   	 / /   P r o m i s e   =   c h u n k   l o a d i n g ,   0   =   c h u n k   l o a d e d 
 / * * * * * * /   	 v a r   i n s t a l l e d C h u n k s   =   { 
 / * * * * * * /   	 	 0 :   0 
 / * * * * * * /   	 } ; 
 / * * * * * * / 
 / * * * * * * /   	 v a r   d e f e r r e d M o d u l e s   =   [ ] ; 
 / * * * * * * / 
 / * * * * * * /   	 / /   T h e   r e q u i r e   f u n c t i o n 
 / * * * * * * /   	 f u n c t i o n   _ _ w e b p a c k _ r e q u i r e _ _ ( m o d u l e I d )   { 
 / * * * * * * / 
 / * * * * * * /   	 	 / /   C h e c k   i f   m o d u l e   i s   i n   c a c h e 
 / * * * * * * /   	 	 i f ( i n s t a l l e d M o d u l e s [ m o d u l e I d ] )   { 
 / * * * * * * /   	 	 	 r e t u r n   i n s t a l l e d M o d u l e s [ m o d u l e I d ] . e x p o r t s ; 
 / * * * * * * /   	 	 } 
 / * * * * * * /   	 	 / /   C r e a t e   a   n e w   m o d u l e   ( a n d   p u t   i t   i n t o   t h e   c a c h e ) 
 / * * * * * * /   	 	 v a r   m o d u l e   =   i n s t a l l e d M o d u l e s [ m o d u l e I d ]   =   { 
 / * * * * * * /   	 	 	 i :   m o d u l e I d , 
 / * * * * * * /   	 	 	 l :   f a l s e , 
 / * * * * * * /   	 	 	 e x p o r t s :   { } 
 / * * * * * * /   	 	 } ; 
 / * * * * * * / 
 / * * * * * * /   	 	 / /   E x e c u t e   t h e   m o d u l e   f u n c t i o n 
 / * * * * * * /   	 	 m o d u l e s [ m o d u l e I d ] . c a l l ( m o d u l e . e x p o r t s ,   m o d u l e ,   m o d u l e . e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ ) ; 
 / * * * * * * / 
 / * * * * * * /   	 	 / /   F l a g   t h e   m o d u l e   a s   l o a d e d 
 / * * * * * * /   	 	 m o d u l e . l   =   t r u e ; 
 / * * * * * * / 
 / * * * * * * /   	 	 / /   R e t u r n   t h e   e x p o r t s   o f   t h e   m o d u l e 
 / * * * * * * /   	 	 r e t u r n   m o d u l e . e x p o r t s ; 
 / * * * * * * /   	 } 
 / * * * * * * / 
 / * * * * * * / 
 / * * * * * * /   	 / /   e x p o s e   t h e   m o d u l e s   o b j e c t   ( _ _ w e b p a c k _ m o d u l e s _ _ ) 
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . m   =   m o d u l e s ; 
 / * * * * * * / 
 / * * * * * * /   	 / /   e x p o s e   t h e   m o d u l e   c a c h e 
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . c   =   i n s t a l l e d M o d u l e s ; 
 / * * * * * * / 
 / * * * * * * /   	 / /   d e f i n e   g e t t e r   f u n c t i o n   f o r   h a r m o n y   e x p o r t s 
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . d   =   f u n c t i o n ( e x p o r t s ,   n a m e ,   g e t t e r )   { 
 / * * * * * * /   	 	 i f ( ! _ _ w e b p a c k _ r e q u i r e _ _ . o ( e x p o r t s ,   n a m e ) )   { 
 / * * * * * * /   	 	 	 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   n a m e ,   {   e n u m e r a b l e :   t r u e ,   g e t :   g e t t e r   } ) ; 
 / * * * * * * /   	 	 } 
 / * * * * * * /   	 } ; 
 / * * * * * * / 
 / * * * * * * /   	 / /   d e f i n e   _ _ e s M o d u l e   o n   e x p o r t s 
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . r   =   f u n c t i o n ( e x p o r t s )   { 
 / * * * * * * /   	 	 i f ( t y p e o f   S y m b o l   ! = =   ' u n d e f i n e d '   & &   S y m b o l . t o S t r i n g T a g )   { 
 / * * * * * * /   	 	 	 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   S y m b o l . t o S t r i n g T a g ,   {   v a l u e :   ' M o d u l e '   } ) ; 
 / * * * * * * /   	 	 } 
 / * * * * * * /   	 	 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   ' _ _ e s M o d u l e ' ,   {   v a l u e :   t r u e   } ) ; 
 / * * * * * * /   	 } ; 
 / * * * * * * / 
 / * * * * * * /   	 / /   c r e a t e   a   f a k e   n a m e s p a c e   o b j e c t 
 / * * * * * * /   	 / /   m o d e   &   1 :   v a l u e   i s   a   m o d u l e   i d ,   r e q u i r e   i t 
 / * * * * * * /   	 / /   m o d e   &   2 :   m e r g e   a l l   p r o p e r t i e s   o f   v a l u e   i n t o   t h e   n s 
 / * * * * * * /   	 / /   m o d e   &   4 :   r e t u r n   v a l u e   w h e n   a l r e a d y   n s   o b j e c t 
 / * * * * * * /   	 / /   m o d e   &   8 | 1 :   b e h a v e   l i k e   r e q u i r e 
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . t   =   f u n c t i o n ( v a l u e ,   m o d e )   { 
 / * * * * * * /   	 	 i f ( m o d e   &   1 )   v a l u e   =   _ _ w e b p a c k _ r e q u i r e _ _ ( v a l u e ) ; 
 / * * * * * * /   	 	 i f ( m o d e   &   8 )   r e t u r n   v a l u e ; 
 / * * * * * * /   	 	 i f ( ( m o d e   &   4 )   & &   t y p e o f   v a l u e   = = =   ' o b j e c t '   & &   v a l u e   & &   v a l u e . _ _ e s M o d u l e )   r e t u r n   v a l u e ; 
 / * * * * * * /   	 	 v a r   n s   =   O b j e c t . c r e a t e ( n u l l ) ; 
 / * * * * * * /   	 	 _ _ w e b p a c k _ r e q u i r e _ _ . r ( n s ) ; 
 / * * * * * * /   	 	 O b j e c t . d e f i n e P r o p e r t y ( n s ,   ' d e f a u l t ' ,   {   e n u m e r a b l e :   t r u e ,   v a l u e :   v a l u e   } ) ; 
 / * * * * * * /   	 	 i f ( m o d e   &   2   & &   t y p e o f   v a l u e   ! =   ' s t r i n g ' )   f o r ( v a r   k e y   i n   v a l u e )   _ _ w e b p a c k _ r e q u i r e _ _ . d ( n s ,   k e y ,   f u n c t i o n ( k e y )   {   r e t u r n   v a l u e [ k e y ] ;   } . b i n d ( n u l l ,   k e y ) ) ; 
 / * * * * * * /   	 	 r e t u r n   n s ; 
 / * * * * * * /   	 } ; 
 / * * * * * * / 
 / * * * * * * /   	 / /   g e t D e f a u l t E x p o r t   f u n c t i o n   f o r   c o m p a t i b i l i t y   w i t h   n o n - h a r m o n y   m o d u l e s 
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . n   =   f u n c t i o n ( m o d u l e )   { 
 / * * * * * * /   	 	 v a r   g e t t e r   =   m o d u l e   & &   m o d u l e . _ _ e s M o d u l e   ? 
 / * * * * * * /   	 	 	 f u n c t i o n   g e t D e f a u l t ( )   {   r e t u r n   m o d u l e [ ' d e f a u l t ' ] ;   }   : 
 / * * * * * * /   	 	 	 f u n c t i o n   g e t M o d u l e E x p o r t s ( )   {   r e t u r n   m o d u l e ;   } ; 
 / * * * * * * /   	 	 _ _ w e b p a c k _ r e q u i r e _ _ . d ( g e t t e r ,   ' a ' ,   g e t t e r ) ; 
 / * * * * * * /   	 	 r e t u r n   g e t t e r ; 
 / * * * * * * /   	 } ; 
 / * * * * * * / 
 / * * * * * * /   	 / /   O b j e c t . p r o t o t y p e . h a s O w n P r o p e r t y . c a l l 
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . o   =   f u n c t i o n ( o b j e c t ,   p r o p e r t y )   {   r e t u r n   O b j e c t . p r o t o t y p e . h a s O w n P r o p e r t y . c a l l ( o b j e c t ,   p r o p e r t y ) ;   } ; 
 / * * * * * * / 
 / * * * * * * /   	 / /   _ _ w e b p a c k _ p u b l i c _ p a t h _ _ 
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . p   =   " " ; 
 / * * * * * * / 
 / * * * * * * /   	 v a r   j s o n p A r r a y   =   t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   =   t h i s [ " w e b p a c k J s o n p t e s t _ p a r t s " ]   | |   [ ] ; 
 / * * * * * * /   	 v a r   o l d J s o n p F u n c t i o n   =   j s o n p A r r a y . p u s h . b i n d ( j s o n p A r r a y ) ; 
 / * * * * * * /   	 j s o n p A r r a y . p u s h   =   w e b p a c k J s o n p C a l l b a c k ; 
 / * * * * * * /   	 j s o n p A r r a y   =   j s o n p A r r a y . s l i c e ( ) ; 
 / * * * * * * /   	 f o r ( v a r   i   =   0 ;   i   <   j s o n p A r r a y . l e n g t h ;   i + + )   w e b p a c k J s o n p C a l l b a c k ( j s o n p A r r a y [ i ] ) ; 
 / * * * * * * /   	 v a r   p a r e n t J s o n p F u n c t i o n   =   o l d J s o n p F u n c t i o n ; 
 / * * * * * * / 
 / * * * * * * / 
 / * * * * * * /   	 / /   a d d   e n t r y   m o d u l e   t o   d e f e r r e d   l i s t 
 / * * * * * * /   	 d e f e r r e d M o d u l e s . p u s h ( [ 0 , 6 , 1 , 3 , 4 , 5 , 2 ] ) ; 
 / * * * * * * /   	 / /   r u n   d e f e r r e d   m o d u l e s   w h e n   r e a d y 
 / * * * * * * /   	 r e t u r n   c h e c k D e f e r r e d M o d u l e s ( ) ; 
 / * * * * * * /   } ) 
 / * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * / 
 / * * * * * * /   ( [ 
 / *   0   * / 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 m o d u l e . e x p o r t s   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 1 ) ; 
 
 
 / * * * /   } ) , 
 / *   1   * / , 
 / *   2   * / , 
 / *   3   * / 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 " u s e   s t r i c t " ; 
 
 
 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   " _ _ e s M o d u l e " ,   { 
     v a l u e :   t r u e 
 } ) ; 
 e x p o r t s [ " d e f a u l t " ]   =   e x p o r t s . t e s t _ e x e c u t e _ t y p e   =   v o i d   0 ; 
 
 f u n c t i o n   a s y n c G e n e r a t o r S t e p ( g e n ,   r e s o l v e ,   r e j e c t ,   _ n e x t ,   _ t h r o w ,   k e y ,   a r g )   {   t r y   {   v a r   i n f o   =   g e n [ k e y ] ( a r g ) ;   v a r   v a l u e   =   i n f o . v a l u e ;   }   c a t c h   ( e r r o r )   {   r e j e c t ( e r r o r ) ;   r e t u r n ;   }   i f   ( i n f o . d o n e )   {   r e s o l v e ( v a l u e ) ;   }   e l s e   {   P r o m i s e . r e s o l v e ( v a l u e ) . t h e n ( _ n e x t ,   _ t h r o w ) ;   }   } 
 
 f u n c t i o n   _ a s y n c T o G e n e r a t o r ( f n )   {   r e t u r n   f u n c t i o n   ( )   {   v a r   s e l f   =   t h i s ,   a r g s   =   a r g u m e n t s ;   r e t u r n   n e w   P r o m i s e ( f u n c t i o n   ( r e s o l v e ,   r e j e c t )   {   v a r   g e n   =   f n . a p p l y ( s e l f ,   a r g s ) ;   f u n c t i o n   _ n e x t ( v a l u e )   {   a s y n c G e n e r a t o r S t e p ( g e n ,   r e s o l v e ,   r e j e c t ,   _ n e x t ,   _ t h r o w ,   " n e x t " ,   v a l u e ) ;   }   f u n c t i o n   _ t h r o w ( e r r )   {   a s y n c G e n e r a t o r S t e p ( g e n ,   r e s o l v e ,   r e j e c t ,   _ n e x t ,   _ t h r o w ,   " t h r o w " ,   e r r ) ;   }   _ n e x t ( u n d e f i n e d ) ;   } ) ;   } ;   } 
 
 f u n c t i o n   _ t y p e o f ( o b j )   {   " @ b a b e l / h e l p e r s   -   t y p e o f " ;   i f   ( t y p e o f   S y m b o l   = = =   " f u n c t i o n "   & &   t y p e o f   S y m b o l . i t e r a t o r   = = =   " s y m b o l " )   {   _ t y p e o f   =   f u n c t i o n   _ t y p e o f ( o b j )   {   r e t u r n   t y p e o f   o b j ;   } ;   }   e l s e   {   _ t y p e o f   =   f u n c t i o n   _ t y p e o f ( o b j )   {   r e t u r n   o b j   & &   t y p e o f   S y m b o l   = = =   " f u n c t i o n "   & &   o b j . c o n s t r u c t o r   = = =   S y m b o l   & &   o b j   ! = =   S y m b o l . p r o t o t y p e   ?   " s y m b o l "   :   t y p e o f   o b j ;   } ;   }   r e t u r n   _ t y p e o f ( o b j ) ;   } 
 
 / *   e s l i n t - d i s a b l e   n e w - c a p   * / 
 
 / *   e s l i n t - d i s a b l e   n o - a r r a y - c o n s t r u c t o r   * / 
 
 / *   e s l i n t - d i s a b l e   n o - n e w - o b j e c t   * / 
 
 / *   e s l i n t - d i s a b l e   n o - n e w - w r a p p e r s   * / 
 
 / *   e s l i n t - d i s a b l e   m a x - l e n   * / 
 
 / *   e s l i n t - d i s a b l e   n o - v a r   * / 
 v a r   t e s t _ e x e c u t e _ t y p e   =   f u n c t i o n   t e s t _ e x e c u t e _ t y p e ( p a r t s )   { 
     v a r   _ p a r t s $ t e s t   =   p a r t s . t e s t , 
             c h e c k E q u a l   =   _ p a r t s $ t e s t . c h e c k E q u a l , 
             d e s c r i b e   =   _ p a r t s $ t e s t . d e s c r i b e , 
             i t   =   _ p a r t s $ t e s t . i t , 
             t e s t C o u n t e r   =   _ p a r t s $ t e s t . t e s t C o u n t e r ; 
     d e s c r i b e ( ' t e s t _ e x e c u t e _ t y p e ' ,   f u n c t i o n   ( )   { 
         v a r   i s T h r o w n   =   p a r t s . t e s t . i s T h r o w n ; 
         v a r   _ p a r t s $ t y p e   =   p a r t s . t y p e , 
                 t y p e N a m e   =   _ p a r t s $ t y p e . t y p e N a m e , 
                 i s P r i m i t i v e T y p e   =   _ p a r t s $ t y p e . i s P r i m i t i v e T y p e , 
                 i s R e f e r e n c e T y p e   =   _ p a r t s $ t y p e . i s R e f e r e n c e T y p e , 
                 i s U n d e f i n e d   =   _ p a r t s $ t y p e . i s U n d e f i n e d , 
                 i s N u l l   =   _ p a r t s $ t y p e . i s N u l l , 
                 i s N a N S t r i c t   =   _ p a r t s $ t y p e . i s N a N S t r i c t , 
                 i s B o o l e a n   =   _ p a r t s $ t y p e . i s B o o l e a n , 
                 i s N u m b e r   =   _ p a r t s $ t y p e . i s N u m b e r , 
                 i s I n t e g e r   =   _ p a r t s $ t y p e . i s I n t e g e r , 
                 i s S t r i n g   =   _ p a r t s $ t y p e . i s S t r i n g , 
                 i s F u n c t i o n   =   _ p a r t s $ t y p e . i s F u n c t i o n , 
                 i s O b j e c t   =   _ p a r t s $ t y p e . i s O b j e c t , 
                 i s O b j e c t N o r m a l   =   _ p a r t s $ t y p e . i s O b j e c t N o r m a l , 
                 i s O b j e c t F r o m N u l l   =   _ p a r t s $ t y p e . i s O b j e c t F r o m N u l l , 
                 i s O b j e c t L i k e   =   _ p a r t s $ t y p e . i s O b j e c t L i k e , 
                 i s A r r a y   =   _ p a r t s $ t y p e . i s A r r a y , 
                 i s A r r a y S e r i e s   =   _ p a r t s $ t y p e . i s A r r a y S e r i e s , 
                 i s D a t e   =   _ p a r t s $ t y p e . i s D a t e , 
                 i s R e g E x p   =   _ p a r t s $ t y p e . i s R e g E x p , 
                 i s E x c e p t i o n   =   _ p a r t s $ t y p e . i s E x c e p t i o n , 
                 i s B o o l e a n O b j e c t   =   _ p a r t s $ t y p e . i s B o o l e a n O b j e c t , 
                 i s N u m b e r O b j e c t   =   _ p a r t s $ t y p e . i s N u m b e r O b j e c t , 
                 i s S t r i n g O b j e c t   =   _ p a r t s $ t y p e . i s S t r i n g O b j e c t , 
                 i s E m p t y O b j e c t   =   _ p a r t s $ t y p e . i s E m p t y O b j e c t , 
                 i s E m p t y A r r a y   =   _ p a r t s $ t y p e . i s E m p t y A r r a y , 
                 i s S y m b o l   =   _ p a r t s $ t y p e . i s S y m b o l , 
                 i s M a p   =   _ p a r t s $ t y p e . i s M a p , 
                 i s W e a k M a p   =   _ p a r t s $ t y p e . i s W e a k M a p , 
                 i s S e t   =   _ p a r t s $ t y p e . i s S e t , 
                 i s W e a k S e t   =   _ p a r t s $ t y p e . i s W e a k S e t , 
                 i s N o t U n d e f i n e d   =   _ p a r t s $ t y p e . i s N o t U n d e f i n e d , 
                 i s N o t N u l l   =   _ p a r t s $ t y p e . i s N o t N u l l , 
                 i s N o t N a N S t r i c t   =   _ p a r t s $ t y p e . i s N o t N a N S t r i c t , 
                 i s N o t B o o l e a n   =   _ p a r t s $ t y p e . i s N o t B o o l e a n , 
                 i s N o t N u m b e r   =   _ p a r t s $ t y p e . i s N o t N u m b e r , 
                 i s N o t I n t e g e r   =   _ p a r t s $ t y p e . i s N o t I n t e g e r , 
                 i s N o t S t r i n g   =   _ p a r t s $ t y p e . i s N o t S t r i n g , 
                 i s N o t F u n c t i o n   =   _ p a r t s $ t y p e . i s N o t F u n c t i o n , 
                 i s N o t O b j e c t   =   _ p a r t s $ t y p e . i s N o t O b j e c t , 
                 i s N o t O b j e c t N o r m a l   =   _ p a r t s $ t y p e . i s N o t O b j e c t N o r m a l , 
                 i s N o t O b j e c t F r o m N u l l   =   _ p a r t s $ t y p e . i s N o t O b j e c t F r o m N u l l , 
                 i s N o t O b j e c t T y p e   =   _ p a r t s $ t y p e . i s N o t O b j e c t T y p e , 
                 i s N o t A r r a y   =   _ p a r t s $ t y p e . i s N o t A r r a y , 
                 i s N o t A r r a y T y p e   =   _ p a r t s $ t y p e . i s N o t A r r a y T y p e , 
                 i s N o t D a t e   =   _ p a r t s $ t y p e . i s N o t D a t e , 
                 i s N o t R e g E x p   =   _ p a r t s $ t y p e . i s N o t R e g E x p , 
                 i s N o t E x c e p t i o n   =   _ p a r t s $ t y p e . i s N o t E x c e p t i o n , 
                 i s N o t B o o l e a n O b j e c t   =   _ p a r t s $ t y p e . i s N o t B o o l e a n O b j e c t , 
                 i s N o t N u m b e r O b j e c t   =   _ p a r t s $ t y p e . i s N o t N u m b e r O b j e c t , 
                 i s N o t S t r i n g O b j e c t   =   _ p a r t s $ t y p e . i s N o t S t r i n g O b j e c t , 
                 i s N o t E m p t y O b j e c t   =   _ p a r t s $ t y p e . i s N o t E m p t y O b j e c t , 
                 i s N o t E m p t y A r r a y   =   _ p a r t s $ t y p e . i s N o t E m p t y A r r a y , 
                 i s N o t S y m b o l   =   _ p a r t s $ t y p e . i s N o t S y m b o l , 
                 i s N o t M a p   =   _ p a r t s $ t y p e . i s N o t M a p , 
                 i s N o t W e a k M a p   =   _ p a r t s $ t y p e . i s N o t W e a k M a p , 
                 i s N o t S e t   =   _ p a r t s $ t y p e . i s N o t S e t , 
                 i s N o t W e a k S e t   =   _ p a r t s $ t y p e . i s N o t W e a k S e t , 
                 i s U n d e f i n e d A l l   =   _ p a r t s $ t y p e . i s U n d e f i n e d A l l , 
                 i s N u l l A l l   =   _ p a r t s $ t y p e . i s N u l l A l l , 
                 i s N a N S t r i c t A l l   =   _ p a r t s $ t y p e . i s N a N S t r i c t A l l , 
                 i s B o o l e a n A l l   =   _ p a r t s $ t y p e . i s B o o l e a n A l l , 
                 i s N u m b e r A l l   =   _ p a r t s $ t y p e . i s N u m b e r A l l , 
                 i s I n t e g e r A l l   =   _ p a r t s $ t y p e . i s I n t e g e r A l l , 
                 i s S t r i n g A l l   =   _ p a r t s $ t y p e . i s S t r i n g A l l , 
                 i s F u n c t i o n A l l   =   _ p a r t s $ t y p e . i s F u n c t i o n A l l , 
                 i s O b j e c t A l l   =   _ p a r t s $ t y p e . i s O b j e c t A l l , 
                 i s O b j e c t N o r m a l A l l   =   _ p a r t s $ t y p e . i s O b j e c t N o r m a l A l l , 
                 i s O b j e c t F r o m N u l l A l l   =   _ p a r t s $ t y p e . i s O b j e c t F r o m N u l l A l l , 
                 i s O b j e c t L i k e A l l   =   _ p a r t s $ t y p e . i s O b j e c t L i k e A l l , 
                 i s A r r a y A l l   =   _ p a r t s $ t y p e . i s A r r a y A l l , 
                 i s A r r a y S e r i e s A l l   =   _ p a r t s $ t y p e . i s A r r a y S e r i e s A l l , 
                 i s D a t e A l l   =   _ p a r t s $ t y p e . i s D a t e A l l , 
                 i s R e g E x p A l l   =   _ p a r t s $ t y p e . i s R e g E x p A l l , 
                 i s E x c e p t i o n A l l   =   _ p a r t s $ t y p e . i s E x c e p t i o n A l l , 
                 i s B o o l e a n O b j e c t A l l   =   _ p a r t s $ t y p e . i s B o o l e a n O b j e c t A l l , 
                 i s N u m b e r O b j e c t A l l   =   _ p a r t s $ t y p e . i s N u m b e r O b j e c t A l l , 
                 i s S t r i n g O b j e c t A l l   =   _ p a r t s $ t y p e . i s S t r i n g O b j e c t A l l , 
                 i s E m p t y O b j e c t A l l   =   _ p a r t s $ t y p e . i s E m p t y O b j e c t A l l , 
                 i s E m p t y A r r a y A l l   =   _ p a r t s $ t y p e . i s E m p t y A r r a y A l l , 
                 i s S y m b o l A l l   =   _ p a r t s $ t y p e . i s S y m b o l A l l , 
                 i s M a p A l l   =   _ p a r t s $ t y p e . i s M a p A l l , 
                 i s W e a k M a p A l l   =   _ p a r t s $ t y p e . i s W e a k M a p A l l , 
                 i s S e t A l l   =   _ p a r t s $ t y p e . i s S e t A l l , 
                 i s W e a k S e t A l l   =   _ p a r t s $ t y p e . i s W e a k S e t A l l , 
                 i s N o t U n d e f i n e d A l l   =   _ p a r t s $ t y p e . i s N o t U n d e f i n e d A l l , 
                 i s N o t N u l l A l l   =   _ p a r t s $ t y p e . i s N o t N u l l A l l , 
                 i s N o t N a N S t r i c t A l l   =   _ p a r t s $ t y p e . i s N o t N a N S t r i c t A l l , 
                 i s N o t B o o l e a n A l l   =   _ p a r t s $ t y p e . i s N o t B o o l e a n A l l , 
                 i s N o t N u m b e r A l l   =   _ p a r t s $ t y p e . i s N o t N u m b e r A l l , 
                 i s N o t I n t e g e r A l l   =   _ p a r t s $ t y p e . i s N o t I n t e g e r A l l , 
                 i s N o t S t r i n g A l l   =   _ p a r t s $ t y p e . i s N o t S t r i n g A l l , 
                 i s N o t F u n c t i o n A l l   =   _ p a r t s $ t y p e . i s N o t F u n c t i o n A l l , 
                 i s N o t O b j e c t A l l   =   _ p a r t s $ t y p e . i s N o t O b j e c t A l l , 
                 i s N o t O b j e c t N o r m a l A l l   =   _ p a r t s $ t y p e . i s N o t O b j e c t N o r m a l A l l , 
                 i s N o t O b j e c t F r o m N u l l A l l   =   _ p a r t s $ t y p e . i s N o t O b j e c t F r o m N u l l A l l , 
                 i s N o t O b j e c t T y p e A l l   =   _ p a r t s $ t y p e . i s N o t O b j e c t T y p e A l l , 
                 i s N o t A r r a y A l l   =   _ p a r t s $ t y p e . i s N o t A r r a y A l l , 
                 i s N o t A r r a y T y p e A l l   =   _ p a r t s $ t y p e . i s N o t A r r a y T y p e A l l , 
                 i s N o t D a t e A l l   =   _ p a r t s $ t y p e . i s N o t D a t e A l l , 
                 i s N o t R e g E x p A l l   =   _ p a r t s $ t y p e . i s N o t R e g E x p A l l , 
                 i s N o t E x c e p t i o n A l l   =   _ p a r t s $ t y p e . i s N o t E x c e p t i o n A l l , 
                 i s N o t B o o l e a n O b j e c t A l l   =   _ p a r t s $ t y p e . i s N o t B o o l e a n O b j e c t A l l , 
                 i s N o t N u m b e r O b j e c t A l l   =   _ p a r t s $ t y p e . i s N o t N u m b e r O b j e c t A l l , 
                 i s N o t S t r i n g O b j e c t A l l   =   _ p a r t s $ t y p e . i s N o t S t r i n g O b j e c t A l l , 
                 i s N o t E m p t y O b j e c t A l l   =   _ p a r t s $ t y p e . i s N o t E m p t y O b j e c t A l l , 
                 i s N o t E m p t y A r r a y A l l   =   _ p a r t s $ t y p e . i s N o t E m p t y A r r a y A l l , 
                 i s N o t S y m b o l A l l   =   _ p a r t s $ t y p e . i s N o t S y m b o l A l l , 
                 i s N o t M a p A l l   =   _ p a r t s $ t y p e . i s N o t M a p A l l , 
                 i s N o t W e a k M a p A l l   =   _ p a r t s $ t y p e . i s N o t W e a k M a p A l l , 
                 i s N o t S e t A l l   =   _ p a r t s $ t y p e . i s N o t S e t A l l , 
                 i s N o t W e a k S e t A l l   =   _ p a r t s $ t y p e . i s N o t W e a k S e t A l l , 
                 i s U n d e f i n e d A r r a y   =   _ p a r t s $ t y p e . i s U n d e f i n e d A r r a y , 
                 i s N u l l A r r a y   =   _ p a r t s $ t y p e . i s N u l l A r r a y , 
                 i s N a N S t r i c t A r r a y   =   _ p a r t s $ t y p e . i s N a N S t r i c t A r r a y , 
                 i s B o o l e a n A r r a y   =   _ p a r t s $ t y p e . i s B o o l e a n A r r a y , 
                 i s N u m b e r A r r a y   =   _ p a r t s $ t y p e . i s N u m b e r A r r a y , 
                 i s I n t e g e r A r r a y   =   _ p a r t s $ t y p e . i s I n t e g e r A r r a y , 
                 i s S t r i n g A r r a y   =   _ p a r t s $ t y p e . i s S t r i n g A r r a y , 
                 i s F u n c t i o n A r r a y   =   _ p a r t s $ t y p e . i s F u n c t i o n A r r a y , 
                 i s O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s O b j e c t A r r a y , 
                 i s O b j e c t N o r m a l A r r a y   =   _ p a r t s $ t y p e . i s O b j e c t N o r m a l A r r a y , 
                 i s O b j e c t F r o m N u l l A r r a y   =   _ p a r t s $ t y p e . i s O b j e c t F r o m N u l l A r r a y , 
                 i s O b j e c t L i k e A r r a y   =   _ p a r t s $ t y p e . i s O b j e c t L i k e A r r a y , 
                 i s A r r a y A r r a y   =   _ p a r t s $ t y p e . i s A r r a y A r r a y , 
                 i s A r r a y S e r i e s A r r a y   =   _ p a r t s $ t y p e . i s A r r a y S e r i e s A r r a y , 
                 i s D a t e A r r a y   =   _ p a r t s $ t y p e . i s D a t e A r r a y , 
                 i s R e g E x p A r r a y   =   _ p a r t s $ t y p e . i s R e g E x p A r r a y , 
                 i s E x c e p t i o n A r r a y   =   _ p a r t s $ t y p e . i s E x c e p t i o n A r r a y , 
                 i s B o o l e a n O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s B o o l e a n O b j e c t A r r a y , 
                 i s N u m b e r O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s N u m b e r O b j e c t A r r a y , 
                 i s S t r i n g O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s S t r i n g O b j e c t A r r a y , 
                 i s E m p t y O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s E m p t y O b j e c t A r r a y , 
                 i s E m p t y A r r a y A r r a y   =   _ p a r t s $ t y p e . i s E m p t y A r r a y A r r a y , 
                 i s S y m b o l A r r a y   =   _ p a r t s $ t y p e . i s S y m b o l A r r a y , 
                 i s M a p A r r a y   =   _ p a r t s $ t y p e . i s M a p A r r a y , 
                 i s W e a k M a p A r r a y   =   _ p a r t s $ t y p e . i s W e a k M a p A r r a y , 
                 i s S e t A r r a y   =   _ p a r t s $ t y p e . i s S e t A r r a y , 
                 i s W e a k S e t A r r a y   =   _ p a r t s $ t y p e . i s W e a k S e t A r r a y , 
                 i s N o t U n d e f i n e d A r r a y   =   _ p a r t s $ t y p e . i s N o t U n d e f i n e d A r r a y , 
                 i s N o t N u l l A r r a y   =   _ p a r t s $ t y p e . i s N o t N u l l A r r a y , 
                 i s N o t N a N S t r i c t A r r a y   =   _ p a r t s $ t y p e . i s N o t N a N S t r i c t A r r a y , 
                 i s N o t B o o l e a n A r r a y   =   _ p a r t s $ t y p e . i s N o t B o o l e a n A r r a y , 
                 i s N o t N u m b e r A r r a y   =   _ p a r t s $ t y p e . i s N o t N u m b e r A r r a y , 
                 i s N o t I n t e g e r A r r a y   =   _ p a r t s $ t y p e . i s N o t I n t e g e r A r r a y , 
                 i s N o t S t r i n g A r r a y   =   _ p a r t s $ t y p e . i s N o t S t r i n g A r r a y , 
                 i s N o t F u n c t i o n A r r a y   =   _ p a r t s $ t y p e . i s N o t F u n c t i o n A r r a y , 
                 i s N o t O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s N o t O b j e c t A r r a y , 
                 i s N o t O b j e c t N o r m a l A r r a y   =   _ p a r t s $ t y p e . i s N o t O b j e c t N o r m a l A r r a y , 
                 i s N o t O b j e c t F r o m N u l l A r r a y   =   _ p a r t s $ t y p e . i s N o t O b j e c t F r o m N u l l A r r a y , 
                 i s N o t O b j e c t T y p e A r r a y   =   _ p a r t s $ t y p e . i s N o t O b j e c t T y p e A r r a y , 
                 i s N o t A r r a y A r r a y   =   _ p a r t s $ t y p e . i s N o t A r r a y A r r a y , 
                 i s N o t A r r a y T y p e A r r a y   =   _ p a r t s $ t y p e . i s N o t A r r a y T y p e A r r a y , 
                 i s N o t D a t e A r r a y   =   _ p a r t s $ t y p e . i s N o t D a t e A r r a y , 
                 i s N o t R e g E x p A r r a y   =   _ p a r t s $ t y p e . i s N o t R e g E x p A r r a y , 
                 i s N o t E x c e p t i o n A r r a y   =   _ p a r t s $ t y p e . i s N o t E x c e p t i o n A r r a y , 
                 i s N o t B o o l e a n O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s N o t B o o l e a n O b j e c t A r r a y , 
                 i s N o t N u m b e r O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s N o t N u m b e r O b j e c t A r r a y , 
                 i s N o t S t r i n g O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s N o t S t r i n g O b j e c t A r r a y , 
                 i s N o t E m p t y O b j e c t A r r a y   =   _ p a r t s $ t y p e . i s N o t E m p t y O b j e c t A r r a y , 
                 i s N o t E m p t y A r r a y A r r a y   =   _ p a r t s $ t y p e . i s N o t E m p t y A r r a y A r r a y , 
                 i s N o t S y m b o l A r r a y   =   _ p a r t s $ t y p e . i s N o t S y m b o l A r r a y , 
                 i s N o t M a p A r r a y   =   _ p a r t s $ t y p e . i s N o t M a p A r r a y , 
                 i s N o t W e a k M a p A r r a y   =   _ p a r t s $ t y p e . i s N o t W e a k M a p A r r a y , 
                 i s N o t S e t A r r a y   =   _ p a r t s $ t y p e . i s N o t S e t A r r a y , 
                 i s N o t W e a k S e t A r r a y   =   _ p a r t s $ t y p e . i s N o t W e a k S e t A r r a y ; 
         v a r   a l l M a t c h S o m e   =   p a r t s . c o m p a r e . a l l M a t c h S o m e ; 
         v a r   o b j e c t T o S t r i n g   =   p a r t s . o b j e c t T o S t r i n g ; 
 
         v a r   t e s t _ c h e c k T y p e   =   f u n c t i o n   t e s t _ c h e c k T y p e ( )   { 
             i t ( ' t e s t _ c h e c k T y p e ' ,   f u n c t i o n   ( )   { 
                 v a r   c h e c k T y p e   =   f u n c t i o n   c h e c k T y p e ( t y p e o f N a m e ,   o b j e c t S t r i n g N a m e ,   v a l u e )   { 
                     c h e c k E q u a l ( t y p e o f N a m e ,   _ t y p e o f ( v a l u e ) ) ;   / /   c h e c k E q u a l ( t r u e ,   p a r t s . i n c l u d e s ( o b j e c t S t r i n g N a m e ,   o b j e c t T o S t r i n g ( v a l u e ) ) ) ; 
 
                     c h e c k E q u a l ( o b j e c t S t r i n g N a m e ,   o b j e c t T o S t r i n g ( v a l u e ) ) ; 
                 } ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k T y p e ( ' u n d e f i n e d ' ,   ' [ o b j e c t   O b j e c t ] ' ,   u n d e f i n e d ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   n u l l ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k T y p e ( ' u n d e f i n e d ' ,   ' [ o b j e c t   O b j e c t ] ' ,   u n d e f i n e d ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   n u l l ) ;   / /   b a d   s p e c i f i c a t i o n 
                 }   e l s e   { 
                     c h e c k T y p e ( ' u n d e f i n e d ' ,   ' [ o b j e c t   U n d e f i n e d ] ' ,   u n d e f i n e d ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   N u l l ] ' ,   n u l l ) ;   / /   b a d   s p e c i f i c a t i o n 
                 } 
 
                 c h e c k T y p e ( ' b o o l e a n ' ,   ' [ o b j e c t   B o o l e a n ] ' ,   t r u e ) ; 
                 c h e c k T y p e ( ' b o o l e a n ' ,   ' [ o b j e c t   B o o l e a n ] ' ,   f a l s e ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   B o o l e a n ] ' ,   n e w   B o o l e a n ( ) ) ; 
                 c h e c k T y p e ( ' n u m b e r ' ,   ' [ o b j e c t   N u m b e r ] ' ,   1 ) ; 
                 c h e c k T y p e ( ' n u m b e r ' ,   ' [ o b j e c t   N u m b e r ] ' ,   N a N ) ; 
                 c h e c k T y p e ( ' n u m b e r ' ,   ' [ o b j e c t   N u m b e r ] ' ,   I n f i n i t y ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   N u m b e r ] ' ,   n e w   N u m b e r ( 1 ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   N u m b e r ] ' ,   n e w   N u m b e r ( N a N ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   N u m b e r ] ' ,   n e w   N u m b e r ( I n f i n i t y ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   N u m b e r ] ' ,   n e w   N u m b e r ( n u l l ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   N u m b e r ] ' ,   n e w   N u m b e r ( u n d e f i n e d ) ) ; 
                 c h e c k T y p e ( ' s t r i n g ' ,   ' [ o b j e c t   S t r i n g ] ' ,   ' ' ) ; 
                 c h e c k T y p e ( ' s t r i n g ' ,   ' [ o b j e c t   S t r i n g ] ' ,   ' 1 ' ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   S t r i n g ] ' ,   n e w   S t r i n g ( ' ' ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   S t r i n g ] ' ,   n e w   S t r i n g ( ' 1 ' ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   S t r i n g ] ' ,   n e w   S t r i n g ( n u l l ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   S t r i n g ] ' ,   n e w   S t r i n g ( u n d e f i n e d ) ) ; 
 
                 f u n c t i o n   t e s t F u n c ( )   { } 
 
                 c h e c k T y p e ( ' f u n c t i o n ' ,   ' [ o b j e c t   F u n c t i o n ] ' ,   t e s t F u n c ) ; 
                 c h e c k T y p e ( ' f u n c t i o n ' ,   ' [ o b j e c t   F u n c t i o n ] ' ,   f u n c t i o n   ( )   { } ) ; 
                 c h e c k T y p e ( ' f u n c t i o n ' ,   ' [ o b j e c t   F u n c t i o n ] ' ,   f u n c t i o n   ( )   { } ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   { } ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   n e w   O b j e c t ( ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   A r r a y ] ' ,   [ ] ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   A r r a y ] ' ,   n e w   A r r a y ( ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   R e g E x p ] ' ,   / ^ a / ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   R e g E x p ] ' ,   n e w   R e g E x p ( ' ^ a ' ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   D a t e ] ' ,   n e w   D a t e ( ) ) ; 
                 c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   M a t h ] ' ,   M a t h ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         B i g I n t ( 1 0 0 ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         B i g I n t ( 1 0 0 ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         B i g I n t ( 1 0 0 ) ; 
                     } ) ) ; 
                 }   e l s e   { 
                     / /   c h e c k T y p e ( ' b i g i n t ' ,               ' [ o b j e c t   B i g I n t ] ' ,   1 0 0 n ) ; 
                     / /     B i g I n t [ n ] ( f o r   e x a m p l e   9 9 9 n ) ,   i t   i s   c o m p i l e   e r r o r   f o r   w s h 
                     c h e c k T y p e ( ' b i g i n t ' ,   ' [ o b j e c t   B i g I n t ] ' ,   B i g I n t ( 1 0 0 ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         J S O N . s t r i n g i f y ( { } ) ; 
                     } ) ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   J S O N ] ' ,   J S O N ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   I n t 8 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   U i n t 8 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   U i n t 8 C l a m p e d A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   I n t 1 6 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   U i n t 1 6 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   I n t 3 2 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   U i n t 3 2 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   F l o a t 3 2 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   F l o a t 6 4 A r r a y ( ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   I n t 8 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   U i n t 8 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   U i n t 8 C l a m p e d A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   I n t 1 6 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   U i n t 1 6 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   I n t 3 2 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   U i n t 3 2 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   F l o a t 3 2 A r r a y ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   F l o a t 6 4 A r r a y ( ) ; 
                     } ) ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   I n t 8 A r r a y ] ' ,   n e w   I n t 8 A r r a y ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   U i n t 8 A r r a y ] ' ,   n e w   U i n t 8 A r r a y ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   U i n t 8 C l a m p e d A r r a y ] ' ,   n e w   U i n t 8 C l a m p e d A r r a y ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   I n t 1 6 A r r a y ] ' ,   n e w   I n t 1 6 A r r a y ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   U i n t 1 6 A r r a y ] ' ,   n e w   U i n t 1 6 A r r a y ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   I n t 3 2 A r r a y ] ' ,   n e w   I n t 3 2 A r r a y ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   U i n t 3 2 A r r a y ] ' ,   n e w   U i n t 3 2 A r r a y ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   F l o a t 3 2 A r r a y ] ' ,   n e w   F l o a t 3 2 A r r a y ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   F l o a t 6 4 A r r a y ] ' ,   n e w   F l o a t 6 4 A r r a y ( ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   M a p ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   W e a k M a p ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   S e t ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   W e a k S e t ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         S y m b o l ( ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   M a p ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   W e a k M a p ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   S e t ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   W e a k S e t ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         S y m b o l ( ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   n e w   M a p ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   n e w   W e a k M a p ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   n e w   S e t ( ) ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   M a p ] ' ,   n e w   M a p ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   W e a k M a p ] ' ,   n e w   W e a k M a p ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   S e t ] ' ,   n e w   S e t ( ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   W e a k S e t ] ' ,   n e w   W e a k S e t ( ) ) ; 
                     c h e c k T y p e ( ' s y m b o l ' ,   ' [ o b j e c t   S y m b o l ] ' ,   S y m b o l ( ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   A r r a y B u f f e r ( 8 ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   A r r a y B u f f e r ( 8 ) ; 
                     } ) ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   A r r a y B u f f e r ] ' ,   n e w   A r r a y B u f f e r ( 8 ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   S h a r e d A r r a y B u f f e r ( 8 ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   S h a r e d A r r a y B u f f e r ( 8 ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   S h a r e d A r r a y B u f f e r ( 8 ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   S h a r e d A r r a y B u f f e r ( 8 ) ; 
                     } ) ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   S h a r e d A r r a y B u f f e r ] ' ,   n e w   S h a r e d A r r a y B u f f e r ( 8 ) ) ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   A t o m i c s ] ' ,   A t o m i c s ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   D a t a V i e w ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   P r o m i s e ( ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   D a t a V i e w ( ) ; 
                     } ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   P r o m i s e ( ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 6 ) ) ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   D a t a V i e w ] ' ,   n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 6 ) ) ) ; 
                     c h e c k T y p e ( ' f u n c t i o n ' ,   ' [ o b j e c t   F u n c t i o n ] ' ,   P r o m i s e ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s D e n o ( ) )   { 
                     v a r   G e n e r a t o r   =   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   G e n e r a t o r ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   G e n e r a t o r $ ( _ c o n t e x t )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t . p r e v   =   _ c o n t e x t . n e x t )   { 
                                     c a s e   0 : 
                                         _ c o n t e x t . n e x t   =   2 ; 
                                         r e t u r n   1 ; 
 
                                     c a s e   2 : 
                                         _ c o n t e x t . n e x t   =   4 ; 
                                         r e t u r n   2 ; 
 
                                     c a s e   4 : 
                                         _ c o n t e x t . n e x t   =   6 ; 
                                         r e t u r n   3 ; 
 
                                     c a s e   6 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   G e n e r a t o r ) ; 
                     } ) ; 
                     v a r   G e n e r a t o r F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e $ ( _ c o n t e x t 2 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 2 . p r e v   =   _ c o n t e x t 2 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 2 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e ) ; 
                     } ) ) . c o n s t r u c t o r ; 
                     v a r   A s y n c F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / _ a s y n c T o G e n e r a t o r (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e 2 ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e 2 $ ( _ c o n t e x t 3 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 3 . p r e v   =   _ c o n t e x t 3 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 3 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e 2 ) ; 
                     } ) ) ) . c o n s t r u c t o r ; 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   G e n e r a t o r ] ' ,   G e n e r a t o r ( ) ) ; 
                     c h e c k T y p e ( ' f u n c t i o n ' ,   ' [ o b j e c t   G e n e r a t o r F u n c t i o n ] ' ,   n e w   G e n e r a t o r F u n c t i o n ( ) ) ; 
                     c h e c k T y p e ( ' f u n c t i o n ' ,   ' [ o b j e c t   A s y n c F u n c t i o n ] ' ,   n e w   A s y n c F u n c t i o n ( ) ) ; 
                 }   / /   P r o x y 
 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   P r o x y ( { } ,   { } ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   P r o x y ( { } ,   { } ) ; 
                     } ) ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                         n e w   P r o x y ( { } ,   { } ) ; 
                     } ) ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   n e w   P r o x y ( { } ,   { } ) ) ; 
                 }   / /   W e b A s s e m b l y 
 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   t y p e o f   W e b A s s e m b l y   = = =   ' u n d e f i n e d ' ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   t y p e o f   W e b A s s e m b l y   = = =   ' u n d e f i n e d ' ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   t y p e o f   W e b A s s e m b l y   = = =   ' u n d e f i n e d ' ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   W e b A s s e m b l y ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   W e b A s s e m b l y ] ' ,   W e b A s s e m b l y ) ; 
                 }   / /   R e f l e c t 
 
 
                 t e s t C o u n t e r ( ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   t y p e o f   R e f l e c t   = = =   ' u n d e f i n e d ' ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   t y p e o f   R e f l e c t   = = =   ' u n d e f i n e d ' ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   t y p e o f   R e f l e c t   = = =   ' u n d e f i n e d ' ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s C h r o m e ( )   | |   p a r t s . p l a t f o r m . i s E d g e ( )   | |   p a r t s . p l a t f o r m . i s F i r e f o x ( )   | |   p a r t s . p l a t f o r m . i s O p e r a ( )   | |   p a r t s . p l a t f o r m . i s D e n o ( )   | |   p a r t s . p l a t f o r m . i s N o d e ( )   | |   p a r t s . p l a t f o r m . i s J e s t ( ) )   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   R e f l e c t ] ' ,   R e f l e c t ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   R e f l e c t ) ; 
                 }   / /   I n t l 
 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   t y p e o f   I n t l   = = =   ' u n d e f i n e d ' ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   t y p e o f   I n t l   = = =   ' u n d e f i n e d ' ) ; 
                 }   e l s e   i f   ( p a r t s . p l a t f o r m . i s C h r o m e ( )   | |   p a r t s . p l a t f o r m . i s E d g e ( )   | |   p a r t s . p l a t f o r m . i s F i r e f o x ( )   | |   p a r t s . p l a t f o r m . i s O p e r a ( )   | |   p a r t s . p l a t f o r m . i s D e n o ( )   | |   p a r t s . p l a t f o r m . i s N o d e ( )   | |   p a r t s . p l a t f o r m . i s J e s t ( ) )   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   I n t l ] ' ,   I n t l ) ; 
                 }   e l s e   { 
                     c h e c k T y p e ( ' o b j e c t ' ,   ' [ o b j e c t   O b j e c t ] ' ,   I n t l ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ t y p e N a m e   =   f u n c t i o n   t e s t _ t y p e N a m e ( )   { 
             i t ( ' t e s t _ t y p e N a m e ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( ' U n d e f i n e d ' ,   t y p e N a m e ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( ' N u l l ' ,   t y p e N a m e ( n u l l ) ) ; 
                 c h e c k E q u a l ( ' B o o l e a n ' ,   t y p e N a m e ( t r u e ) ) ; 
                 c h e c k E q u a l ( ' B o o l e a n ' ,   t y p e N a m e ( f a l s e ) ) ; 
                 c h e c k E q u a l ( ' B o o l e a n O b j e c t ' ,   t y p e N a m e ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r ' ,   t y p e N a m e ( 1 ) ) ; 
                 c h e c k E q u a l ( ' N a N ' ,   t y p e N a m e ( N a N ) ) ; 
                 c h e c k E q u a l ( ' I n f i n i t y ' ,   t y p e N a m e ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( ' I n f i n i t y ' ,   t y p e N a m e ( - I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( ' I n f i n i t y ' ,   t y p e N a m e ( I n f i n i t y   /   2 ) ) ; 
                 c h e c k E q u a l ( ' N a N ' ,   t y p e N a m e ( I n f i n i t y   /   I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( 0 ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( 1 ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( N a N ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( - I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( ' 0 ' ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( ' N u m b e r O b j e c t ' ,   t y p e N a m e ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( ' S t r i n g ' ,   t y p e N a m e ( ' ' ) ) ; 
                 c h e c k E q u a l ( ' S t r i n g ' ,   t y p e N a m e ( ' a ' ) ) ; 
                 c h e c k E q u a l ( ' S t r i n g O b j e c t ' ,   t y p e N a m e ( n e w   S t r i n g ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( ' S t r i n g O b j e c t ' ,   t y p e N a m e ( n e w   S t r i n g ( ' a ' ) ) ) ; 
                 c h e c k E q u a l ( ' S t r i n g O b j e c t ' ,   t y p e N a m e ( n e w   S t r i n g ( 1 ) ) ) ; 
                 c h e c k E q u a l ( ' S t r i n g O b j e c t ' ,   t y p e N a m e ( n e w   S t r i n g ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( ' S t r i n g O b j e c t ' ,   t y p e N a m e ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( { } ) ) ; 
                 c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( n e w   O b j e c t ( ) ) ) ; 
                 c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( n e w   O b j e c t ( n u l l ) ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( O b j e c t . c r e a t e ( { } ) ) ) ; 
                     c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( O b j e c t . c r e a t e ( { 
                         a :   ' A ' 
                     } ) ) ) ; 
                     c h e c k E q u a l ( ' O b j e c t F r o m N u l l ' ,   t y p e N a m e ( O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 } 
 
                 f u n c t i o n   t e s t F u n c ( )   { } 
 
                 c h e c k E q u a l ( ' F u n c t i o n ' ,   t y p e N a m e ( t e s t F u n c ) ) ; 
                 c h e c k E q u a l ( ' F u n c t i o n ' ,   t y p e N a m e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( ' F u n c t i o n ' ,   t y p e N a m e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( ' A r r a y ' ,   t y p e N a m e ( [ ] ) ) ; 
                 c h e c k E q u a l ( ' A r r a y ' ,   t y p e N a m e ( [ 0 ,   1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( ' A r r a y ' ,   t y p e N a m e ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( ' R e g E x p ' ,   t y p e N a m e ( / ^ a / ) ) ; 
                 c h e c k E q u a l ( ' R e g E x p ' ,   t y p e N a m e ( n e w   R e g E x p ( ' ^ a ' ) ) ) ; 
                 c h e c k E q u a l ( ' D a t e ' ,   t y p e N a m e ( n e w   D a t e ( ) ) ) ; 
                 c h e c k E q u a l ( ' M a t h ' ,   t y p e N a m e ( M a t h ) ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( ' J S O N ' ,   t y p e N a m e ( J S O N ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( ' I n t 8 A r r a y ' ,   t y p e N a m e ( n e w   I n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( ' U i n t 8 A r r a y ' ,   t y p e N a m e ( n e w   U i n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( ' U i n t 8 C l a m p e d A r r a y ' ,   t y p e N a m e ( n e w   U i n t 8 C l a m p e d A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( ' I n t 1 6 A r r a y ' ,   t y p e N a m e ( n e w   I n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( ' U i n t 1 6 A r r a y ' ,   t y p e N a m e ( n e w   U i n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( ' I n t 3 2 A r r a y ' ,   t y p e N a m e ( n e w   I n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( ' U i n t 3 2 A r r a y ' ,   t y p e N a m e ( n e w   U i n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( ' F l o a t 3 2 A r r a y ' ,   t y p e N a m e ( n e w   F l o a t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( ' F l o a t 6 4 A r r a y ' ,   t y p e N a m e ( n e w   F l o a t 6 4 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( ' A r r a y B u f f e r ' ,   t y p e N a m e ( n e w   A r r a y B u f f e r ( 1 ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( ' M a p ' ,   t y p e N a m e ( n e w   M a p ( ) ) ) ; 
                     c h e c k E q u a l ( ' W e a k M a p ' ,   t y p e N a m e ( n e w   W e a k M a p ( ) ) ) ; 
                     c h e c k E q u a l ( ' S e t ' ,   t y p e N a m e ( n e w   S e t ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( ' W e a k S e t ' ,   t y p e N a m e ( n e w   W e a k S e t ( ) ) ) ; 
                     c h e c k E q u a l ( ' S y m b o l ' ,   t y p e N a m e ( S y m b o l ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( ' S h a r e d A r r a y B u f f e r ' ,   t y p e N a m e ( n e w   S h a r e d A r r a y B u f f e r ( 1 ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( ' A t o m i c s ' ,   t y p e N a m e ( A t o m i c s ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 ) ) ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' D a t a V i e w ' ,   t y p e N a m e ( n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 ) ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( ' F u n c t i o n ' ,   t y p e N a m e ( P r o m i s e ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s V 8 ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s N o d e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s C h r o m e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s E d g e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s O p e r a ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s J e s t ( ) )   { }   e l s e   { 
                     v a r   G e n e r a t o r   =   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   G e n e r a t o r ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   G e n e r a t o r $ ( _ c o n t e x t 4 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 4 . p r e v   =   _ c o n t e x t 4 . n e x t )   { 
                                     c a s e   0 : 
                                         _ c o n t e x t 4 . n e x t   =   2 ; 
                                         r e t u r n   1 ; 
 
                                     c a s e   2 : 
                                         _ c o n t e x t 4 . n e x t   =   4 ; 
                                         r e t u r n   2 ; 
 
                                     c a s e   4 : 
                                         _ c o n t e x t 4 . n e x t   =   6 ; 
                                         r e t u r n   3 ; 
 
                                     c a s e   6 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 4 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   G e n e r a t o r ) ; 
                     } ) ; 
                     v a r   G e n e r a t o r F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e 3 ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e 3 $ ( _ c o n t e x t 5 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 5 . p r e v   =   _ c o n t e x t 5 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 5 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e 3 ) ; 
                     } ) ) . c o n s t r u c t o r ; 
                     v a r   A s y n c F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / _ a s y n c T o G e n e r a t o r (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e 4 ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e 4 $ ( _ c o n t e x t 6 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 6 . p r e v   =   _ c o n t e x t 6 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 6 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e 4 ) ; 
                     } ) ) ) . c o n s t r u c t o r ; 
                     c h e c k E q u a l ( ' G e n e r a t o r ' ,   t y p e N a m e ( G e n e r a t o r ( ) ) ) ; 
                     c h e c k E q u a l ( ' G e n e r a t o r F u n c t i o n ' ,   t y p e N a m e ( n e w   G e n e r a t o r F u n c t i o n ( ) ) ) ; 
                     c h e c k E q u a l ( ' A s y n c F u n c t i o n ' ,   t y p e N a m e ( n e w   A s y n c F u n c t i o n ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( n e w   P r o x y ( { } ,   { } ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { 
                     c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( W e b A s s e m b l y ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' W e b A s s e m b l y ' ,   t y p e N a m e ( W e b A s s e m b l y ) ) ; 
                 } 
 
                 t e s t C o u n t e r ( ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s C h r o m e ( )   | |   p a r t s . p l a t f o r m . i s E d g e ( )   | |   p a r t s . p l a t f o r m . i s F i r e f o x ( )   | |   p a r t s . p l a t f o r m . i s O p e r a ( )   | |   p a r t s . p l a t f o r m . i s D e n o ( )   | |   p a r t s . p l a t f o r m . i s N o d e ( )   | |   p a r t s . p l a t f o r m . i s J e s t ( ) )   { 
                     c h e c k E q u a l ( ' R e f l e c t ' ,   t y p e N a m e ( R e f l e c t ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( R e f l e c t ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s C h r o m e ( )   | |   p a r t s . p l a t f o r m . i s E d g e ( )   | |   p a r t s . p l a t f o r m . i s F i r e f o x ( )   | |   p a r t s . p l a t f o r m . i s O p e r a ( )   | |   p a r t s . p l a t f o r m . i s D e n o ( )   | |   p a r t s . p l a t f o r m . i s N o d e ( )   | |   p a r t s . p l a t f o r m . i s J e s t ( ) )   { 
                     c h e c k E q u a l ( ' I n t l ' ,   t y p e N a m e ( I n t l ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( ' O b j e c t ' ,   t y p e N a m e ( I n t l ) ) ; 
                 } 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( ' M o d u l e ' ,   t y p e N a m e ( p a r t s ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s O b j e c t L i k e 2   =   f u n c t i o n   t e s t _ i s O b j e c t L i k e 2 ( )   { 
             i t ( ' t e s t _ i s O b j e c t L i k e 2 ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( N a N ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( - I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( I n f i n i t y   /   2 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( I n f i n i t y   /   I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( 0 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( 1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( N a N ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( - I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( ' 0 ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( ' a ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   S t r i n g ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   S t r i n g ( ' a ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   S t r i n g ( 1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   S t r i n g ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   O b j e c t ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   O b j e c t ( n u l l ) ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( O b j e c t . c r e a t e ( { } ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( O b j e c t . c r e a t e ( { 
                         a :   ' A ' 
                     } ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 } 
 
                 f u n c t i o n   t e s t F u n c ( )   { } 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( t e s t F u n c ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( [ ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( [ 0 ,   1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( / ^ a / ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   R e g E x p ( ' ^ a ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   D a t e ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( M a t h ) ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( J S O N ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   I n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   U i n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   U i n t 8 C l a m p e d A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   I n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   U i n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   I n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   U i n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   F l o a t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   F l o a t 6 4 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   A r r a y B u f f e r ( 1 ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   M a p ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   W e a k M a p ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   S e t ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   W e a k S e t ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( S y m b o l ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   S h a r e d A r r a y B u f f e r ( 1 ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( A t o m i c s ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 ) ) ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 ) ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( P r o m i s e ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s V 8 ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s N o d e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s C h r o m e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s E d g e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s O p e r a ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s J e s t ( ) )   { }   e l s e   { 
                     v a r   G e n e r a t o r   =   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   G e n e r a t o r ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   G e n e r a t o r $ ( _ c o n t e x t 7 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 7 . p r e v   =   _ c o n t e x t 7 . n e x t )   { 
                                     c a s e   0 : 
                                         _ c o n t e x t 7 . n e x t   =   2 ; 
                                         r e t u r n   1 ; 
 
                                     c a s e   2 : 
                                         _ c o n t e x t 7 . n e x t   =   4 ; 
                                         r e t u r n   2 ; 
 
                                     c a s e   4 : 
                                         _ c o n t e x t 7 . n e x t   =   6 ; 
                                         r e t u r n   3 ; 
 
                                     c a s e   6 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 7 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   G e n e r a t o r ) ; 
                     } ) ; 
                     v a r   G e n e r a t o r F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e 5 ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e 5 $ ( _ c o n t e x t 8 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 8 . p r e v   =   _ c o n t e x t 8 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 8 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e 5 ) ; 
                     } ) ) . c o n s t r u c t o r ; 
                     v a r   A s y n c F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / _ a s y n c T o G e n e r a t o r (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e 6 ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e 6 $ ( _ c o n t e x t 9 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 9 . p r e v   =   _ c o n t e x t 9 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 9 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e 6 ) ; 
                     } ) ) ) . c o n s t r u c t o r ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( G e n e r a t o r ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   G e n e r a t o r F u n c t i o n ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   A s y n c F u n c t i o n ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   P r o x y ( { } ,   { } ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( W e b A s s e m b l y ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( W e b A s s e m b l y ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( R e f l e c t ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s D e n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( I n t l ) ) ; 
                 } 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( p a r t s ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s P r i m i t i v e T y p e   =   f u n c t i o n   t e s t _ i s P r i m i t i v e T y p e ( )   { 
             i t ( ' t e s t _ i s P r i m i t i v e T y p e ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( n u l l ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( t r u e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( f a l s e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( N a N ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( - I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( I n f i n i t y   /   2 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( I n f i n i t y   /   I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( 0 ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( 1 ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( N a N ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( - I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( ' 0 ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   S t r i n g ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   S t r i n g ( ' a ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   S t r i n g ( 1 ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   S t r i n g ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   O b j e c t ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   O b j e c t ( n u l l ) ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( O b j e c t . c r e a t e ( { } ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( O b j e c t . c r e a t e ( { 
                         a :   ' A ' 
                     } ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 } 
 
                 f u n c t i o n   t e s t F u n c ( )   { } 
 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( t e s t F u n c ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( [ 0 ,   1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( / ^ a / ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   R e g E x p ( ' ^ a ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   D a t e ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( M a t h ) ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( J S O N ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   I n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   U i n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   U i n t 8 C l a m p e d A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   I n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   U i n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   I n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   U i n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   F l o a t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   F l o a t 6 4 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   A r r a y B u f f e r ( 1 ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   M a p ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   W e a k M a p ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   S e t ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   W e a k S e t ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s P r i m i t i v e T y p e ( S y m b o l ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   S h a r e d A r r a y B u f f e r ( 1 ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( A t o m i c s ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 ) ) ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 ) ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( P r o m i s e ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s V 8 ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s N o d e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s C h r o m e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s E d g e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s O p e r a ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s J e s t ( ) )   { }   e l s e   { 
                     v a r   G e n e r a t o r   =   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   G e n e r a t o r ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   G e n e r a t o r $ ( _ c o n t e x t 1 0 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 1 0 . p r e v   =   _ c o n t e x t 1 0 . n e x t )   { 
                                     c a s e   0 : 
                                         _ c o n t e x t 1 0 . n e x t   =   2 ; 
                                         r e t u r n   1 ; 
 
                                     c a s e   2 : 
                                         _ c o n t e x t 1 0 . n e x t   =   4 ; 
                                         r e t u r n   2 ; 
 
                                     c a s e   4 : 
                                         _ c o n t e x t 1 0 . n e x t   =   6 ; 
                                         r e t u r n   3 ; 
 
                                     c a s e   6 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 1 0 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   G e n e r a t o r ) ; 
                     } ) ; 
                     v a r   G e n e r a t o r F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e 7 ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e 7 $ ( _ c o n t e x t 1 1 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 1 1 . p r e v   =   _ c o n t e x t 1 1 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 1 1 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e 7 ) ; 
                     } ) ) . c o n s t r u c t o r ; 
                     v a r   A s y n c F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / _ a s y n c T o G e n e r a t o r (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e 8 ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e 8 $ ( _ c o n t e x t 1 2 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 1 2 . p r e v   =   _ c o n t e x t 1 2 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 1 2 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e 8 ) ; 
                     } ) ) ) . c o n s t r u c t o r ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( G e n e r a t o r ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   G e n e r a t o r F u n c t i o n ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   A s y n c F u n c t i o n ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( n e w   P r o x y ( { } ,   { } ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( W e b A s s e m b l y ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( W e b A s s e m b l y ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( R e f l e c t ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s D e n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( I n t l ) ) ; 
                 } 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s P r i m i t i v e T y p e ( p a r t s ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s R e f e r e n c e T y p e   =   f u n c t i o n   t e s t _ i s R e f e r e n c e T y p e ( )   { 
             i t ( ' t e s t _ i s R e f e r e n c e T y p e ' ,   f u n c t i o n   ( )   { 
                 / /   r e t u r n   v a l u e   e x a c t l y   m a t c h e s   i s O b j e c t L i k e 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( f a l s e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( N a N ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( - I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( I n f i n i t y   /   2 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( I n f i n i t y   /   I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( 0 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( 1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( N a N ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( - I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( ' 0 ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( ' a ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   S t r i n g ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   S t r i n g ( ' a ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   S t r i n g ( 1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   S t r i n g ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   O b j e c t ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   O b j e c t ( n u l l ) ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( O b j e c t . c r e a t e ( { } ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( O b j e c t . c r e a t e ( { 
                         a :   ' A ' 
                     } ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 } 
 
                 f u n c t i o n   t e s t F u n c ( )   { } 
 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( t e s t F u n c ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( [ ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( [ 0 ,   1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( / ^ a / ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   R e g E x p ( ' ^ a ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   D a t e ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( M a t h ) ) ; 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( J S O N ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   I n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   U i n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   U i n t 8 C l a m p e d A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   I n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   U i n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   I n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   U i n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   F l o a t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   F l o a t 6 4 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   A r r a y B u f f e r ( 1 ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   M a p ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   W e a k M a p ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   S e t ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   W e a k S e t ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s R e f e r e n c e T y p e ( S y m b o l ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   S h a r e d A r r a y B u f f e r ( 1 ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( A t o m i c s ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 ) ) ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   D a t a V i e w ( n e w   A r r a y B u f f e r ( 1 ) ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( P r o m i s e ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s V 8 ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s N o d e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s C h r o m e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s E d g e ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s O p e r a ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s J e s t ( ) )   { }   e l s e   { 
                     v a r   G e n e r a t o r   =   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   G e n e r a t o r ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   G e n e r a t o r $ ( _ c o n t e x t 1 3 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 1 3 . p r e v   =   _ c o n t e x t 1 3 . n e x t )   { 
                                     c a s e   0 : 
                                         _ c o n t e x t 1 3 . n e x t   =   2 ; 
                                         r e t u r n   1 ; 
 
                                     c a s e   2 : 
                                         _ c o n t e x t 1 3 . n e x t   =   4 ; 
                                         r e t u r n   2 ; 
 
                                     c a s e   4 : 
                                         _ c o n t e x t 1 3 . n e x t   =   6 ; 
                                         r e t u r n   3 ; 
 
                                     c a s e   6 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 1 3 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   G e n e r a t o r ) ; 
                     } ) ; 
                     v a r   G e n e r a t o r F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e 9 ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e 9 $ ( _ c o n t e x t 1 4 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 1 4 . p r e v   =   _ c o n t e x t 1 4 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 1 4 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e 9 ) ; 
                     } ) ) . c o n s t r u c t o r ; 
                     v a r   A s y n c F u n c t i o n   =   O b j e c t . g e t P r o t o t y p e O f (   / * # _ _ P U R E _ _ * / _ a s y n c T o G e n e r a t o r (   / * # _ _ P U R E _ _ * / r e g e n e r a t o r R u n t i m e . m a r k ( f u n c t i o n   _ c a l l e e 1 0 ( )   { 
                         r e t u r n   r e g e n e r a t o r R u n t i m e . w r a p ( f u n c t i o n   _ c a l l e e 1 0 $ ( _ c o n t e x t 1 5 )   { 
                             w h i l e   ( 1 )   { 
                                 s w i t c h   ( _ c o n t e x t 1 5 . p r e v   =   _ c o n t e x t 1 5 . n e x t )   { 
                                     c a s e   0 : 
                                     c a s e   " e n d " : 
                                         r e t u r n   _ c o n t e x t 1 5 . s t o p ( ) ; 
                                 } 
                             } 
                         } ,   _ c a l l e e 1 0 ) ; 
                     } ) ) ) . c o n s t r u c t o r ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( G e n e r a t o r ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   G e n e r a t o r F u n c t i o n ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   A s y n c F u n c t i o n ( ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( n e w   P r o x y ( { } ,   { } ) ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s F i r e f o x ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( W e b A s s e m b l y ) ) ; 
                 }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( W e b A s s e m b l y ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( R e f l e c t ) ) ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { }   e l s e   i f   ( p a r t s . p l a t f o r m . i s D e n o ( ) )   { }   e l s e   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( I n t l ) ) ; 
                 } 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s R e f e r e n c e T y p e ( p a r t s ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s U n d e f i n e d A l l   =   f u n c t i o n   t e s t _ i s U n d e f i n e d A l l ( )   { 
             i t ( ' t e s t _ i s U n d e f i n e d A l l ' ,   f u n c t i o n   ( )   { 
                 v a r   u 1 ; 
                 v a r   n 1   =   n u l l ; 
                 v a r   v 1   =   1 ; 
                 c h e c k E q u a l ( t r u e ,   i s U n d e f i n e d A l l ( u 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A l l ( n 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A l l ( v 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s U n d e f i n e d A r r a y ( [ u 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A r r a y ( [ n 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A r r a y ( [ v 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s U n d e f i n e d A l l ( u 1 ,   u 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A l l ( u 1 ,   n 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A l l ( u 1 ,   v 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s U n d e f i n e d A r r a y ( [ u 1 ,   u 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A r r a y ( [ u 1 ,   n 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A r r a y ( [ u 1 ,   v 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A l l ( u 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A l l ( n 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A l l ( v 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A r r a y ( [ u 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A r r a y ( [ n 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A r r a y ( [ v 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A l l ( u 1 ,   u 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A l l ( u 1 ,   n 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A l l ( n 1 ,   n 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A l l ( n 1 ,   u 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A l l ( v 1 ,   v 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A l l ( v 1 ,   n 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A l l ( v 1 ,   u 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A r r a y ( [ u 1 ,   u 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A r r a y ( [ u 1 ,   n 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A r r a y ( [ n 1 ,   n 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A r r a y ( [ n 1 ,   u 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A r r a y ( [ v 1 ,   v 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A r r a y ( [ v 1 ,   n 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t U n d e f i n e d A r r a y ( [ v 1 ,   u 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A l l ( [ v 1 ,   v 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s U n d e f i n e d A l l ( [ u 1 ,   u 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A l l ( [ v 1 ,   v 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t U n d e f i n e d A l l ( [ u 1 ,   u 1 ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s N u l l   =   f u n c t i o n   t e s t _ i s N u l l ( )   { 
             i t ( ' t e s t _ i s N u l l ' ,   f u n c t i o n   ( )   { 
                 v a r   u 1 ; 
                 v a r   n 1   =   n u l l ; 
                 v a r   v 1   =   1 ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u l l A l l ( u 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u l l A l l ( n 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u l l A l l ( v 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u l l A r r a y ( [ u 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u l l A r r a y ( [ n 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u l l A r r a y ( [ v 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u l l A l l ( n 1 ,   n 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u l l A l l ( n 1 ,   u 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u l l A l l ( n 1 ,   v 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u l l A r r a y ( [ n 1 ,   n 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u l l A r r a y ( [ n 1 ,   u 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u l l A r r a y ( [ n 1 ,   v 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A l l ( u 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A l l ( n 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A l l ( v 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A r r a y ( [ u 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A r r a y ( [ n 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A r r a y ( [ v 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A l l ( u 1 ,   u 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A l l ( u 1 ,   n 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A l l ( n 1 ,   n 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A l l ( n 1 ,   u 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A l l ( v 1 ,   v 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A l l ( v 1 ,   n 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A l l ( v 1 ,   u 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A r r a y ( [ u 1 ,   u 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A r r a y ( [ u 1 ,   n 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A r r a y ( [ n 1 ,   n 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A r r a y ( [ n 1 ,   u 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A r r a y ( [ v 1 ,   v 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u l l A r r a y ( [ v 1 ,   n 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u l l A r r a y ( [ v 1 ,   u 1 ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s B o o l e a n   =   f u n c t i o n   t e s t _ i s B o o l e a n ( )   { 
             i t ( ' t e s t _ i s B o o l e a n ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n ( t r u e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n ( f a l s e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( ' a a a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( - 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n A l l ( t r u e ,   t r u e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n A l l ( t r u e ,   f a l s e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A l l ( t r u e ,   1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A l l ( t r u e ,   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A l l ( t r u e ,   [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A l l ( t r u e ,   n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A l l ( t r u e ,   u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A l l ( t r u e ,   ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n A r r a y ( [ t r u e ,   t r u e ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n A r r a y ( [ t r u e ,   f a l s e ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A r r a y ( [ t r u e ,   1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A r r a y ( [ t r u e ,   { } ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A r r a y ( [ t r u e ,   [ ] ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A r r a y ( [ t r u e ,   n u l l ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A r r a y ( [ t r u e ,   u n d e f i n e d ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n A r r a y ( [ t r u e ,   ' ' ] ) ) ;   / /   b o o l e a n   o b j e c t 
 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n e w   B o o l e a n ( 0 ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n e w   B o o l e a n ( 1 ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n e w   B o o l e a n ( t r u e ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n e w   B o o l e a n ( f a l s e ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n e w   B o o l e a n ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n e w   B o o l e a n ( ' a ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n e w   B o o l e a n ( [ ] ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n ( n e w   B o o l e a n ( { } ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n O b j e c t ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n O b j e c t ( n e w   B o o l e a n ( 0 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n O b j e c t ( n e w   B o o l e a n ( 1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n O b j e c t ( n e w   B o o l e a n ( t r u e ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n O b j e c t ( n e w   B o o l e a n ( f a l s e ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n O b j e c t ( n e w   B o o l e a n ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n O b j e c t ( n e w   B o o l e a n ( ' a ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n O b j e c t ( n e w   B o o l e a n ( [ ] ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s B o o l e a n O b j e c t ( n e w   B o o l e a n ( { } ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( f a l s e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( ' a a a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( - 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s B o o l e a n O b j e c t ( { } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s N u m b e r   =   f u n c t i o n   t e s t _ i s N u m b e r ( )   { 
             i t ( ' t e s t _ i s N u m b e r ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A l l ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A l l ( 0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A l l ( - 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A l l ( 1 2 3 . 4 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A l l ( 1 2 3 . 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( f a l s e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( I n f i n i t y ) ) ;   / /   I n f i n i t y   i s   n o t   n u m b e r 
 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( N a N ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' A B C ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' A B C 1 0 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' 1 0 A B C ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' 0 A B C ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' 0 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' - 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' 1 0 0 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( ' - 1 0 0 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A l l ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A l l ( 0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A l l ( t r u e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A l l ( n u l l ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A l l ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A l l ( I n f i n i t y ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A l l ( N a N ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A l l ( ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A l l ( 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A l l ( 3 ,   4 ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A l l ( 1 0 . 5 ,   2 0 . 5 ,   3 0 . 5 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( 1 ,   2 ,   t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A l l ( 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A l l ( 3 ,   4 ,   5 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A l l ( 1 0 . 5 ,   2 0 . 5 ,   3 0 . 5 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A l l ( 1 ,   2 ,   t r u e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A l l ( f a l s e ,   t r u e ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A l l ( ' a ' ,   ' b ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( [ 1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A r r a y ( [ 1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A r r a y ( [ 3 ,   4 ,   5 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r A r r a y ( [ 1 0 . 5 ,   2 0 . 5 ,   3 0 . 5 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A r r a y ( [ 1 ,   2 ,   t r u e ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A r r a y ( [ 1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A r r a y ( [ 3 ,   4 ,   5 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A r r a y ( [ 1 0 . 5 ,   2 0 . 5 ,   3 0 . 5 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t N u m b e r A r r a y ( [ 1 ,   2 ,   t r u e ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A r r a y ( [ f a l s e ,   t r u e ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t N u m b e r A r r a y ( [ ' a ' ,   ' b ' ] ) ) ; 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( n e w   N u m b e r ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( n e w   N u m b e r ( '   ' ) ) ) ; 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( n e w   N u m b e r ( '  0' ) ) ) ; 
                 c h e c k E q u a l ( 1 ,   N u m b e r ( n e w   N u m b e r ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( 1 . 1 ,   N u m b e r ( n e w   N u m b e r ( ' 1 . 1 ' ) ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( n e w   N u m b e r ( N a N ) ) ) ; 
                 c h e c k E q u a l ( I n f i n i t y ,   N u m b e r ( n e w   N u m b e r ( I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( N a N ,   N u m b e r ( n e w   N u m b e r ( u n d e f i n e d ) ) ) ; 
                 c h e c k E q u a l ( 0 ,   N u m b e r ( n e w   N u m b e r ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( n e w   N u m b e r ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( n e w   N u m b e r ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N u m b e r A l l ( n e w   N u m b e r ( ' 1 . 1 ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r O b j e c t A l l ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r O b j e c t A l l ( n e w   N u m b e r ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r O b j e c t A l l ( n e w   N u m b e r ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N u m b e r O b j e c t A l l ( n e w   N u m b e r ( ' 1 . 1 ' ) ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s I n t e g e r   =   f u n c t i o n   t e s t _ i s I n t e g e r ( )   { 
             i t ( ' t e s t _ i s I n t e g e r ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A l l ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A l l ( 0 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A l l ( - 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( 1 2 3 . 4 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A l l ( 1 2 3 . 0 ) ) ;   / /   . 0   e q u a l   I n t e g e r 
 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( f a l s e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( ' A B C ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( ' 0 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( ' 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( ' - 5 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( ' 1 0 0 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( ' - 1 0 0 ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A l l ( 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A l l ( 3 ,   4 ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A l l ( 1 0 ,   2 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( 1 ,   2 ,   3 . 5 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A l l ( 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A l l ( 3 ,   4 ,   5 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A l l ( 1 0 ,   2 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A l l ( 1 ,   2 ,   3 . 5 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A l l ( 1 ,   2 . 1 ,   3 . 5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t I n t e g e r A l l ( 1 . 1 ,   2 . 2 ,   3 . 5 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A r r a y ( [ ] ) ,   ' ? ' ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A r r a y ( [ 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A r r a y ( [ 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A r r a y ( [ 1 . 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A r r a y ( [ 1 . 1 ,   2 . 2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A r r a y ( [ 1 . 1 ,   2 . 2 ,   3 . 3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s I n t e g e r A r r a y ( [ 1 ,   2 ,   0 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A r r a y ( [ 1 ,   2 ,   N a N ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A r r a y ( [ 1 ,   2 ,   n u l l ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A r r a y ( [ ' a ' ,   ' b ' ,   1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A r r a y ( [ ' a ' ,   ' b ' ,   1 . 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A r r a y ( [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A r r a y ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A r r a y ( [ 1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A r r a y ( [ 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A r r a y ( [ 1 . 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A r r a y ( [ 1 . 1 ,   2 . 2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t I n t e g e r A r r a y ( [ 1 . 1 ,   2 . 2 ,   3 . 3 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A r r a y ( [ 1 ,   2 ,   0 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A r r a y ( [ 1 ,   2 ,   N a N ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A r r a y ( [ 1 ,   2 ,   n u l l ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t I n t e g e r A r r a y ( [ ' a ' ,   ' b ' ,   1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t I n t e g e r A r r a y ( [ ' a ' ,   ' b ' ,   1 . 1 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t I n t e g e r A r r a y ( [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( n e w   N u m b e r ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( n e w   N u m b e r ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( n e w   N u m b e r ( ' 1 . 1 ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s I n t e g e r A l l ( n e w   N u m b e r ( 1 ) ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s S t r i n g   =   f u n c t i o n   t e s t _ i s S t r i n g ( )   { 
             i t ( ' t e s t _ i s S t r i n g ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( f a l s e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( n u l l ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g ( ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g ( ' a a a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( - 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g A l l ( ' ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g A l l ( ' a ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g A l l ( ' a ' ,   ' b ' ,   ' c ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g A l l ( ' a ' ,   ' b ' ,   ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g A l l ( ' a ' ,   ' b ' ,   0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g A l l ( ' a ' ,   ' b ' ,   1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g A l l ( ' a ' ,   ' b ' ,   n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g A l l ( ' a ' ,   ' b ' ,   u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g A r r a y ( [ ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g A r r a y ( [ ' ' ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g A r r a y ( [ ' a ' ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   ' ' ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   0 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   n u l l ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   u n d e f i n e d ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t S t r i n g A r r a y ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t S t r i n g A r r a y ( [ ' ' ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t S t r i n g A r r a y ( [ ' a ' ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   ' c ' ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   ' ' ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   0 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   1 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   n u l l ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t S t r i n g A r r a y ( [ ' a ' ,   ' b ' ,   u n d e f i n e d ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t S t r i n g A r r a y ( [ 0 ,   1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t S t r i n g A r r a y ( [ 0 ,   n u l l ,   u n d e f i n e d ] ) ) ;   / /   s t r i n g   o b j e c t 
 
                 c h e c k E q u a l ( ' ' ,   S t r i n g ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( ' ' ,   S t r i n g ( n e w   S t r i n g ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( '   ' ,   S t r i n g ( n e w   S t r i n g ( '   ' ) ) ) ; 
                 c h e c k E q u a l ( '  0' ,   S t r i n g ( n e w   S t r i n g ( '  0' ) ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   S t r i n g ( n e w   S t r i n g ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( ' 1 . 1 ' ,   S t r i n g ( n e w   S t r i n g ( ' 1 . 1 ' ) ) ) ; 
                 c h e c k E q u a l ( ' 1 ' ,   S t r i n g ( n e w   S t r i n g ( 1 ) ) ) ; 
                 c h e c k E q u a l ( ' 1 . 1 ' ,   S t r i n g ( n e w   S t r i n g ( 1 . 1 ) ) ) ; 
                 c h e c k E q u a l ( ' N a N ' ,   S t r i n g ( n e w   S t r i n g ( N a N ) ) ) ; 
                 c h e c k E q u a l ( ' I n f i n i t y ' ,   S t r i n g ( n e w   S t r i n g ( I n f i n i t y ) ) ) ; 
                 c h e c k E q u a l ( ' u n d e f i n e d ' ,   S t r i n g ( n e w   S t r i n g ( u n d e f i n e d ) ) ) ; 
                 c h e c k E q u a l ( ' n u l l ' ,   S t r i n g ( n e w   S t r i n g ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( n e w   S t r i n g ( u n d e f i n e d ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( n e w   S t r i n g ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( n e w   S t r i n g ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( n e w   S t r i n g ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g ( n e w   S t r i n g ( 1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g O b j e c t ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g O b j e c t ( n e w   S t r i n g ( u n d e f i n e d ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g O b j e c t ( n e w   S t r i n g ( n u l l ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g O b j e c t ( n e w   S t r i n g ( ' ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g O b j e c t ( n e w   S t r i n g ( ' 1 ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S t r i n g O b j e c t ( n e w   S t r i n g ( 1 ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( t r u e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( f a l s e ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( ' ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( ' a a a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( - 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s S t r i n g O b j e c t ( { } ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s F u n c t i o n   =   f u n c t i o n   t e s t _ i s F u n c t i o n ( )   { 
             i t ( ' t e s t _ i s F u n c t i o n ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s F u n c t i o n A l l ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s F u n c t i o n A l l ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s F u n c t i o n A l l ( f u n c t i o n   ( )   { } ,   t e s t _ i s F u n c t i o n ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s F u n c t i o n A l l ( { } ,   t e s t _ i s F u n c t i o n ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s F u n c t i o n A r r a y ( [ f u n c t i o n   ( )   { } ,   t e s t _ i s F u n c t i o n ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s F u n c t i o n A r r a y ( [ { } ,   t e s t _ i s F u n c t i o n ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ d i f f e r e n t _ o b j e c t N o r m a l _ o b j e c t F r o m N u l l   =   f u n c t i o n   t e s t _ d i f f e r e n t _ o b j e c t N o r m a l _ o b j e c t F r o m N u l l ( )   { 
             c h e c k E q u a l ( t r u e ,   ' h a s O w n P r o p e r t y '   i n   { } ) ; 
             c h e c k E q u a l ( t r u e ,   ' c o n s t r u c t o r '   i n   { } ) ; 
 
             i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                 c h e c k E q u a l ( f a l s e ,   ' h a s O w n P r o p e r t y '   i n   O b j e c t . c r e a t e ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   ' c o n s t r u c t o r '   i n   O b j e c t . c r e a t e ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t y p e N a m e ( O b j e c t . c r e a t e ( { } ) ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t y p e N a m e ( O b j e c t . c r e a t e ( n u l l ) ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t y p e N a m e ( O b j e c t . c r e a t e ( ) ) ; 
                 } ) ) ; 
             }   e l s e   { 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t y p e N a m e ( O b j e c t . c r e a t e ( { } ) ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t y p e N a m e ( O b j e c t . c r e a t e ( n u l l ) ) ; 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s T h r o w n ( f u n c t i o n   ( )   { 
                     t y p e N a m e ( O b j e c t . c r e a t e ( ) ) ; 
                 } ) ) ; 
             } 
         } ; 
 
         v a r   t e s t _ i s O b j e c t   =   f u n c t i o n   t e s t _ i s O b j e c t ( )   { 
             i t ( ' t e s t _ i s O b j e c t ' ,   f u n c t i o n   ( )   { 
                 / /   o b j e c t   o t h e r   v a l u e 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( t r u e ) ) ;   / /   n o r m a l   o b j e c t 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t ( { 
                     a :   0 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t ( { 
                     a :   0 , 
                     b :   1 
                 } ) ) ;   / /   o b j e c t   f r o m   n u l l 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t ( O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 }   / /   o b j e c t   l i k e 
 
 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( n e w   E r r o r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( n e w   D a t e ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( n e w   R e g E x p ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t ( n e w   O b j e c t ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( n e w   F u n c t i o n ( ) ) ) ; 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t ( p a r t s ) ) ; 
                 }   / /   i s . . . A l l 
 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t A l l ( { 
                     a :   0 , 
                     b :   1 
                 } ,   { 
                     c :   0 , 
                     d :   1 
                 } ) ) ;   / /   i s . . . A r r a y 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t A r r a y ( [ { } ,   { 
                     a :   0 , 
                     b :   1 
                 } ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t A r r a y ( [ [ ] ,   { 
                     a :   0 , 
                     b :   1 
                 } ] ) ) ; 
 
                 v a r   T e s t O b j e c t   =   f u n c t i o n   T e s t O b j e c t ( )   { 
                     t h i s . a   =   ' a ' ; 
                 } ; 
 
                 v a r   t e s t O b j e c t 1   =   n e w   T e s t O b j e c t ( ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t ( t e s t O b j e c t 1 ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s O b j e c t N o r m a l   =   f u n c t i o n   t e s t _ i s O b j e c t N o r m a l ( )   { 
             i t ( ' t e s t _ i s O b j e c t N o r m a l ' ,   f u n c t i o n   ( )   { 
                 / /   o b j e c t   o t h e r   v a l u e 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( t r u e ) ) ;   / /   n o r m a l   o b j e c t 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t N o r m a l ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t N o r m a l ( { 
                     a :   0 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t N o r m a l ( { 
                     a :   0 , 
                     b :   1 
                 } ) ) ;   / /   o b j e c t   f r o m   n u l l 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 }   / /   o b j e c t   l i k e 
 
 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( n e w   E r r o r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( n e w   D a t e ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( n e w   R e g E x p ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t N o r m a l ( n e w   O b j e c t ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( n e w   F u n c t i o n ( ) ) ) ; 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l ( p a r t s ) ) ; 
                 }   / /   i s . . . A l l 
 
 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t N o r m a l A l l ( { 
                     a :   0 , 
                     b :   1 
                 } ,   { 
                     c :   0 , 
                     d :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t O b j e c t N o r m a l A l l ( { 
                     a :   0 , 
                     b :   1 
                 } ,   { 
                     c :   0 , 
                     d :   1 
                 } ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l A l l ( { } ,   O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l A l l ( O b j e c t . c r e a t e ( n u l l ) ,   O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s N o t O b j e c t N o r m a l A l l ( { } ,   O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s N o t O b j e c t N o r m a l A l l ( O b j e c t . c r e a t e ( n u l l ) ,   O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 }   / /   i s . . . A r r a y 
 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t N o r m a l A r r a y ( [ { } ,   { 
                     a :   0 , 
                     b :   1 
                 } ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t O b j e c t N o r m a l A r r a y ( [ { } ,   { 
                     a :   0 , 
                     b :   1 
                 } ] ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l A r r a y ( [ { } ,   O b j e c t . c r e a t e ( n u l l ) ] ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t N o r m a l A r r a y ( [ O b j e c t . c r e a t e ( n u l l ) ,   O b j e c t . c r e a t e ( n u l l ) ] ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s N o t O b j e c t N o r m a l A r r a y ( [ { } ,   O b j e c t . c r e a t e ( n u l l ) ] ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s N o t O b j e c t N o r m a l A r r a y ( [ O b j e c t . c r e a t e ( n u l l ) ,   O b j e c t . c r e a t e ( n u l l ) ] ) ) ; 
                 } 
 
                 v a r   T e s t O b j e c t   =   f u n c t i o n   T e s t O b j e c t ( )   { 
                     t h i s . a   =   ' a ' ; 
                 } ; 
 
                 v a r   t e s t O b j e c t 1   =   n e w   T e s t O b j e c t ( ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t N o r m a l ( t e s t O b j e c t 1 ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s O b j e c t F r o m N u l l   =   f u n c t i o n   t e s t _ i s O b j e c t F r o m N u l l ( )   { 
             i t ( ' t e s t _ i s O b j e c t F r o m N u l l ' ,   f u n c t i o n   ( )   { 
                 / /   o b j e c t   o t h e r   v a l u e 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( t r u e ) ) ;   / /   n o r m a l   o b j e c t 
 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( { 
                     a :   0 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( { 
                     a :   0 , 
                     b :   1 
                 } ) ) ;   / /   o b j e c t   f r o m   n u l l 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t F r o m N u l l ( O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 }   / /   o b j e c t   l i k e 
 
 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n e w   E r r o r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n e w   D a t e ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n e w   R e g E x p ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n e w   O b j e c t ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( n e w   F u n c t i o n ( ) ) ) ; 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( p a r t s ) ) ; 
                 }   / /   i s . . . A l l 
 
 
                 t e s t C o u n t e r ( ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l A l l ( { 
                     a :   0 , 
                     b :   1 
                 } ,   { 
                     c :   0 , 
                     d :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t O b j e c t F r o m N u l l A l l ( { 
                     a :   0 , 
                     b :   1 
                 } ,   { 
                     c :   0 , 
                     d :   1 
                 } ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l A l l ( { } ,   O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t F r o m N u l l A l l ( O b j e c t . c r e a t e ( n u l l ) ,   O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s N o t O b j e c t F r o m N u l l A l l ( { } ,   O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s N o t O b j e c t F r o m N u l l A l l ( O b j e c t . c r e a t e ( n u l l ) ,   O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 }   / /   i s . . . A r r a y 
 
 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l A r r a y ( [ { } ,   { 
                     a :   0 , 
                     b :   1 
                 } ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t O b j e c t F r o m N u l l A r r a y ( [ { } ,   { 
                     a :   0 , 
                     b :   1 
                 } ] ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l A r r a y ( [ { } ,   O b j e c t . c r e a t e ( n u l l ) ] ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t F r o m N u l l A r r a y ( [ O b j e c t . c r e a t e ( n u l l ) ,   O b j e c t . c r e a t e ( n u l l ) ] ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s N o t O b j e c t F r o m N u l l A r r a y ( [ { } ,   O b j e c t . c r e a t e ( n u l l ) ] ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s N o t O b j e c t F r o m N u l l A r r a y ( [ O b j e c t . c r e a t e ( n u l l ) ,   O b j e c t . c r e a t e ( n u l l ) ] ) ) ; 
                 } 
 
                 v a r   T e s t O b j e c t   =   f u n c t i o n   T e s t O b j e c t ( )   { 
                     t h i s . a   =   ' a ' ; 
                 } ; 
 
                 v a r   t e s t O b j e c t 1   =   n e w   T e s t O b j e c t ( ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t F r o m N u l l ( t e s t O b j e c t 1 ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s O b j e c t L i k e 1   =   f u n c t i o n   t e s t _ i s O b j e c t L i k e 1 ( )   { 
             i t ( ' t e s t _ i s O b j e c t L i k e 1 ' ,   f u n c t i o n   ( )   { 
                 / /   o b j e c t   o t h e r   v a l u e 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( ' a ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( 1 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t L i k e ( t r u e ) ) ;   / /   n o r m a l   o b j e c t 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( { 
                     a :   0 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( { 
                     a :   0 , 
                     b :   1 
                 } ) ) ;   / /   o b j e c t   f r o m   n u l l 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( O b j e c t . c r e a t e ( n u l l ) ) ) ; 
                 }   / /   o b j e c t   l i k e 
 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( [ ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( f u n c t i o n   ( )   { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   E r r o r ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   D a t e ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   R e g E x p ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   S t r i n g ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   N u m b e r ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   B o o l e a n ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   O b j e c t ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( n e w   F u n c t i o n ( ) ) ) ; 
 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e ( p a r t s ) ) ; 
                 }   / /   i s . . . A l l 
 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e A l l ( { 
                     a :   0 , 
                     b :   1 
                 } ,   { 
                     c :   0 , 
                     d :   1 
                 } ) ) ;   / /   i s . . . A r r a y 
 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e A r r a y ( [ { } ,   { 
                     a :   0 , 
                     b :   1 
                 } ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e A r r a y ( [ [ ] ,   { 
                     a :   0 , 
                     b :   1 
                 } ] ) ) ; 
 
                 v a r   T e s t O b j e c t   =   f u n c t i o n   T e s t O b j e c t ( )   { 
                     t h i s . a   =   ' a ' ; 
                 } ; 
 
                 v a r   t e s t O b j e c t 1   =   n e w   T e s t O b j e c t ( ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t L i k e A l l ( t e s t O b j e c t 1 ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s M o d u l e   =   f u n c t i o n   t e s t _ i s M o d u l e ( )   { 
             i t ( ' t e s t _ i s M o d u l e ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . i s M o d u l e ( p a r t s ) )   { 
                     c h e c k E q u a l ( f a l s e ,   p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s A r r a y   =   f u n c t i o n   t e s t _ i s A r r a y ( )   { 
             i t ( ' t e s t _ i s A r r a y ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( [ 1 2 3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( [ ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( [ 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( ' 1 , 2 , 3 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( [ 1 ] ,   [ 2 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( [ 3 ] ,   [ 4 ] ,   [ 5 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( [ 1 0 ,   2 0 ] ,   [ 3 0 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( [ 1 ,   2 ] ,   3 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t A r r a y A l l ( 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t A r r a y A l l ( [ 3 ] ,   [ 4 ] ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t A r r a y A l l ( 1 0 ,   2 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t A r r a y A l l ( 1 0 ,   2 0 ,   [ 3 0 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A r r a y ( [ [ 1 ] ,   [ 2 ] ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A r r a y ( [ [ 3 ] ,   [ 4 ] ,   [ 5 ] ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A r r a y ( [ [ 1 0 ,   2 0 ] ,   [ 3 0 ] ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s A r r a y A r r a y ( [ [ 1 ,   2 ] ,   3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t A r r a y A r r a y ( [ 1 ,   2 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t A r r a y A r r a y ( [ [ 3 ] ,   [ 4 ] ,   5 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s N o t A r r a y A r r a y ( [ 1 0 ,   2 0 ,   3 0 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s N o t A r r a y A r r a y ( [ 1 0 ,   2 0 ,   [ 3 0 ] ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ A r r a y i s A r r a y   =   f u n c t i o n   t e s t _ A r r a y i s A r r a y ( )   { 
             i t ( ' t e s t _ A r r a y i s A r r a y ' ,   f u n c t i o n   ( )   { 
                 v a r   A r r a y i s A r r a y A l l   =   f u n c t i o n   A r r a y i s A r r a y A l l ( )   { 
                     f o r   ( v a r   i   =   0 ,   l   =   a r g u m e n t s . l e n g t h ;   i   <   l ;   i   + =   1 )   { 
                         v a r   r e s u l t   =   A r r a y . i s A r r a y ( i   <   0   | |   a r g u m e n t s . l e n g t h   < =   i   ?   u n d e f i n e d   :   a r g u m e n t s [ i ] ) ; 
 
                         i f   ( r e s u l t   = = =   f a l s e )   { 
                             r e t u r n   f a l s e ; 
                         } 
                     } 
 
                     r e t u r n   t r u e ; 
                 } ; 
 
                 v a r   N o t A r r a y i s A r r a y A l l   =   f u n c t i o n   N o t A r r a y i s A r r a y A l l ( )   { 
                     f o r   ( v a r   i   =   0 ,   l   =   a r g u m e n t s . l e n g t h ;   i   <   l ;   i   + =   1 )   { 
                         v a r   r e s u l t   =   A r r a y . i s A r r a y ( i   <   0   | |   a r g u m e n t s . l e n g t h   < =   i   ?   u n d e f i n e d   :   a r g u m e n t s [ i ] ) ; 
 
                         i f   ( r e s u l t   = = =   t r u e )   { 
                             r e t u r n   f a l s e ; 
                         } 
                     } 
 
                     r e t u r n   t r u e ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   A r r a y i s A r r a y A l l ( [ 1 2 3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y i s A r r a y A l l ( [ ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y i s A r r a y A l l ( [ 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   A r r a y i s A r r a y A l l ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   A r r a y i s A r r a y A l l ( ' 1 , 2 , 3 ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y i s A r r a y A l l ( [ 1 ] ,   [ 2 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y i s A r r a y A l l ( [ 3 ] ,   [ 4 ] ,   [ 5 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y i s A r r a y A l l ( [ 1 0 ,   2 0 ] ,   [ 3 0 ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   A r r a y i s A r r a y A l l ( [ 1 ,   2 ] ,   3 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   N o t A r r a y i s A r r a y A l l ( 1 ,   2 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   N o t A r r a y i s A r r a y A l l ( [ 3 ] ,   [ 4 ] ,   5 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   N o t A r r a y i s A r r a y A l l ( 1 0 ,   2 0 ,   3 0 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   N o t A r r a y i s A r r a y A l l ( 1 0 ,   2 0 ,   [ 3 0 ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s A r r a y S e r i e s   =   f u n c t i o n   t e s t _ i s A r r a y S e r i e s ( )   { 
             i t ( ' t e s t _ i s A r r a y S e r i e s ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   A r r a y . i s A r r a y ( [ ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y . i s A r r a y ( [ 1 2 3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y . i s A r r a y ( [ 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y . i s A r r a y ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y . i s A r r a y ( n e w   A r r a y ( 1 ,   2 ,   3 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   A r r a y . i s A r r a y ( n e w   A r r a y ( ) ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( )   & &   ! p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   A r r a y . i s A r r a y ( n e w   I n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   A r r a y . i s A r r a y ( n e w   U i n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   A r r a y . i s A r r a y ( n e w   U i n t 8 C l a m p e d A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   A r r a y . i s A r r a y ( n e w   I n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   A r r a y . i s A r r a y ( n e w   U i n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   A r r a y . i s A r r a y ( n e w   I n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   A r r a y . i s A r r a y ( n e w   U i n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   A r r a y . i s A r r a y ( n e w   F l o a t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   A r r a y . i s A r r a y ( n e w   F l o a t 6 4 A r r a y ( ) ) ) ; 
                 } 
 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( [ ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( [ 1 2 3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( [ 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( n e w   A r r a y ( 1 ,   2 ,   3 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y A l l ( n e w   A r r a y ( ) ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( )   & &   ! p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( n e w   I n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( n e w   U i n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( n e w   U i n t 8 C l a m p e d A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( n e w   I n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( n e w   U i n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( n e w   I n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( n e w   U i n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( n e w   F l o a t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s A r r a y A l l ( n e w   F l o a t 6 4 A r r a y ( ) ) ) ; 
                 } 
 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( [ ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( [ 1 2 3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( [ 1 ,   2 ,   3 ] ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   A r r a y ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   A r r a y ( 1 ,   2 ,   3 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   A r r a y ( ) ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( )   & &   ! p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   I n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   U i n t 8 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   U i n t 8 C l a m p e d A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   I n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   U i n t 1 6 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   I n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   U i n t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   F l o a t 3 2 A r r a y ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s A r r a y S e r i e s A l l ( n e w   F l o a t 6 4 A r r a y ( ) ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s D a t e   =   f u n c t i o n   t e s t _ i s D a t e ( )   { 
             i t ( ' t e s t _ i s D a t e ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s D a t e A l l ( n e w   D a t e ( 2 0 1 7 ,   1 ,   1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s D a t e A l l ( n e w   D a t e ( ' 2 0 1 7 / 0 1 ' ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s D a t e A l l ( n e w   D a t e ( 2 0 1 7 ,   1 ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s D a t e A l l ( n e w   D a t e ( 2 0 1 7 ,   1 ) ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s E x c e c t i o n   =   f u n c t i o n   t e s t _ i s E x c e c t i o n ( )   { 
             i t ( ' t e s t _ i s E x c e c t i o n ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s E x c e p t i o n A l l ( { 
                     n a m e :   ' ' , 
                     m e s s a g e :   ' ' 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E x c e p t i o n A l l ( { 
                     n a m e :   ' ' 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E x c e p t i o n A l l ( { 
                     m e s s a g e :   ' ' 
                 } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s E x c e p t i o n A l l ( n e w   E r r o r ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s E x c e p t i o n A l l ( n e w   T y p e E r r o r ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s E x c e p t i o n A l l ( n e w   S y n t a x E r r o r ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s E x c e p t i o n A l l ( n e w   R e f e r e n c e E r r o r ( ) ) ) ; 
 
                 v a r   U s e r E x c e p t i o n   =   f u n c t i o n   U s e r E x c e p t i o n ( m e s s a g e )   { 
                     t h i s . m e s s a g e   =   m e s s a g e ; 
                     t h i s . n a m e   =   ' U s e r E x c e p t i o n ' ; 
                 } ; 
 
                 c h e c k E q u a l ( t r u e ,   i s E x c e p t i o n A l l ( n e w   U s e r E x c e p t i o n ( ' m e s s a g e ' ) ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s E m p t y O b j e c t   =   f u n c t i o n   t e s t _ i s E m p t y O b j e c t ( )   { 
             i t ( ' t e s t _ i s E m p t y O b j e c t ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( t r u e ,   i s E m p t y O b j e c t A l l ( { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y O b j e c t A l l ( { 
                     a :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y O b j e c t A l l ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y O b j e c t A l l ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y O b j e c t A l l ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y O b j e c t A l l ( ' a b c ' ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y O b j e c t A l l ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y O b j e c t A l l ( [ 1 2 3 ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s E m p t y A r r a y   =   f u n c t i o n   t e s t _ i s E m p t y A r r a y ( )   { 
             i t ( ' t e s t _ i s E m p t y A r r a y ' ,   f u n c t i o n   ( )   { 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y A r r a y A l l ( { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y A r r a y A l l ( { 
                     a :   1 
                 } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y A r r a y A l l ( n u l l ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y A r r a y A l l ( u n d e f i n e d ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y A r r a y A l l ( 1 2 3 ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y A r r a y A l l ( ' a b c ' ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s E m p t y A r r a y A l l ( [ ] ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s E m p t y A r r a y A l l ( [ 1 2 3 ] ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s S y m b o l   =   f u n c t i o n   t e s t _ i s S y m b o l ( )   { 
             i t ( ' t e s t _ i s S y m b o l ' ,   f u n c t i o n   ( )   { 
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
                 c h e c k E q u a l ( f a l s e ,   i s S y m b o l A l l ( 1 ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S y m b o l A l l ( S y m b o l ( ) ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s M a p   =   f u n c t i o n   t e s t _ i s M a p ( )   { 
             i t ( ' t e s t _ i s M a p ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 c h e c k E q u a l ( f a l s e ,   i s M a p A l l ( { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s W e a k M a p A l l ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s M a p A l l ( n e w   M a p ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s W e a k M a p A l l ( n e w   M a p ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s M a p A l l ( n e w   W e a k M a p ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s W e a k M a p A l l ( n e w   W e a k M a p ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t A l l ( { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t A l l ( n e w   M a p ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t A l l ( n e w   W e a k M a p ( ) ) ) ; 
             } ) ; 
         } ; 
 
         v a r   t e s t _ i s S e t   =   f u n c t i o n   t e s t _ i s S e t ( )   { 
             i t ( ' t e s t _ i s S e t ' ,   f u n c t i o n   ( )   { 
                 i f   ( p a r t s . p l a t f o r m . i s W i n d o w s S c r i p t H o s t ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 i f   ( p a r t s . p l a t f o r m . i s G a s R h i n o ( ) )   { 
                     r e t u r n ; 
                 } 
 
                 c h e c k E q u a l ( f a l s e ,   i s S e t A l l ( { } ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s S e t A l l ( n e w   S e t ( ) ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s W e a k S e t A l l ( { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s W e a k S e t A l l ( n e w   S e t ( ) ) ) ; 
                 c h e c k E q u a l ( t r u e ,   i s O b j e c t A l l ( { } ) ) ; 
                 c h e c k E q u a l ( f a l s e ,   i s O b j e c t A l l ( n e w   S e t ( ) ) ) ; 
 
                 i f   ( ! p a r t s . p l a t f o r m . i s I n t e r n e t E x p l o r e r ( ) )   { 
                     / /   I E 1 1   n o   e x i s t   W e a k S e t 
                     c h e c k E q u a l ( f a l s e ,   i s S e t A l l ( n e w   W e a k S e t ( ) ) ) ; 
                     c h e c k E q u a l ( t r u e ,   i s W e a k S e t A l l ( n e w   W e a k S e t ( ) ) ) ; 
                     c h e c k E q u a l ( f a l s e ,   i s O b j e c t A l l ( n e w   W e a k S e t ( ) ) ) ; 
                 } 
             } ) ; 
         } ; 
 
         t e s t _ c h e c k T y p e ( ) ; 
         t e s t _ t y p e N a m e ( ) ; 
         t e s t _ i s O b j e c t L i k e 2 ( ) ; 
         t e s t _ i s P r i m i t i v e T y p e ( ) ; 
         t e s t _ i s R e f e r e n c e T y p e ( ) ; 
         t e s t _ i s U n d e f i n e d A l l ( ) ; 
         t e s t _ i s N u l l ( ) ; 
         t e s t _ i s B o o l e a n ( ) ; 
         t e s t _ i s N u m b e r ( ) ; 
         t e s t _ i s I n t e g e r ( ) ; 
         t e s t _ i s S t r i n g ( ) ; 
         t e s t _ i s F u n c t i o n ( ) ; 
         t e s t _ d i f f e r e n t _ o b j e c t N o r m a l _ o b j e c t F r o m N u l l ( ) ; 
         t e s t _ i s O b j e c t ( ) ; 
         t e s t _ i s O b j e c t N o r m a l ( ) ; 
         t e s t _ i s O b j e c t F r o m N u l l ( ) ; 
         t e s t _ i s O b j e c t L i k e 1 ( ) ; 
         t e s t _ i s M o d u l e ( ) ; 
         t e s t _ i s A r r a y ( ) ; 
         t e s t _ A r r a y i s A r r a y ( ) ; 
         t e s t _ i s A r r a y S e r i e s ( ) ; 
         t e s t _ i s D a t e ( ) ; 
         t e s t _ i s E x c e c t i o n ( ) ; 
         t e s t _ i s E m p t y O b j e c t ( ) ; 
         t e s t _ i s E m p t y A r r a y ( ) ; 
         t e s t _ i s S y m b o l ( ) ; 
         t e s t _ i s M a p ( ) ; 
         t e s t _ i s S e t ( ) ; 
     } ) ; 
 } ; 
 
 e x p o r t s . t e s t _ e x e c u t e _ t y p e   =   t e s t _ e x e c u t e _ t y p e ; 
 v a r   _ d e f a u l t   =   { 
     t e s t _ e x e c u t e _ t y p e :   t e s t _ e x e c u t e _ t y p e 
 } ; 
 e x p o r t s [ " d e f a u l t " ]   =   _ d e f a u l t ; 
 
 / * * * /   } ) 
 / * * * * * * /   ] ) ; 
 } ) ; 