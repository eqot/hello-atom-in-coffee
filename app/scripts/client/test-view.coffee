{$, View} = require 'space-pen'

class TestView extends View
  @content: ->
    @div =>
      @h1 "Spacecraft"
      @ol =>
        @li "Apollo"
        @li "Soyuz"
        @li "Space Shuttle"

$ =>
  $('body').append(new TestView(greeting: 'Hi there'))
