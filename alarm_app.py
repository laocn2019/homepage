import streamlit as st
from datetime import datetime, time
import time as time_module

st.title("Alarm Clock")

alarm_time = st.time_input("Set alarm time", value=datetime.now().time())
message = st.text_input("Alarm message", "Time's up!")

if "alarm_set" not in st.session_state:
    st.session_state.alarm_set = False

if st.button("Set Alarm"):
    st.session_state.alarm_set = True
    st.session_state.target_time = alarm_time
    st.session_state.triggered = False
    st.success(f"Alarm set for {alarm_time.strftime('%H:%M:%S')}")

if st.session_state.get("alarm_set") and not st.session_state.get("triggered"):
    now = datetime.now().time().replace(microsecond=0)
    st.write(f"Current time: {now.strftime('%H:%M:%S')}")
    if now >= st.session_state.target_time:
        st.session_state.triggered = True
        st.warning(message)
        st.balloons()
    else:
        time_module.sleep(1)
        st.experimental_rerun()
