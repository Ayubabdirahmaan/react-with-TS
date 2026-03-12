import React from "react";

interface userInfo {
  name: string;
  age?: number;
}

export const UserCard = ({ name, age }: userInfo) => {
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
    </>
  );
};
