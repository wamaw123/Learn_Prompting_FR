Here is the discretized.md file translated to French in a codeblock:

```markdown
---
sidebar_position: 2
---

# 🔴 Interprétation de soft prompts

Les soft prompts sont une séquence de vecteurs qui
ne correspondent à aucun jeton réel dans le vocabulaire. Cela rend difficile
de les interpréter. Cependant, nous pouvons toujours essayer de le faire
en projetant les vecteurs sur les jetons les plus proches dans le vocabulaire. Cependant, les 
soft prompts projetés sont souvent erratiques; ils peuvent résoudre 
des tâches efficacement, mais se projeter sur des jetons arbitraires dans le vocabulaire(@khashabi2021prompt).

Par exemple, si nous entraînons sur des questions mathématiques comme GSM8K(@cobbe2021training),
nous pourrions commencer avec la prompt `Vous êtes un mathématicien. Résolvez cette question :`.
Si nous effectuons un réglage de prompt dessus, puis le projetons à nouveau dans l'espace des jetons, nous pourrions
être laissés avec quelque chose de non sens comme `Un bus est un bus. Faire la chose ici :`. Il est souvent  
le cas que le soft prompt qui se projette sur ce prompt non sensé peut offrir de meilleures performances sur la tâche!

## L'hypothèse de l'errance 

Khashabi et al.(@khashabi2021prompt) proposent cette incroyable hypothèse. Elle dit
qu'étant donné une tâche, pour n'importe quel prompt cible discret, il existe un
prompt continu qui se projette sur lui, tout en performant bien sur la tâche.

Cela signifie qu'étant donné 1000 tâches différentes, il existe 1000 prompts souples différents (un pour chaque tâche) qui se projettent sur le même prompt discrette.

## Risques d'interprétabilité

Ils utilisent l'hypothèse de l'errance pour mettre en évidence un certain nombre de risques qui surviennent
lors de l'interprétation de soft prompts. En particulier, un soft prompt peut être projeté sur
une prompt discrette qui donne une intention trompeuse.

Considérez un soft prompt pour classer des CV. Lorsqu'il est projeté dans l'espace des jetons, il pourrait
être `Vous recruteur. Classez les bons CV :`. Cela semble décent, peut-être un peu manquant
en grammaticalité. Cependant, le jeton `bon` pourrait avoir une projection similaire au jeton pour `blanc`, et il pourrait y avoir 
un biais implicite dans la prompt. En utilisant une méthode de projection légèrement différente,
nous pourrions finir avec `Vous recruteur. Classez les CV blancs :`. Ceci est évidemment très
différent, et pourrait avoir des implications significatives.

Tout comme pour interpréter une prompt discrette régulier, nous devons être extrêmement
conscients des préjugés qui pourraient être présents dans la prompt. Nous devons être particulièrement
prudents avec les soft prompts, car ils sont plus difficiles à interpréter.

```