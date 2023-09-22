---
sidebar_position: 200000
---

# 🔥 Sujets brûlants 

## GPT-4

GPT-4(@openai2023gpt4) est le prochain LLM (grand modèle de langage) dans la série GPT d'OpenAI. Il améliore GPT-3 de plusieurs façons, notamment une meilleure capacité de raisonnement et une plus grande longueur de contexte. Actuellement, nous ne le couvrons pas directement dans ce cours puisque 1) tout le monde n'y a pas encore accès et 2) la plupart des stratégies d'amorçage que nous couvrons dans ce site Web fonctionnent également pour GPT-4. Nous vous encourageons à lire la [page OpenAI](https://openai.com/research/gpt-4) sur GPT-4 pour plus de détails.

## Agents

Les agents sont des systèmes d'IA qui peuvent prendre des actions et effectuer des tâches, ce qui implique souvent l'utilisation d'outils.

### Auto-GPT
Imaginez avoir un assistant personnel qui peut faire tout ce que vous voulez avec la puissance de l'IA. Auto-GPT est cela, une application open source qui utilise le GPT-4 d'OpenAI pour effectuer des tâches autonomes (@richards2023). Pour cela, il décompose un objectif donné en sous-tâches, puis utilise Internet et d'autres outils pour accomplir ces sous-tâches. Par exemple, si vous demandez à Auto-GPT "d'écrire un article de blog sur les dernières nouvelles en intelligence artificielle", il trouvera d'abord les derniers articles de presse sur l'intelligence artificielle, les lira, puis rédigera un article de blog sur ce qu'il a appris. Pour utiliser Auto-GPT, vous devez suivre les instructions d'installation [ici](https://significant-gravitas.github.io/Auto-GPT/setup/). Une fois Auto-GPT installé, vous pouvez commencer à l'utiliser en tapant un objectif dans la barre d'invite. Auto-GPT essaiera alors d'atteindre cet objectif.

### Baby AGI
BabyAGI est un système de gestion des tâches alimenté par l'IA créé par Yohei Nakajima (@nakajima2023). Le système utilise les API OpenAI et Pinecone pour créer et exécuter des tâches en fonction de la priorité et de la difficulté des tâches précédentes et d'un objectif prédéfini. BabyAGI fonctionne en exécutant une boucle qui effectue les étapes suivantes :
1. Récupère la première tâche de la liste des tâches. 
2. Envoyez la tâche à l'agent d'exécution, qui utilise l'API OpenAI pour effectuer la tâche en fonction du contexte.
3. Enrichit le résultat et le stocke dans Chroma.
4. Crée de nouvelles tâches et repriorise la liste des tâches en fonction de l'objectif et du résultat de la tâche précédente.

### AgentGPT
L'[AgentGPT](https://agentgpt.reworkd.ai/) de Reworkd est une plateforme qui permet aux utilisateurs de concevoir et de déployer des agents IA autonomes, allant du service client à l'analyse de données (@reworkd2023). Il forme un agent IA sur une tâche distincte, puis lui permet d'accomplir un objectif prédéterminé. Les agents peuvent exploiter diverses API pour accéder à des informations du monde réel et les traiter, et ils peuvent également converser avec des humains et d'autres agents. Pour utiliser AgentGPT, les utilisateurs doivent s'inscrire et sélectionner un objectif pour leur agent. Ensuite, ils peuvent instruire leur agent en lui fournissant des données et des instructions.