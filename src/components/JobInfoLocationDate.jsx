import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { ChevronRightIcon } from '../icons';

const JobInfoLocationDate = ({
  title,
  subtitle = undefined,
  location,
  start,
  end = undefined,
  children,
}) => (
  <View style={{
    flexDirection: "row",
    justifyContent: "space-between",
  }}>
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      fontWeight: 700,
      gap: 2,
    }}>
      <Text style={{
        textTransform: "uppercase"
      }}>
        {title}
      </Text>
      {subtitle && <Text>{subtitle}</Text>}
      <ChevronRightIcon height={8} width={8} />
      <Text style={{
        fontStyle: "italic",
      }}>
        {location}
      </Text>
    </View>
    <View>
      <Text style={{
        fontWeight: 700,
        fontStyle: "italic",
      }}>
        {`${start}${end ? ` - ${end}` : ''}`}
      </Text>
    </View>
    {children}
  </View>
)

export default JobInfoLocationDate;
