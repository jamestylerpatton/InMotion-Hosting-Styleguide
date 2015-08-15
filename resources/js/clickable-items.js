module.exports = function($){
  clickableItems = {
    items : itemData,
    cacheDom : function(){
      this.$secInput = $('.show-sec-info');
      this.$dragHandle = this.$secInput.find('.handle');
      this.$close = this.$secInput.find('.close');
      this.$elemShow = this.$secInput.find('.information');
      this.$elemHeader = this.$secInput.find('h2');
      this.$allElements = $('.show-sec-info .all');
      this.$clickableElem = $('[data-sg]');
    },
    bindEvents : function(){
      this.$clickableElem.on('click', this.showInfo.bind(this));
      this.$close.on('click', this.hideInfo.bind(this));
      $('.show-sec-info').drags({ handle : this.$dragHandle });
    },
    showInfo : function(event){
      var clickedElem = $(event.target).attr('data-name');
      this.deleteInfo();
      this.addInfo(clickedElem);

      this.$secInput.fadeIn(250);
    },
    hideInfo : function(){
      this.$secInput.fadeOut(250, function(){
        clickableItems.deleteInfo();
      });
    },
    addInfo : function(clickedElem){
      this.$elemHeader.text(this.items[clickedElem].name);
      for (var key in this.items[clickedElem].props){
        console.log(key + " = " + this.items[clickedElem].props[key]);
        this.$elemShow.append('<h3>'+key+' :</h3>');
        this.$elemShow.append('<p>'+this.items[clickedElem].props[key]+'</p>');
      }
    },
    deleteInfo : function(){
      this.$elemShow.html('');
    },
    init : function(){
      this.cacheDom();
      this.bindEvents();
      console.log('init');
    }
  }
  clickableItems.init();
};