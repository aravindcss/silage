$(document).ready(function() {
    $(".card").click(function(){
    	if ($(this).hasClass("is-flipped")) {
        	$(".card").removeClass('is-flipped');
        	return false;
    	}
        $(".card").removeClass('is-flipped');
        $(this).toggleClass('is-flipped');
    });

    $(".card .sprites").click(function(){
        // alert("Call");
        link = $(this).attr("href");
        window.open(link);
            return false;
    });

    $(".meetus_mob_row .learnmore").click(function(){
        rel = $(this).attr("rel");
        data = $("#" + rel).html();
        // alert("#" + rel);
        $("#meetus_dynamic_data").html(data);
        $("#meetus_popup").fadeIn();
        $('body,html').css('overflow', 'hidden');
    });

    $(".meetus_mob_row img").click(function(){
        rel = $(this).parent().parent().parent().find(".learnmore").attr("rel");
        data = $("#" + rel).html();
        // alert("#" + rel);
        $("#meetus_dynamic_data").html(data);
        $("#meetus_popup").fadeIn();
        $('body,html').css('overflow', 'hidden');
    });

    $(document).on('click', '.close_btn_desc', function() {
        $("#meetus_popup").fadeOut();
        $('body,html').css('overflow', 'scroll');
        $("#meetus_dynamic_data").html("");
    });

    

    $(".filter_by").selectBox({keepInViewport:false,mobile:true, hideOnWindowScroll: true});

    $(document).mouseup(function (e) { 
      if ($(e.target).closest(".card_face").length === 0) {
        $(".card").removeClass('is-flipped');
      }
    });


    var Pankaj;
    var Subha;
    var Sameer;
    // var Vandana;
    var Somasree;
    var Thomas;
    var Kusumawati;
    var Neeraj;
    var Basuki;
    var Trupti;
    // var Sunder;

    // Mobile
    var Pankaj_M;
    var Subha_M;
    var Sameer_M;
    // var Vandana_M;
    var Somasree_M;
    var Thomas_M;
    var Kusumawati_M;
    var Neeraj_M;
    var Basuki_M;
    var Trupti_M;
    // var Sunder_M;


    var elem = document.getElementById('bodymovin')
    var PankajData = {
      container: document.getElementById('arrow_pankaj'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Pankaj.json' // the path to the animation json
    };
    var SubhaData = {
      container: document.getElementById('arrow_subha'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Subha.json' // the path to the animation json
    };
    var SameerData = {
      container: document.getElementById('arrow_sameer'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Sameer.json' // the path to the animation json
    };
    var VandanaData = {
      container: document.getElementById('arrow_vandana'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Vandana.json' // the path to the animation json
    };
    var SomasreeData = {
      container: document.getElementById('arrow_somasree'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Somashree.json' // the path to the animation json
    };
    var ThomasData = {
      container: document.getElementById('arrow_thomas'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Pankaj.json' // the path to the animation json
    };
    var KusumawatiData = {
      container: document.getElementById('arrow_kusumawati'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Vandana.json' // the path to the animation json
    };
    var NeerajData = {
      container: document.getElementById('arrow_neeraj'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Neeraj.json' // the path to the animation json
    };
    var BasukiData = {
      container: document.getElementById('arrow_basuki'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Basuki.json' // the path to the animation json
    };    
    var TruptiData = {
      container: document.getElementById('arrow_trupti'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Neeraj.json' // the path to the animation json
    };
    // var SunderData = {
    //   container: document.getElementById('arrow_sunder'), // the dom element that will contain the animation
    //   renderer: 'svg',
    //   loop: false,
    //   autoplay: false,
    //   path: '../public/json/Arrow_Neeraj.json' // the path to the animation json
    // };

    // Mobile
    var PankajData_M = {
      container: document.getElementById('arrow_pankaj_m'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Pankaj.json' // the path to the animation json
    };
    var SubhaData_M = {
      container: document.getElementById('arrow_subha_m'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Subha.json' // the path to the animation json
    };
    var SameerData_M = {
      container: document.getElementById('arrow_sameer_m'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Sameer.json' // the path to the animation json
    };
    var VandanaData_M = {
      container: document.getElementById('arrow_vandana_m'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Vandana.json' // the path to the animation json
    };
    var SomasreeData_M = {
      container: document.getElementById('arrow_somasree_m'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Somashree.json' // the path to the animation json
    };
    var ThomasData_M = {
      container: document.getElementById('arrow_thomas_m'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Pankaj.json' // the path to the animation json
    };
    var KusumawatiData_M = {
      container: document.getElementById('arrow_kusumawati_m'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Kusumawati.json' // the path to the animation json
    };
    var NeerajData_M = {
      container: document.getElementById('arrow_neeraj_m'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Neeraj.json' // the path to the animation json
    };
    var BasukiData_M = {
      container: document.getElementById('arrow_basuki_m'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../public/json/Arrow_Basuki.json' // the path to the animation json
    };
    // var KendriaData_M = {
    //   container: document.getElementById('arrow_kendria_m'), // the dom element that will contain the animation
    //   renderer: 'svg',
    //   loop: false,
    //   autoplay: false,
    //   path: '../public/json/Arrow_Basuki.json' // the path to the animation json
    // };


    // var SunderData_M = {
    //   container: document.getElementById('arrow_sunder_m'), // the dom element that will contain the animation
    //   renderer: 'svg',
    //   loop: false,
    //   autoplay: false,
    //   path: '../public/json/Arrow_Basuki.json' // the path to the animation json
    // };    


    Pankaj = bodymovin.loadAnimation(PankajData);
    Subha = bodymovin.loadAnimation(SubhaData);
    Sameer = bodymovin.loadAnimation(SameerData);
    Vandana = bodymovin.loadAnimation(VandanaData);
    Somasree = bodymovin.loadAnimation(SomasreeData);
    Thomas = bodymovin.loadAnimation(ThomasData);
    Kusumawati = bodymovin.loadAnimation(KusumawatiData);
    Neeraj = bodymovin.loadAnimation(NeerajData);
    Basuki = bodymovin.loadAnimation(BasukiData);
    Trupti = bodymovin.loadAnimation(TruptiData);
    // Sunder = bodymovin.loadAnimation(SunderData);

    // Mobile
    Pankaj_M = bodymovin.loadAnimation(PankajData_M);
    Subha_M = bodymovin.loadAnimation(SubhaData_M);
    Sameer_M = bodymovin.loadAnimation(SameerData_M);
    Vandana_M = bodymovin.loadAnimation(VandanaData_M);
    Somasree_M = bodymovin.loadAnimation(SomasreeData_M);
    Thomas_M = bodymovin.loadAnimation(ThomasData_M);
    Kusumawati_M = bodymovin.loadAnimation(KusumawatiData_M);
    Neeraj_M = bodymovin.loadAnimation(NeerajData_M);
    Basuki_M = bodymovin.loadAnimation(BasukiData_M);
    //Kendria_M = bodymovin.loadAnimation(KendriaData_M);
    // Sunder_M = bodymovin.loadAnimation(SunderData_M);

    /*var waypoint = new Waypoint({
      element: document.getElementById('Somasree_Arrow'),
      handler: function(direction) {
        setTimeout(function(){ Somasree.play(); }, 1000);
      },
      offset: '50%'
    });*/

    var waypoint = new Waypoint({
      element: document.getElementById('Pankaj_Arrow'),
      handler: function(direction) {
        setTimeout(function(){ Pankaj.play(); }, 1000);
      },
      offset: '80%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Subha_Arrow'),
      handler: function(direction) {
        setTimeout(function(){ Subha.play(); }, 1000);
      },
      offset: '50%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Sameer_Arrow'),
      handler: function(direction) {
        setTimeout(function(){ Sameer.play(); }, 1000);
      },
      offset: '80%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Vandana_Arrow'),
      handler: function(direction) {
        // alert("Call");
        setTimeout(function(){ Vandana.play(); }, 1000);
      },
      offset: '50%'
    });


    var waypoint = new Waypoint({
      element: document.getElementById('Thomas_Arrow'),
      handler: function(direction) {
        setTimeout(function(){ Thomas.play(); }, 1000);
      },
      offset: '50%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Kusumawati_Arrow'),
      handler: function(direction) {
        setTimeout(function(){ Kusumawati.play(); }, 1000);
      },
      offset: '90%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Neeraj_Arrow'),
      handler: function(direction) {
        setTimeout(function(){ Neeraj.play(); }, 1000);
      },
      offset: '90%'
    });

    // var waypoint = new Waypoint({
    //   element: document.getElementById('Basuki_Arrow'),
    //   handler: function(direction) {
    //     setTimeout(function(){ Basuki.play(); }, 1000);
    //   },
    //   offset: '90%'
    // });

    var waypoint = new Waypoint({
      element: document.getElementById('Trupti_Arrow'),
      handler: function(direction) {
        setTimeout(function(){ Trupti.play(); }, 1000);
      },
      offset: '90%'
    });

    // var waypoint = new Waypoint({
    //   element: document.getElementById('Sunder_Arrow'),
    //   handler: function(direction) {
    //     setTimeout(function(){ Sunder.play(); }, 1000);
    //   },
    //   offset: '90%'
    // });

    // Mobile

    var waypoint = new Waypoint({
      element: document.getElementById('Pankaj_Arrow_M'),
      handler: function(direction) {
        setTimeout(function(){ Pankaj_M.play(); }, 1000);
      },
      offset: '80%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Subha_Arrow_M'),
      handler: function(direction) {
        setTimeout(function(){ Subha_M.play(); }, 1000);
      },
      offset: '80%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Sameer_Arrow_M'),
      handler: function(direction) {
        setTimeout(function(){ Sameer_M.play(); }, 1000);
      },
      offset: '80%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Kusumawati_Arrow_M'),
      handler: function(direction) {
        setTimeout(function(){ Kusumawati_M.play(); }, 1000);
      },
      offset: '90%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Vandana_Arrow_M'),
      handler: function(direction) {
        setTimeout(function(){ Vandana_M.play(); }, 1000);
      },
      offset: '90%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Neeraj_Arrow_M'),
      handler: function(direction) {
        setTimeout(function(){ Neeraj_M.play(); }, 1000);
      },
      offset: '90%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Somasree_Arrow_M'),
      handler: function(direction) {
        setTimeout(function(){ Somasree_M.play(); }, 1000);
      },
      offset: '80%'
    });

    var waypoint = new Waypoint({
      element: document.getElementById('Basuki_Arrow_M'),
      handler: function(direction) {
        setTimeout(function(){ Basuki_M.play(); }, 1000);
      },
      offset: '90%'
    });

    // var waypoint = new Waypoint({
    //   element: document.getElementById('Kendria_Arrow_M'),
    //   handler: function(direction) {
    //     setTimeout(function(){ Kendria_M.play(); }, 1000);
    //   },
    //   offset: '90%'
    // });

    // var waypoint = new Waypoint({
    //   element: document.getElementById('Thomas_Arrow_M'),
    //   handler: function(direction) {
    //     setTimeout(function(){ Thomas_M.play(); }, 1000);
    //   },
    //   offset: '90%'
    // });

    // var waypoint = new Waypoint({
    //   element: document.getElementById('Sunder_Arrow_M'),
    //   handler: function(direction) {
    //     setTimeout(function(){ Sunder_M.play(); }, 1000);
    //   },
    //   offset: '90%'
    // });




});
