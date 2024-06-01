import React from "react";
import { ScrollView } from "react-native";
import { UrText } from "uride-dsl";
import { Colors } from "uride-dsl/utils";

const FirstScreen = () => {
  return (
    <ScrollView style={{ padding: 20, backgroundColor: Colors.white }}>
      <UrText type="headline">Lorem ipsum</UrText>
      <UrText>
        dolor sit amet, consectetur adipiscing elit. Vivamus non leo ipsum.
        Praesent feugiat lacus auctor neque condimentum, vel viverra ligula
        rhoncus. Sed vestibulum id nunc a rutrum. Cras commodo ipsum at iaculis
        maximus. Donec fermentum diam viverra risus mollis, non dignissim turpis
        laoreet. Vestibulum rutrum, nisi a scelerisque aliquam, dolor ante
        porttitor metus, vitae facilisis lacus enim eget tellus. Nunc pretium,
        ligula in blandit posuere, justo felis sollicitudin diam, at malesuada
        est ipsum sit amet ligula. Aliquam erat volutpat. Sed ut nunc at tortor
        imperdiet efficitur. Vestibulum tristique non felis vitae ullamcorper.
        Donec imperdiet urna tincidunt, suscipit ligula eget, mollis orci.
      </UrText>
    </ScrollView>
  );
};

export default FirstScreen;
