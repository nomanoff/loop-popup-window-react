import React from "react";
import BoxOne from "./BoxOne";
import BoxTwo from "./BoxTwo";
import BoxThree from "./BoxThree";

const data = {
  boxes: {
    "box-1": {
      id: "box-1",
      content: <BoxOne />,
      window: "chat",
    },
    "box-2": {
      id: "box-2",
      content: <BoxTwo />,
      window: "groups",
    },
    "box-3": {
      id: "box-3",
      content: <BoxThree />,
      window: "video",
    },
  },
  container: {
    id: "container",
    boxIds: ["box-1", "box-2", "box-3"],
  },
};

export default data;

const userData = {
  users: {
    "user-1": {
      id: "user-1",
      content: "User One",
      hasGroup: false,
    },
    "user-2": {
      id: "user-2",
      content: "User Two",
      hasGroup: false,
    },
    "user-3": {
      id: "user-3",
      content: "User Three",
      hasGroup: false,
    },
    "user-4": {
      id: "user-4",
      content: "User Four",
      hasGroup: false,
    },
  },
  groups: {
    "group-1": {
      id: "group-1",
      members: [],
      hasMembers: false,
    },
    "group-2": {
      id: "group-2",
      members: [],
      hasMembers: false,
    },
  },

  media: {
    "media-1": {
      id: "media-1",
      source: "video",
    },
    "media-2": {
      id: "media-2",
      source: "radio",
    },
  },

  rows: {
    "row-1": {
      id: "row-1",
      title: "users",
      contentIds: ["user-1", "user-2", "user-3", "user-4"],
    },

    "row-2": {
      id: "row-2",
      title: "groups",
      contentIds: ["group-1", "group-2"],
    },
    "row-3": {
      id: "row-3",
      title: "media",
      contentIds: ["media-1", "media-2"],
    },
  },

  rowOrder: ["row-1", "row-2", "row-3"],
};

export { userData };
