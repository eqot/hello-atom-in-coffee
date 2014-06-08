{$} = require 'space-pen'

TestView = require './scripts/client/test-view'
AnotherTestView = require './scripts/client/another-test-view'

$ =>
  # $('body').append(new TestView(greeting: 'Hi there'))
  $('body').html(new AnotherTestView())
