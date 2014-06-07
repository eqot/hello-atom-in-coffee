{$} = require 'space-pen'

TestView = require './scripts/client/test-view'

$ =>
  $('body').append(new TestView(greeting: 'Hi there'))
