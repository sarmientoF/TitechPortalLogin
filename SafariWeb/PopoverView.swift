//
//  SafariExtensionViewController.swift
//  SafariWeb
//
//  Created by Fernando Gabriel Sarmiento Diaz on 2021/10/04.
//

import SafariServices

class PopoverView: SFSafariExtensionViewController {
    
    static let shared: PopoverView = {
        let shared = PopoverView()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

    @IBAction func openPage(_ sender: Any) {
        SFSafariExtension.getBaseURI { baseURI in
            guard let baseURI = baseURI else { return }
            SFSafariApplication.getActiveWindow { (window) in
                window?.openTab(with: baseURI.appendingPathComponent("index.html"), makeActiveIfPossible: true) { (tab) in
                    print(baseURI)
                }
            }
            self.dismissPopover()
        }

    }
}
