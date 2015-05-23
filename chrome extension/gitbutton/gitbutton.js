/* global chrome */
/// <reference path="../typings/jquery/jquery.d.ts"/>
var pagehead = document.querySelector('.pagehead-actions');

if(pagehead){
  $.get(chrome.extension.getURL('gitbutton/gitbutton.template.html'), function(html_content){
    $(pagehead).prepend(html_content);
    $('.ccc-list-input').select2({
      tags: true,
      tokenSeparators: [',', ' ']
    });
    $('.ccc-list-input').on("select2:unselect", function(e){
      console.log(e);
    });
  });

}

