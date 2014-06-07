{View} = require 'space-pen'

module.exports =
class TestView extends View
  @content: ->
    @div =>
      @h1 "Spacecraft"
      @ol =>
        @li "Apollo"
        @li "Soyuz"
        @li "Space Shuttle"
