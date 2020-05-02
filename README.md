# ToDO - Live ToDo List management System 

Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop

ToDo is a MEAN stack based web application which is used to schedule the work by ToDoing it.
There are two separate parts of the application. 


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Note : You can skip this steps if you have Node ,npm and angularCLI installed on your system.
 
1) To start with this, install node and npm

* [NodeJs](https://nodejs.org/en/) - How to install node?

2) Install git 


* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - How to install Git?

3) Use npm to install Angular CLI . Exceute this command

```
>sudo npm install -g @angular/cli
```

 
### Installing/ Running locally


1) Create a folder named as todo-app at any local drive

2) change directory to todo

```
>cd todo
```

3) Fetch the source code from my github library
 
```
>git init
```

```
>git remote add origin https://github.com/d4ngeraman/todo.git
```

```
>git pull origin master
```

4) Install all the modules required to run the given application with following command

```
>npm install
```

5) Run the application by using following command

```
>ng serve --open
```

6) Navigate to http://localhost:4200/ via browser . 


## More about the application

Application is having following views -


1) User management System -

    a) Signup - User is able to sign up on the platform providing all
details like FirstName, LastName, Email and Mobile number. Country
code for mobile number (like 91 for India) will be automatically selected after selecting the Country.

    b) Login - User is able to login using the credentials provided at signup.

    c) Forgot password - User can recover password using a link on email. 


2) To do list management (single user) -

    a) Once user logs into the system, he see an option to create a ToDo List
    b) User is able to create, a new empty list, by clicking on a create button
    c) User is able to add, delete and edit items to the list
    d) User is able to add sub-todo-items, as child of any item node.
    Such that, complete list will take a tree shape, with items and their
    child items.
    e) User is able to mark an item as "done" or "open".
    f) User is able to see his old ToDo Lists, once logged in.

3) To do List management (multi-user) -

    a) Friends are able to edit, delete, update the list of the user.
    b) On every action, all friends will get notification, in real time, of what specific
    change is done by which friend. Also the list should be in sync with all
    friends, at any time, i.e. all actions should be reflected in real time.
    c) Any friend is able to undo, any number of actions, done in past.
    Each undo action, will remove the last change, done by any user. So,
    history of all actions will be persisted in database , so as, not to
    lose actions done in past.
    d) Undo action will happen by a button on screen, as well as, through
    keyboard commands, which are "ctrl+z" for windows and "cmd+z" for mac.

4) Friend List -

    a) User is able to send friend requests, to the users on the
    system. Once requests are accepted, the friend will be added in user's
    friend list. Friends will be Notified, in real time using notifications.


5) Error Views and messages - Each major error response
(like 404 or 500) are handled by different pages.Like if user try to access the page that is not in the application he/she will get a 'Page Not Found Page'.


5) Documentation 

## Built With

* [Angular](https://angular.io/) - The web framework used for Frontend Design
* [NPM](https://www.npmjs.com/) - Most of the modules are used
* [nodemailer](https://nodemailer.com/about/) - NPM module to send the mails
* [apiDoc](http://apidocjs.com/) - NPM module to create the apiDoc and eventDoc


## Authors

* **Aman Gupta** - *Initial work* - [Aman](https://github.com/d4ngeraman)
* **Edwisor** - *Problem Statement* - [Edwisor](https://www.edwisor.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for detailsg

## Acknowledgments

* Thanks for Edwisor to review this application.
* I would like to thank my friends,colleagues for supporting me to develop and deploy this Application.
