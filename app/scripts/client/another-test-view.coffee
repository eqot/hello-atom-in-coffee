{View} = require 'space-pen'

module.exports =
class AnotherTestView extends View
  @content: ->
    @div =>
      @h1 "Another Test 5"
      @div class: 'component', =>
        @div class: 'key-partners'
        @div class: 'key-activities'
        @div class: 'value-propositions'
        @div class: 'customer-relationships'
        @div class: 'customer-segments'
