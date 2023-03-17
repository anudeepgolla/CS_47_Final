import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import 'react-native-url-polyfill/auto'

const supabaseUrl = "https://btfgjfnvqrdbtlbxafpk.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZmdqZm52cXJkYnRsYnhhZnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg5MjUxMzIsImV4cCI6MTk5NDUwMTEzMn0.dOhCwe8mCq__rTHXFZZa8DOi1c3RNvWUh3svm9kwzlc";

export const supabase = createClient(supabaseUrl, anonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true, 
        persistSession: true,
        detectSessionInUrl: false,
    }
});