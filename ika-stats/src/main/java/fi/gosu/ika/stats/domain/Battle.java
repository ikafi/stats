package fi.gosu.ika.stats.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Battle Class
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
@Entity
public class Battle extends AbstractPersistable<Long> {

    // TODO: eri servuilla voi mennä compatId:t päällekkäin
    private Long compatId;
    private String name;
    private int rounds;
    @JsonFormat(pattern="dd.MM.yyyy hh:mm:ss")
    private Date time;
    @ElementCollection private List<String> attacker;
    @ElementCollection private List<String> defender;
    @ElementCollection private List<String> winners;
    @ElementCollection private List<String> losers;
    @ElementCollection private List<String> events;
    @OneToMany private List<Troop> troops;
    @OneToOne private Resources loot;

    public Battle() {
        this.events = new ArrayList<>();
    }

    public Long getCompatId() {
        return compatId;
    }
    public String getName() {
        return name;
    }
    public int getRounds() {
        return rounds;
    }
    public Date getTime() {
        return time;
    }
    public List<String> getAttacker() {
        return attacker;
    }
    public List<String> getDefender() {
        return defender;
    }
    public List<String> getWinners() {
        return winners;
    }
    public List<String> getLosers() {
        return losers;
    }
    public List<String> getEvents() {
        return events;
    }
    @JsonIgnore
    public List<Troop> getTroops() {
        return troops;
    }
    public List<Troop> getAttackerTroop() {
        return new ArrayList<Troop>() {{
            for (Troop troop : troops) {
                if (troop.getType() == Troop.TYPE.ATTACKER) add(troop);
            }
        }};
    }
    public List<Troop> getDefenderTroop() {
        return new ArrayList<Troop>() {{
            for (Troop troop : troops) {
                if (troop.getType() == Troop.TYPE.DEFENDER) add(troop);
            }
        }};
    }
    public Resources getLoot() {
        return loot;
    }

    public void setCompatId(Long compatId) {
        this.compatId = compatId;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setRounds(int rounds) {
        this.rounds = rounds;
    }
    public void setTime(Date time) {
        this.time = time;
    }
    public void setAttacker(List<String> attacker) {
        this.attacker = attacker;
    }
    public void setDefender(List<String> defender) {
        this.defender = defender;
    }
    public void setWinners(List<String> winners) {
        this.winners = winners;
    }
    public void setLosers(List<String> losers) {
        this.losers = losers;
    }
    public void setEvents(List<String> events) {
        this.events = events;
    }
    public void setTroops(List<Troop> troops) {
        this.troops = troops;
    }
    public void setLoot(Resources loot) {
        this.loot = loot;
    }

    @JsonIgnore
    @Override
    public boolean isNew() {
        return super.isNew();
    }
}
