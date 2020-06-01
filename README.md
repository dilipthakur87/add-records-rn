# Add Records in local storage in React Native with Continuous Integration in Gitlab

### Features!

  - Add multiple user records ( Name, Country, Phone Brand and Phone Number)
  - Store the records locally and list the records
  - Search the records on the basis of country or phone brand
  - Integrated CI ( Continuous Integration ) using Gitlab

### Installation

The app was developed with [Node.js](https://nodejs.org/) v12+ .

Clone the repo and run the server

```bash 
git clone https://gitlab.com/dileepthakur87/add-records-rn.git
cd add-records-rn
npm install
npm start
```

After this you can scan the qr to run the app on you phone. Make sure you have installed expo client on your phone.



### Continuous Integration with Gitlab

- Add your public key to gitlab. If you haven't one, you can generate public key using following command.
```sh
ssh-keygen -t rsa -b 4096 -C "your_email_here"
```

- Add the [.gitlab-ci.yml](https://gitlab.com/dileepthakur87/add-records-rn/-/blob/master/.gitlab-ci.yml) file in the root directory of your app. 
 ![aa](blob/sample_yml.png) 


### Todos

 - Write MORE Tests
 - Add CD

License
----

**Free Software, Hell Yeah!**