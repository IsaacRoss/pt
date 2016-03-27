module Main where

import Data.DOM.Simple.Unsafe.Element
import Data.DOM.Simple.Unsafe.Events
import Data.DOM.Simple.Unsafe.Window
import Data.DOM.Simple.Window
import Prelude

main = do 
	document <- unsafeDocument globalWindow
	element  <- unsafeQuerySelector "#inputName" document
	unsafeAddEventListener "input" updateBadge element

updateBadge event = do
	document <- unsafeDocument globalWindow
	badge    <- unsafeQuerySelector "#badgeName" document
	target   <- unsafeEventTarget event
	input    <- unsafeValue target
	unsafeSetTextContent input badge


