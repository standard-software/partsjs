( f u n c t i o n   w e b p a c k U n i v e r s a l M o d u l e D e f i n i t i o n ( r o o t ,   f a c t o r y )   { 
 	 i f ( t y p e o f   e x p o r t s   = = =   ' o b j e c t '   & &   t y p e o f   m o d u l e   = = =   ' o b j e c t ' ) 
 	 	 m o d u l e . e x p o r t s   =   f a c t o r y ( ) ; 
 	 e l s e   i f ( t y p e o f   d e f i n e   = = =   ' f u n c t i o n '   & &   d e f i n e . a m d ) 
 	 	 d e f i n e ( [ ] ,   f a c t o r y ) ; 
 	 e l s e   i f ( t y p e o f   e x p o r t s   = = =   ' o b j e c t ' ) 
 	 	 e x p o r t s [ " p a r t s " ]   =   f a c t o r y ( ) ; 
 	 e l s e 
 	 	 r o o t [ " p a r t s " ]   =   f a c t o r y ( ) ; 
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
 / * * * * * * /   	 v a r   j s o n p A r r a y   =   t h i s [ " w e b p a c k J s o n p p a r t s " ]   =   t h i s [ " w e b p a c k J s o n p p a r t s " ]   | |   [ ] ; 
 / * * * * * * /   	 v a r   o l d J s o n p F u n c t i o n   =   j s o n p A r r a y . p u s h . b i n d ( j s o n p A r r a y ) ; 
 / * * * * * * /   	 j s o n p A r r a y . p u s h   =   w e b p a c k J s o n p C a l l b a c k ; 
 / * * * * * * /   	 j s o n p A r r a y   =   j s o n p A r r a y . s l i c e ( ) ; 
 / * * * * * * /   	 f o r ( v a r   i   =   0 ;   i   <   j s o n p A r r a y . l e n g t h ;   i + + )   w e b p a c k J s o n p C a l l b a c k ( j s o n p A r r a y [ i ] ) ; 
 / * * * * * * /   	 v a r   p a r e n t J s o n p F u n c t i o n   =   o l d J s o n p F u n c t i o n ; 
 / * * * * * * / 
 / * * * * * * / 
 / * * * * * * /   	 / /   a d d   e n t r y   m o d u l e   t o   d e f e r r e d   l i s t 
 / * * * * * * /   	 d e f e r r e d M o d u l e s . p u s h ( [ 0 , 2 , 1 , 3 ] ) ; 
 / * * * * * * /   	 / /   r u n   d e f e r r e d   m o d u l e s   w h e n   r e a d y 
 / * * * * * * /   	 r e t u r n   c h e c k D e f e r r e d M o d u l e s ( ) ; 
 / * * * * * * /   } ) 
 / * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * / 
 / * * * * * * /   ( { 
 
 / * * * /   0 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   { 
 
 m o d u l e . e x p o r t s   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 1 ) ; 
 
 
 / * * * /   } ) , 
 
 / * * * /   8 : 
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s )   { 
 
 / /   s h i m   f o r   u s i n g   p r o c e s s   i n   b r o w s e r 
 v a r   p r o c e s s   =   m o d u l e . e x p o r t s   =   { } ; 
 
 / /   c a c h e d   f r o m   w h a t e v e r   g l o b a l   i s   p r e s e n t   s o   t h a t   t e s t   r u n n e r s   t h a t   s t u b   i t 
 / /   d o n ' t   b r e a k   t h i n g s .     B u t   w e   n e e d   t o   w r a p   i t   i n   a   t r y   c a t c h   i n   c a s e   i t   i s 
 / /   w r a p p e d   i n   s t r i c t   m o d e   c o d e   w h i c h   d o e s n ' t   d e f i n e   a n y   g l o b a l s .     I t ' s   i n s i d e   a 
 / /   f u n c t i o n   b e c a u s e   t r y / c a t c h e s   d e o p t i m i z e   i n   c e r t a i n   e n g i n e s . 
 
 v a r   c a c h e d S e t T i m e o u t ; 
 v a r   c a c h e d C l e a r T i m e o u t ; 
 
 f u n c t i o n   d e f a u l t S e t T i m o u t ( )   { 
         t h r o w   n e w   E r r o r ( ' s e t T i m e o u t   h a s   n o t   b e e n   d e f i n e d ' ) ; 
 } 
 f u n c t i o n   d e f a u l t C l e a r T i m e o u t   ( )   { 
         t h r o w   n e w   E r r o r ( ' c l e a r T i m e o u t   h a s   n o t   b e e n   d e f i n e d ' ) ; 
 } 
 ( f u n c t i o n   ( )   { 
         t r y   { 
                 i f   ( t y p e o f   s e t T i m e o u t   = = =   ' f u n c t i o n ' )   { 
                         c a c h e d S e t T i m e o u t   =   s e t T i m e o u t ; 
                 }   e l s e   { 
                         c a c h e d S e t T i m e o u t   =   d e f a u l t S e t T i m o u t ; 
                 } 
         }   c a t c h   ( e )   { 
                 c a c h e d S e t T i m e o u t   =   d e f a u l t S e t T i m o u t ; 
         } 
         t r y   { 
                 i f   ( t y p e o f   c l e a r T i m e o u t   = = =   ' f u n c t i o n ' )   { 
                         c a c h e d C l e a r T i m e o u t   =   c l e a r T i m e o u t ; 
                 }   e l s e   { 
                         c a c h e d C l e a r T i m e o u t   =   d e f a u l t C l e a r T i m e o u t ; 
                 } 
         }   c a t c h   ( e )   { 
                 c a c h e d C l e a r T i m e o u t   =   d e f a u l t C l e a r T i m e o u t ; 
         } 
 }   ( ) ) 
 f u n c t i o n   r u n T i m e o u t ( f u n )   { 
         i f   ( c a c h e d S e t T i m e o u t   = = =   s e t T i m e o u t )   { 
                 / / n o r m a l   e n v i r o m e n t s   i n   s a n e   s i t u a t i o n s 
                 r e t u r n   s e t T i m e o u t ( f u n ,   0 ) ; 
         } 
         / /   i f   s e t T i m e o u t   w a s n ' t   a v a i l a b l e   b u t   w a s   l a t t e r   d e f i n e d 
         i f   ( ( c a c h e d S e t T i m e o u t   = = =   d e f a u l t S e t T i m o u t   | |   ! c a c h e d S e t T i m e o u t )   & &   s e t T i m e o u t )   { 
                 c a c h e d S e t T i m e o u t   =   s e t T i m e o u t ; 
                 r e t u r n   s e t T i m e o u t ( f u n ,   0 ) ; 
         } 
         t r y   { 
                 / /   w h e n   w h e n   s o m e b o d y   h a s   s c r e w e d   w i t h   s e t T i m e o u t   b u t   n o   I . E .   m a d d n e s s 
                 r e t u r n   c a c h e d S e t T i m e o u t ( f u n ,   0 ) ; 
         }   c a t c h ( e ) { 
                 t r y   { 
                         / /   W h e n   w e   a r e   i n   I . E .   b u t   t h e   s c r i p t   h a s   b e e n   e v a l e d   s o   I . E .   d o e s n ' t   t r u s t   t h e   g l o b a l   o b j e c t   w h e n   c a l l e d   n o r m a l l y 
                         r e t u r n   c a c h e d S e t T i m e o u t . c a l l ( n u l l ,   f u n ,   0 ) ; 
                 }   c a t c h ( e ) { 
                         / /   s a m e   a s   a b o v e   b u t   w h e n   i t ' s   a   v e r s i o n   o f   I . E .   t h a t   m u s t   h a v e   t h e   g l o b a l   o b j e c t   f o r   ' t h i s ' ,   h o p f u l l y   o u r   c o n t e x t   c o r r e c t   o t h e r w i s e   i t   w i l l   t h r o w   a   g l o b a l   e r r o r 
                         r e t u r n   c a c h e d S e t T i m e o u t . c a l l ( t h i s ,   f u n ,   0 ) ; 
                 } 
         } 
 
 
 } 
 f u n c t i o n   r u n C l e a r T i m e o u t ( m a r k e r )   { 
         i f   ( c a c h e d C l e a r T i m e o u t   = = =   c l e a r T i m e o u t )   { 
                 / / n o r m a l   e n v i r o m e n t s   i n   s a n e   s i t u a t i o n s 
                 r e t u r n   c l e a r T i m e o u t ( m a r k e r ) ; 
         } 
         / /   i f   c l e a r T i m e o u t   w a s n ' t   a v a i l a b l e   b u t   w a s   l a t t e r   d e f i n e d 
         i f   ( ( c a c h e d C l e a r T i m e o u t   = = =   d e f a u l t C l e a r T i m e o u t   | |   ! c a c h e d C l e a r T i m e o u t )   & &   c l e a r T i m e o u t )   { 
                 c a c h e d C l e a r T i m e o u t   =   c l e a r T i m e o u t ; 
                 r e t u r n   c l e a r T i m e o u t ( m a r k e r ) ; 
         } 
         t r y   { 
                 / /   w h e n   w h e n   s o m e b o d y   h a s   s c r e w e d   w i t h   s e t T i m e o u t   b u t   n o   I . E .   m a d d n e s s 
                 r e t u r n   c a c h e d C l e a r T i m e o u t ( m a r k e r ) ; 
         }   c a t c h   ( e ) { 
                 t r y   { 
                         / /   W h e n   w e   a r e   i n   I . E .   b u t   t h e   s c r i p t   h a s   b e e n   e v a l e d   s o   I . E .   d o e s n ' t     t r u s t   t h e   g l o b a l   o b j e c t   w h e n   c a l l e d   n o r m a l l y 
                         r e t u r n   c a c h e d C l e a r T i m e o u t . c a l l ( n u l l ,   m a r k e r ) ; 
                 }   c a t c h   ( e ) { 
                         / /   s a m e   a s   a b o v e   b u t   w h e n   i t ' s   a   v e r s i o n   o f   I . E .   t h a t   m u s t   h a v e   t h e   g l o b a l   o b j e c t   f o r   ' t h i s ' ,   h o p f u l l y   o u r   c o n t e x t   c o r r e c t   o t h e r w i s e   i t   w i l l   t h r o w   a   g l o b a l   e r r o r . 
                         / /   S o m e   v e r s i o n s   o f   I . E .   h a v e   d i f f e r e n t   r u l e s   f o r   c l e a r T i m e o u t   v s   s e t T i m e o u t 
                         r e t u r n   c a c h e d C l e a r T i m e o u t . c a l l ( t h i s ,   m a r k e r ) ; 
                 } 
         } 
 
 
 
 } 
 v a r   q u e u e   =   [ ] ; 
 v a r   d r a i n i n g   =   f a l s e ; 
 v a r   c u r r e n t Q u e u e ; 
 v a r   q u e u e I n d e x   =   - 1 ; 
 
 f u n c t i o n   c l e a n U p N e x t T i c k ( )   { 
         i f   ( ! d r a i n i n g   | |   ! c u r r e n t Q u e u e )   { 
                 r e t u r n ; 
         } 
         d r a i n i n g   =   f a l s e ; 
         i f   ( c u r r e n t Q u e u e . l e n g t h )   { 
                 q u e u e   =   c u r r e n t Q u e u e . c o n c a t ( q u e u e ) ; 
         }   e l s e   { 
                 q u e u e I n d e x   =   - 1 ; 
         } 
         i f   ( q u e u e . l e n g t h )   { 
                 d r a i n Q u e u e ( ) ; 
         } 
 } 
 
 f u n c t i o n   d r a i n Q u e u e ( )   { 
         i f   ( d r a i n i n g )   { 
                 r e t u r n ; 
         } 
         v a r   t i m e o u t   =   r u n T i m e o u t ( c l e a n U p N e x t T i c k ) ; 
         d r a i n i n g   =   t r u e ; 
 
         v a r   l e n   =   q u e u e . l e n g t h ; 
         w h i l e ( l e n )   { 
                 c u r r e n t Q u e u e   =   q u e u e ; 
                 q u e u e   =   [ ] ; 
                 w h i l e   ( + + q u e u e I n d e x   <   l e n )   { 
                         i f   ( c u r r e n t Q u e u e )   { 
                                 c u r r e n t Q u e u e [ q u e u e I n d e x ] . r u n ( ) ; 
                         } 
                 } 
                 q u e u e I n d e x   =   - 1 ; 
                 l e n   =   q u e u e . l e n g t h ; 
         } 
         c u r r e n t Q u e u e   =   n u l l ; 
         d r a i n i n g   =   f a l s e ; 
         r u n C l e a r T i m e o u t ( t i m e o u t ) ; 
 } 
 
 p r o c e s s . n e x t T i c k   =   f u n c t i o n   ( f u n )   { 
         v a r   a r g s   =   n e w   A r r a y ( a r g u m e n t s . l e n g t h   -   1 ) ; 
         i f   ( a r g u m e n t s . l e n g t h   >   1 )   { 
                 f o r   ( v a r   i   =   1 ;   i   <   a r g u m e n t s . l e n g t h ;   i + + )   { 
                         a r g s [ i   -   1 ]   =   a r g u m e n t s [ i ] ; 
                 } 
         } 
         q u e u e . p u s h ( n e w   I t e m ( f u n ,   a r g s ) ) ; 
         i f   ( q u e u e . l e n g t h   = = =   1   & &   ! d r a i n i n g )   { 
                 r u n T i m e o u t ( d r a i n Q u e u e ) ; 
         } 
 } ; 
 
 / /   v 8   l i k e s   p r e d i c t i b l e   o b j e c t s 
 f u n c t i o n   I t e m ( f u n ,   a r r a y )   { 
         t h i s . f u n   =   f u n ; 
         t h i s . a r r a y   =   a r r a y ; 
 } 
 I t e m . p r o t o t y p e . r u n   =   f u n c t i o n   ( )   { 
         t h i s . f u n . a p p l y ( n u l l ,   t h i s . a r r a y ) ; 
 } ; 
 p r o c e s s . t i t l e   =   ' b r o w s e r ' ; 
 p r o c e s s . b r o w s e r   =   t r u e ; 
 p r o c e s s . e n v   =   { } ; 
 p r o c e s s . a r g v   =   [ ] ; 
 p r o c e s s . v e r s i o n   =   ' ' ;   / /   e m p t y   s t r i n g   t o   a v o i d   r e g e x p   i s s u e s 
 p r o c e s s . v e r s i o n s   =   { } ; 
 
 f u n c t i o n   n o o p ( )   { } 
 
 p r o c e s s . o n   =   n o o p ; 
 p r o c e s s . a d d L i s t e n e r   =   n o o p ; 
 p r o c e s s . o n c e   =   n o o p ; 
 p r o c e s s . o f f   =   n o o p ; 
 p r o c e s s . r e m o v e L i s t e n e r   =   n o o p ; 
 p r o c e s s . r e m o v e A l l L i s t e n e r s   =   n o o p ; 
 p r o c e s s . e m i t   =   n o o p ; 
 p r o c e s s . p r e p e n d L i s t e n e r   =   n o o p ; 
 p r o c e s s . p r e p e n d O n c e L i s t e n e r   =   n o o p ; 
 
 p r o c e s s . l i s t e n e r s   =   f u n c t i o n   ( n a m e )   {   r e t u r n   [ ]   } 
 
 p r o c e s s . b i n d i n g   =   f u n c t i o n   ( n a m e )   { 
         t h r o w   n e w   E r r o r ( ' p r o c e s s . b i n d i n g   i s   n o t   s u p p o r t e d ' ) ; 
 } ; 
 
 p r o c e s s . c w d   =   f u n c t i o n   ( )   {   r e t u r n   ' / '   } ; 
 p r o c e s s . c h d i r   =   f u n c t i o n   ( d i r )   { 
         t h r o w   n e w   E r r o r ( ' p r o c e s s . c h d i r   i s   n o t   s u p p o r t e d ' ) ; 
 } ; 
 p r o c e s s . u m a s k   =   f u n c t i o n ( )   {   r e t u r n   0 ;   } ; 
 
 
 / * * * /   } ) 
 
 / * * * * * * /   } ) ; 
 } ) ; 