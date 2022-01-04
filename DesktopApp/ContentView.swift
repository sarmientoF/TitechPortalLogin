//
//  ContentView.swift
//  DesktopApp
//
//  Created by Fernando Gabriel Sarmiento Diaz on 2021/10/04.
//

import SwiftUI

struct ContentView: View {
    
    let data = (1...100).map { "Item \($0)" }

    let columns = [
        GridItem(.adaptive(minimum: 80)),
        GridItem(.adaptive(minimum: 80)),
        GridItem(.adaptive(minimum: 80)),
        GridItem(.adaptive(minimum: 80)),
    ]


    
    var body: some View {
        ScrollView {
            LazyVGrid(columns: columns, spacing: 20) {
                ForEach(data, id: \.self) { item in
                    Text(item)
//                    TextField()
//                    Spacer()
                }
            }
            .padding(.horizontal)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
            .frame(width: 600, height: 300)
    }
}
