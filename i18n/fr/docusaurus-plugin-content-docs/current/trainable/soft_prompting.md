---
sidebar_position: 1 
---

# 🔴 Soft Prompts

Le réglage de prompt (@lester2021power), une alternative au réglage fin du modèle (@khashabi2021prompt), fige les poids du modèle et met à jour les paramètres d'une prompt. La prompt résultante est une « soft prompt ».


import Image from '@site/docs/assets/trainable/prompt_tuning.webp';

<div style={{textAlign: 'center'}}>
  <img src={Image} style={{width: "500px"}}/>
</div>

<div style={{textAlign: 'center'}}>
Réglage du modèle vs réglage de prompt (Lester et al.)
</div>

L'image ci-dessus contraste le réglage du modèle avec le réglage de la prompt.
Dans le réglage du modèle, vous réglez finement le même modèle sur différentes tâches. Cela vous donne
quelques modèles différents, avec lesquels vous ne pouvez pas nécessairement traiter des entrées par lots facilement.

D'un autre côté, le réglage de prompt vous permet d'utiliser le même modèle pour toutes les tâches. Vous
n'avez qu'à ajouter les prompts appropriées au moment de l'inférence, ce qui facilite le traitement par lots sur
différentes tâches. C'est à peu près le même avantage qu'une prompt régulière
a. De plus, les soft prompts formées pour un seul modèle sur
plusieurs tâches auront souvent la même longueur de jeton.

## Comment ça marche

Pour comprendre la logique de base derrière le soft prompting, réfléchissons à la façon dont fonctionne **l'inférence de modèle**
sur une prompt donnée : `Quel est 2+2 ?`. 

1) Il pourrait être tokenisé comme `Quel, est, 2, +, 2, ?`.

2) Ensuite, chaque jeton sera converti en un vecteur de valeurs.

3) Ces vecteurs de valeurs peuvent être considérés comme des paramètres de modèle. Le modèle peut être encore
entraîné, en ajustant uniquement les poids de ces prompts.

Notez qu'aussitôt que nous commençons à mettre à jour ces poids, les vecteurs des jetons 
ne correspondent plus aux embeddings réels du vocabulaire.

# Résultats

Le réglage de prompt fonctionne mieux avec des modèles plus grands. Les modèles plus grands nécessitent également moins
de jetons de soft prompt. Quoi qu'il en soit, plus de 20 jetons ne donnent pas de gains de performance significatifs.