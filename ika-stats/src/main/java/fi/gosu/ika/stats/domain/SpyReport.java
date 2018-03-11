package fi.gosu.ika.stats.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.*;
import java.util.Date;

/**
 * SpyReport.jsx Class
 *
 * @author Joppe151617
 * @since 0.1.0
 */
@Entity
public class SpyReport extends AbstractPersistable<Long> {

    @Column(unique=true)
    private Long spyReportId;
    @Column(unique=true)
    private Long townId;
    @OneToOne
    @JoinColumn(name="townId", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "none", value = ConstraintMode.NO_CONSTRAINT))
    @NotFound(action = NotFoundAction.IGNORE)
    private Town town;
    private String playerName;
    private String alliance;
    private String townName;
    private String coordinates;
    private boolean inactive;
    private int warehouseLvl;
    private int wallLvl;
    private int robberyLimit;
    private int wood;
    private int wine;
    private int marble;
    private int crystal;
    private int sulphur;
    //robbable tells how much resources can be robbed.
    private int robbable;
    @JsonFormat(pattern="dd.MM.yyyy HH:mm:ss")
    private Date time;

    public Long getSpyReportId() {
        return spyReportId;
    }

    public Long getTownId() {
        return townId;
    }

    public Town getTown() {
        return town;
    }

    public String getPlayerName() {
        return playerName;
    }

    public String getAlliance() {
        return alliance;
    }

    public String getTownName() {
        return townName;
    }

    public String getCoordinates() {
        return coordinates;
    }

    public boolean getInactive(){
        return inactive;
    }

    public int getWarehouseLvl() {
        return warehouseLvl;
    }

    public int getWallLvl() {
        return wallLvl;
    }

    public int getRobberyLimit() {
        if(this.town != null) {
            this.robberyLimit = this.town.getWarehouseLvl() * 480;
            return robberyLimit;
        } else {
            return robberyLimit = 100;
        }
    }

    public int getWood() {
        return wood;
    }

    public int getWine() {
        return wine;
    }

    public int getMarble() {
        return marble;
    }

    public int getCrystal() {
        return crystal;
    }

    public int getSulphur() {
        return sulphur;
    }

    public int getRobbable() {
        int x = 0;
        int stealable = getRobberyLimit();
        if(this.wood > stealable) {
            x = x + (this.wood - stealable);
        }
        if(this.wine > stealable) {
            x = x + (this.wine - stealable);
        }
        if(this.marble > stealable) {
            x = x + (this.marble - stealable);
        }
        if(this.crystal > stealable) {
            x = x + (this.crystal - stealable);
        }
        if(this.sulphur > stealable) {
            x = x + (this.sulphur - stealable);
        }
        this.robbable = x;
        return robbable;
    }

    public Date getTime() {
        return time;
    }



    public void setSpyReportId(Long spyReportId) {
        this.spyReportId = spyReportId;
    }

    public void setTownId(Long townId) {
        this.townId = townId;
    }

    public void setTown(Town town) {
        this.town = town;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public void setAlliance(String alliance) {
        this.alliance = alliance;
    }

    public void setTownName(String townName) {
        this.townName = townName;
    }

    public void setCoordinates(String coordinates) {
        this.coordinates = coordinates;
    }

    public void setInactive(Boolean inactive) {
        this.inactive = inactive;
    }

    public void setWarehouseLvl(int warehouseLvl) {
        this.warehouseLvl = warehouseLvl;
    }

    public void setWallLvl(int wallLvl) {
        this.wallLvl = wallLvl;
    }

    public void setWood(int wood) {
        this.wood = wood;
    }

    public void setWine(int wine) {
        this.wine = wine;
    }

    public void setMarble(int marble) {
        this.marble = marble;
    }

    public void setCrystal(int crystal) {
        this.crystal = crystal;
    }

    public void setSulphur(int sulphur) {
        this.sulphur = sulphur;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    @JsonIgnore
    @Override
    public boolean isNew() {
        return super.isNew();
    }
}
