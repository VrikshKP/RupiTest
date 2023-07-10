import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video'

interface Props extends PropsWithChildren {
    source: string;
    loop?: boolean;
    resizeMode?: 'cover' | 'contain' | 'center' | undefined;
    height?: number;
}

const BGVideo: FC<Props> = ({
    children,
    source,
    loop,
    resizeMode,
    height,
}) => {
    return (
        <View>
            <Video
                source={{uri: source}}
                style={{
                    height: height,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }}
                muted
                repeat={loop}
                resizeMode={resizeMode}
                rate={1.0}
            />
            {children}
        </View>

    );
};

export default BGVideo;
