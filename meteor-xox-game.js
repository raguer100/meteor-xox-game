Tasks = new Mongo.Collection("tasks"); // oyun oynanırken
redisCollection = new Meteor.RedisCollection("redis");

if (Meteor.isClient) {
  Template.newgame.helpers({
    visable: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {

        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
            ]}).newgame;
      } else if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) == undefined && Meteor.userId() != null) {
        return false;
      } else {
        return true;
      }
    }
  });
  Template.body.helpers({
    turn: function() {
      var database = Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]});
      if(database != undefined && database != null && database.player2 != null) {
        return 'Turn: ' + database.whoseTurn;
      } else if (database != undefined && database != null && database.player2 == null) {
        return 'Waiting Player 2...';
      }
    },
    state: function() {
      return redisCollection.get('' + Meteor.userId() + 'state');
    },
    gamelists : function () {
      var tasks = Tasks.find({
        $and: [{player2: null}, {player1: {$ne: Meteor.userId()}}]
      }).fetch();
      if(Meteor.userId() != null && redisCollection.get('' + Meteor.userId() + 'status') != 'inGame') {
        return _.map(tasks, function(key){return {name: key}});
      }
    },
    text1: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined) {
        return Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]}).text1;
        //return Tasks.findOne({$or: [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]}).text1;
      } else {
        return '?';
      }
    },
    text2: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined) {
        return Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]}).text2;
        //return Tasks.findOne({$or: [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]}).text1;
      } else {
        return '?';
      }
    },
    text3: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined) {
        return Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]}).text3;
        //return Tasks.findOne({$or: [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]}).text1;
      } else {
        return '?';
      }
    },
    text4: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined) {
        return Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]}).text4;
        //return Tasks.findOne({$or: [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]}).text1;
      } else {
        return '?';
      }
    },
    text5: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined) {
        return Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]}).text5;
        //return Tasks.findOne({$or: [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]}).text1;
      } else {
        return '?';
      }
    },
    text6: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined) {
        return Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]}).text6;
        //return Tasks.findOne({$or: [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]}).text1;
      } else {
        return '?';
      }
    },
    text7: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined) {
        return Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]}).text7;
        //return Tasks.findOne({$or: [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]}).text1;
      } else {
        return '?';
      }
    },
    text8: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined) {
        return Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]}).text8;
        //return Tasks.findOne({$or: [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]}).text1;
      } else {
        return '?';
      }
    },
    text9: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined) {
        return Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
        ]}).text9;
        //return Tasks.findOne({$or: [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]}).text1;
      } else {
        return '?';
      }
    },


    disabled1: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {
        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
            ]}).disabled1;
      } else {
        return true;
      }
    },
    disabled2: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {
        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
          ]}).disabled2;
      } else {
        return true;
      }
    },
    disabled3: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {
        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
          ]}).disabled3;
      } else {
        return true;
      }
    },
    disabled4: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {
        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
          ]}).disabled4;
      } else {
        return true;
      }
    },
    disabled5: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {
        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
          ]}).disabled5;
      } else {
        return true;
      }
    },
    disabled6: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {
        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
          ]}).disabled6;
      } else {
        return true;
      }
    },
    disabled7: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {
        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
          ]}).disabled7;
      } else {
        return true;
      }
    },
    disabled8: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {
        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
          ]}).disabled8;
      } else {
        return true;
      }
    },
    disabled9: function() {
      if(Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]}) != undefined && Meteor.userId() != null) {
        return Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
          ]}).disabled9;
      } else {
        return true;
      }
    }
  });

  Template.body.events({
    "click button": function(event) {
      var className = event.target.className;
      var id = event.target.id;
      var database = Tasks.findOne({$and: [
          {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
          {$or : [{status: 'created'}, {status: 'started'}]}
          ]});
      if(className != "new-game" && id != "join" && database.playerTurn == Meteor.userId() && database.player2 != null) {
        var turn = database.turn;
        var lastChar = className.substr(className.length - 1);
        var disabled = 'disabled' + lastChar;
        var obj = {};

        if(turn == 'X') {
          obj[className] = 'X';
          obj[disabled] = 'true';
          obj['turn'] = 'O';
          if(database.player1 == Meteor.userId()) {
            obj['playerTurn'] = database.player2;
            obj['whoseTurn'] = database.player2Address;
          } else{
            obj['playerTurn'] = database.player1;
            obj['whoseTurn'] = database.player1Address;
          }

          Tasks.update(database._id, {
            $set: obj
          });
        } else {
          obj[className] = 'O';
          obj[disabled] = 'true';
          obj['turn'] = 'X';
          if(database.player1 == Meteor.userId()) {
            obj['playerTurn'] = database.player2;
            obj['whoseTurn'] = database.player2Address;
          } else{
            obj['playerTurn'] = database.player1;
            obj['whoseTurn'] = database.player1Address;
          }

          Tasks.update(database._id, {
            $set: obj
          });
        }

        var updatedDatabase = Tasks.findOne({$and: [
            {$or : [{player1: Meteor.userId()}, {player2 : Meteor.userId()}]},
            {$or : [{status: 'created'}, {status: 'started'}]}
            ]});
        if((updatedDatabase.text1 == 'X' && updatedDatabase.text2 == 'X' && updatedDatabase.text3 == 'X')
         || (updatedDatabase.text1 == 'O' && updatedDatabase.text2 == 'O' && updatedDatabase.text3 == 'O')
         || (updatedDatabase.text4 == 'X' && updatedDatabase.text5 == 'X' && updatedDatabase.text6 == 'X')
         || (updatedDatabase.text4 == 'O' && updatedDatabase.text5 == 'O' && updatedDatabase.text6 == 'O')
         || (updatedDatabase.text7 == 'X' && updatedDatabase.text8 == 'X' && updatedDatabase.text9 == 'X')
         || (updatedDatabase.text7 == 'O' && updatedDatabase.text8 == 'O' && updatedDatabase.text9 == 'O')
         || (updatedDatabase.text1 == 'X' && updatedDatabase.text4 == 'X' && updatedDatabase.text7 == 'X')
         || (updatedDatabase.text1 == 'O' && updatedDatabase.text4 == 'O' && updatedDatabase.text7 == 'O')
         || (updatedDatabase.text2 == 'X' && updatedDatabase.text5 == 'X' && updatedDatabase.text8 == 'X')
         || (updatedDatabase.text2 == 'O' && updatedDatabase.text5 == 'O' && updatedDatabase.text8 == 'O')
         || (updatedDatabase.text3 == 'X' && updatedDatabase.text6 == 'X' && updatedDatabase.text9 == 'X')
         || (updatedDatabase.text3 == 'O' && updatedDatabase.text6 == 'O' && updatedDatabase.text9 == 'O')
         || (updatedDatabase.text1 == 'X' && updatedDatabase.text5 == 'X' && updatedDatabase.text9 == 'X')
         || (updatedDatabase.text1 == 'O' && updatedDatabase.text5 == 'O' && updatedDatabase.text9 == 'O')
         || (updatedDatabase.text3 == 'X' && updatedDatabase.text5 == 'X' && updatedDatabase.text7 == 'X')
         || (updatedDatabase.text3 == 'O' && updatedDatabase.text5 == 'O' && updatedDatabase.text7 == 'O')) {

           redisCollection.set('' + database.player1 + 'state', 'The winner is : ' + Meteor.user().emails[0].address);
           redisCollection.set('' + database.player2 + 'state', 'The winner is : ' + Meteor.user().emails[0].address);
           redisCollection.set('' + database.player1 + 'status', 'available');
           redisCollection.set('' + database.player2 + 'status', 'available');
           Tasks.update(database._id, {
             $set: {status: 'finished'}
           });
           //Tasks.remove(database._id);
        } else if(updatedDatabase.disabled1 && updatedDatabase.disabled2 && updatedDatabase.disabled3 &&
          updatedDatabase.disabled4 && updatedDatabase.disabled5 && updatedDatabase.disabled6 &&
          updatedDatabase.disabled7 && updatedDatabase.disabled8 && updatedDatabase.disabled9) {
          redisCollection.set('' + database.player1 + 'state', 'STALEMATE!');
          redisCollection.set('' + database.player2 + 'state', 'STALEMATE!');
          redisCollection.set('' + database.player1 + 'status', 'available');
          redisCollection.set('' + database.player2 + 'status', 'available');
          Tasks.update(database._id, {
            $set: {status: 'finished'}
          });
          //Tasks.remove(database._id);
        }
      }
    }
  });

  Template.gamelist.events({
    "click button": function(event) {
      var database = Tasks.findOne({$and: [
        {player1: event.target.className}, {status: 'created'}]});
      Tasks.update(database._id, {
        $set: {player2: Meteor.userId(), status: 'started', player2Address: Meteor.user().emails[0].address}
      });

      redisCollection.set('' + database.player1 + 'state', 'The game is started');
      redisCollection.set('' + Meteor.userId() + 'state', 'The game is started');
      redisCollection.set('' + Meteor.userId() + 'status', 'inGame');
    }
  });

  Template.newgame.events({
    "click .new-game": function(event) {
      Tasks.insert({
        player1Address: Meteor.user().emails[0].address,
        player2Address: null,
        player1: Meteor.userId(),
        player2: null,
        status: 'created',
        text1: '?',
        text2: '?',
        text3: '?',
        text4: '?',
        text5: '?',
        text6: '?',
        text7: '?',
        text8: '?',
        text9: '?',
        disabled1: false,
        disabled2: false,
        disabled3: false,
        disabled4: false,
        disabled5: false,
        disabled6: false,
        disabled7: false,
        disabled8: false,
        disabled9: false,
        turn: 'X',
        newgame: true,
        playerTurn: Meteor.userId(),
        whoseTurn: Meteor.user().emails[0].address
      });

      redisCollection.set('' + Meteor.userId() + 'state', 'The lobby is created');
      redisCollection.set('' + Meteor.userId() + 'status', 'inGame');
    }
  });
}

if(Meteor.isserver) {
  Meteor.startup(function () {
    process.env.REDIS_URL = "redis://:@127.0.0.1:6379/0";
  });
}
