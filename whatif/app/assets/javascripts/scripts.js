$(function(){
  start()

  function start(){
    $(".here").html("")
    $("#list").html("")
    $("#nav").html("<button id='addEvent'>ADD EVENT</button>" + " " +"<a href='#' id='home'>HOME</a>")
    addEvent()
    events()
    homepage()
  }

  function homepage(){
    $("#home").click(function(event){
      start()
    })
  }
 
  function events(){
    $.ajax({
      url: '/events',
      type: 'GET',
      success: function(result){
        for (var i = 0; i < result.length; i++){
           $("#list").append("<li><a href='#' id='"+result[i].id+"'>"+result[i].name+"</a></li>")
           individual(result[i])
        }
       
      }
    })
  }

  function individual(result){
    $("#"+result.id).click(function(event){
    $(".here").html("<h1>"+result.name+ " " + result.description + " "+ result.probability + " " + result.impact+"</h1><button id='solution"+ result.id+"'>Add Solution </button><button id='effect"+result.id+"'>Add Effect</button>")
    $(".here").append("<ul id='solutionlist'>Solutions</ul>")
     for (var i = 0; i < result.solutions.length; i++){ 
        $("#solutionlist").append("<li>"+result.solutions[i].description+"</li>")
      }

      $.ajax({
        url: "/effects",
        type: 'GET',
        data: {id: result.id},
        success: function(result){
            $(".here").append("<ul id='effectlist'>Effects</ul>")
             for (var i = 0; i < result.length; i++){ 
             $("#effectlist").append("<li>"+result[i].effects+"</li>")
           }

        }
      })

  
        
    addSolution(result.id)
    addEffect(result.id)
    $("#list").html('')
    })
  }

function addEffect(id){
  $("#effect"+id).click(function(event){
    $(".here").html("<input name='effect' type='text' placeholder='effect'></input> <select name ='emotion'><option name='fear'>Fear</option><option name='embarrassment'>Embarrassment</option><option name='guilt'>Guilt</option><option name='shame'>Shame</option><option name='grief'>Grieh</option><option name='anger'>Anger</option><option name='hatred'>Hatred</option><option name='jealousy'>Jealousy</option><option name='annoyance'>Annoyance</option><option name='boredom'>Boredom</option></select><button id='addeffect"+id+"'>ADD</button>")
      addingEffect(id)
  })
}

function addingEffect(id){
  $("#addeffect"+id).click(function(event){
  var effect = $("input[name='effect']").val()
  var emotion = $("select[name='emotion']").val()
  debugger
    $.ajax({
    url: '/effects',
    type: 'POST',
    data : {effect: effect, emotion: emotion, event_id: id},
    success: function(result){
     window.location.reload()
     alert("Effect was Added")
    }
  })

  })

}


  function addSolution(id){
    $("#solution"+id).click(function(event){
      $(".here").html("<input name='description' type='text' placeholder='description'></input><input name='probability' type='number' placeholder='probability'></input><button id='addingSolution" + id+"'>ADD</button>")
      console.log("test")
      addingSolution(id)
    })
  }

  function addingSolution(id){
  $("#addingSolution"+id).click(function(event){
  var description = $("input[name='description']").val()
  var probability = $("input[name='probability']").val()
    $.ajax({
    url: '/solutions',
    type: 'POST',
    data : {description: description, probability: probability, event_id: id},
    success: function(result){
      console.log("test")
     window.location.reload()
     alert("Solution was Added")
    }
  })

  })

  }

  function addEvent(){
    $("#addEvent").click(function(event){
      $("#list").html("")
      $(".here").html("Name:<input name = 'name' type = 'text'></input>Description: <textarea name = 'description' rows='4' cols='10'></textarea>Probabality: <input name = 'probability' type = 'number' max = '10' min = '1'></input>Impact On You: <input name = 'impact' type = 'number' max = '10' min = '1'></input>Can You Accept?<select name = 'accept'><option value='true'>TRUE</option><option value='false'>FALSE</option></select><button id='adding'>ADD</button>")
       adding()
    }) 
  }
 
 function adding(){
  $("#adding").click(function(event){
  var name = $("input[name='name']").val()
  var description = $("textarea[name='description']").val()
  var probability = $("input[name='probability']").val()
  var impact = $("input[name='impact']").val()
  var accept = $("select[name='accept']").val()

  $.ajax({
    url: '/events',
    type: 'POST',
    data : {name: name, description: description, probability: probability, impact: impact, accept: accept},
    success: function(result){
     window.location.reload()
     alert("Event Was Added")
    }
  })

})
 }

})