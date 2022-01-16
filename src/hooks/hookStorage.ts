import React, { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_USER_TOKEN = "@rocketlab:token";
const KEY_USER_INFO = "@rocketlab:user";

interface SaveProps {
  key: string;
  data: Object;
}

const HookStorage = () => {
  const saveStorage = useCallback(async ({ key, data }: SaveProps) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }, []);

  const getItem = useCallback(async (key: string) => {
    try {
      const response = await AsyncStorage.getItem(key);
      return JSON.parse(response || "");
    } catch (error) {
      console.log(error);
      return false;
    }
  }, []);

  const removeItem = useCallback(async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    saveStorage,
    getItem,
    KEY_USER_TOKEN,
    removeItem,
    KEY_USER_INFO,
  };
};

export { HookStorage };
