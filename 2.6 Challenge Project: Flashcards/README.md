Challenge Project: Flashcards
=======

Project Goals
-------
In this project, you will practice using Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app. Users will be able to create their own topics, quizzes for those topics, and flashcards for those quizzes. Users will also be able to interact with their quizzes by flipping flashcards over.

The following task descriptions will walk through implementing the app’s Redux logic starting with topics, then quizzes, and then cards. If you would like to implement it in a different order feel free to do what is comfortable for you.

Project Requirements
--------
At a high level, your application will be able to handle the following URL routes, each with their own functionality:

On the '/topics/new' page:

 - Users can create topics
 
On the '/topics' page:

 - Users can view all topics
 - Users can click on an individual topic and be redirected to the page for that topic
 
On the /topics/:topicId page:

 - Users can view an individual topic and all quizzes for that topic
 - Users can click on a quiz associated with a topic and be redirected to that quiz’s page
 
On the 'quizzes/new' page:

 - Users can create quizzes that are associated with topics and contain lists of flashcards
 - Users can add and remove card fields in the new quiz form
 
On the '/quizzes' page:

 - Users can view all quizzes
 - Users can click on an individual quiz and be redirected to that quiz’s page
 
On the '/quizzes/:quizId' page:

 - Users can view an individual quiz and flip cards over
