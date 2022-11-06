# Bamboo 
This repository holds the source code for the Bamboo API. The API is a RESTful API that is used to interact with the Bamboo database. The API is written in Python using the Flask framework. The API is deployed on a Digital Ocean droplet. The API is currently in development and is not yet ready for production use. 

## What is Bamboo?
The usage of smartphones has been linked to mental heath problems a long time ago. Particularly, research has shown that the more the youth uses their smartphones, the more they are at risk of mental distress, self-injuries and suicide. And that is where our app comes into play. We aim to develop an app that would keep track of the usage of different apps and correlate it to the emotional state of the user. Based on this data we could inform the users about their "ideal app-usage" which would aim at maximising their very own wellbeing.

Of course, we know everyone is different. So, we would have an in-app personalisation features allowing the users the set their goal - whether they are looking to find out which apps contribute to their anxiety, make them feel depressed, or make them dislike their bodies, we have them covered.

Last but not least, our app would be easily accessible and could be recommended to vulnerable young people in order to help them manage their app use wisely and eliminate the harmful effects the use of some apps can have. We believe this would be especially useful in the time people are waiting to access therapists or even when they are saving up to be able to afford therapy sessions - because one never knows, maybe simply finding out that the way we use our phone is what stops us from feeling good.

## How would we do this?
### MVP
We would develop a responsive, mobile-first designed web app simulating our mobile app written in Svelte. Very basic Node.js backend using Adonis.js deployed to GCP and PSQL db to Aiwan.
### Final product
* Native Android application with Kotlin and JetPack Compose.
* Native iOS application with Swift.
* A machine learning pipeline. Production models are deployed to a set of AWS/GCP servers with load balancing running on JS Node.js and PSQL. A set of (re)training servers living on AWS/GCP running on Python Flask and PSQL.
* A serverless backend living on AWS/GCP in Node.js and PSQL database on AWS Aurora.



 
