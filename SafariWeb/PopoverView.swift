//
//  SafariExtensionViewController.swift
//  SafariWeb
//
//  Created by Fernando Gabriel Sarmiento Diaz on 2021/10/04.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
